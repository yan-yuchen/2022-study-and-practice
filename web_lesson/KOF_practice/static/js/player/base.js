import { AcGameObject } from "/static/js/ac_game_object/base.js";

export class Player extends AcGameObject {
    constructor(root, info) { //将初始参数放至构造函数中，这里root表示大类KOF,大类KOF包含两个小类玩家与地图
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.direction = 1; //方向

        this.vx = 0;
        this.vy = 0;
        this.speedx = 400;  // 水平速度
        this.speedy = -1000;  // 跳起的初始速度
        this.gravity = 50; // 重力

        this.ctx = this.root.game_map.ctx; //这里引入canvas便于下一步操作

        this.status = 3;  // 定义状态  0: idle, 1: 向前，2：向后，3：跳跃，4：攻击，5：被打，6：死亡

        this.pressed_keys = this.root.game_map.controller.pressed_keys; //把pressed_keys拿过来

        this.animations = new Map(); //将每一个状态的动作用Map来存储

        this.frame_current_cnt = 0; //记录帧

        this.hp = 100; //血量
        this.$hp = this.root.$kof.find(`.kof-head-hp-${this.id}>div`); //jquery中.find用法：在所有后代元素中查找
        this.$hp_div = this.$hp.find('div');

    }

    start() {

    }

    update_move() {  //更新位置
        this.vy += this.gravity;  // v=v+gt

        this.x += this.vx * this.timedelta / 1000;  // x=x+vt
        this.y += this.vy * this.timedelta / 1000;  // y=y+vt

        if (this.y > 450) { //达到底部时，令速度为0，停止下落
            this.y = 450;
            this.vy = 0;

            if (this.status === 3) this.status = 0; //达到底部此时将跳跃状态更新为静止状态
        }

        if (this.x < 0) { //添加左右地图边界
            this.x = 0;
        } else if (this.x + this.width > this.root.game_map.$canvas.width()) {
            this.x = this.root.game_map.$canvas.width() - this.width;
        }


    }

    update_control() { //更新按下的键位
        let w, a, d, space;
        if (this.id === 0) { // 玩家1
            w = this.pressed_keys.has('w');
            a = this.pressed_keys.has('a');
            d = this.pressed_keys.has('d');
            space = this.pressed_keys.has(' ');
        } else {   //玩家2
            w = this.pressed_keys.has('ArrowUp');
            a = this.pressed_keys.has('ArrowLeft');
            d = this.pressed_keys.has('ArrowRight');
            space = this.pressed_keys.has('Enter');
        }

        if (this.status === 0 || this.status === 1) { //静止状态或移动状态
            if (space) {   //攻击    
                this.status = 4;
                this.vx = 0;
                this.frame_current_cnt = 0;
            } else if (w) { //跳跃
                if (d) {
                    this.vx = this.speedx;
                } else if (a) {
                    this.vx = -this.speedx;
                } else {
                    this.vx = 0;
                }
                this.vy = this.speedy;
                this.status = 3;
                this.frame_current_cnt = 0;
            } else if (d) { //向右
                this.vx = this.speedx;
                this.status = 1;
            } else if (a) { //向左
                this.vx = -this.speedx;
                this.status = 1;
            } else {
                this.vx = 0;
                this.status = 0;
            }
        }
    }

    update_direction() {  //更新位置（面朝方向）
        if (this.status === 6) return;

        let players = this.root.players;
        if (players[0] && players[1]) {
            let me = this, you = players[1 - this.id];
            if (me.x < you.x) me.direction = 1;  //如果我在左，则我面朝的方向为正方向
            else me.direction = -1;
        }
    }

    is_attack() {   //被攻击函数
        if (this.status === 6) return;

        this.status = 5;
        this.frame_current_cnt = 0;

        this.hp = Math.max(this.hp - 20, 0);

        this.$hp_div.animate({  //jquery中.animate可以实现渐变效果
            width: this.$hp.parent().width() * this.hp / 100  //通过更改血条宽度实现扣血的显示
        }, 300);   //里面的div变化慢一些，实现掉血效果
        this.$hp.animate({
            width: this.$hp.parent().width() * this.hp / 100
        }, 600);   //外面的div变化快一些

        if (this.hp <= 0) {  //死亡
            this.status = 6;
            this.frame_current_cnt = 0;
            this.vx = 0;
        }
    }

    is_collision(r1, r2) { //碰撞检测
        if (Math.max(r1.x1, r2.x1) > Math.min(r1.x2, r2.x2))
            return false;
        if (Math.max(r1.y1, r2.y1) > Math.min(r1.y2, r2.y2))
            return false;
        return true;
    }

    update_attack() {  //更新攻击函数
        if (this.status === 4 && this.frame_current_cnt === 18) { //处于攻击状态，且在18帧时（18帧时拳头挥出去）
            let me = this, you = this.root.players[1 - this.id];
            let r1;

            //r1出拳挥出的长方形，只要此长方形与人物模型长方形发生碰撞则认为击中了
            if (this.direction > 0) {      //正方向
                r1 = {
                    x1: me.x + 120,
                    y1: me.y + 40,
                    x2: me.x + 120 + 100,
                    y2: me.y + 40 + 20,
                };
            } else {    //反方向 
                r1 = {
                    x1: me.x + me.width - 120 - 100,
                    y1: me.y + 40,
                    x2: me.x + me.width - 120 - 100 + 100,
                    y2: me.y + 40 + 20,
                };
            }

            //r2为人物模型的长方形
            let r2 = {
                x1: you.x,
                y1: you.y,
                x2: you.x + you.width,
                y2: you.y + you.height
            };

            if (this.is_collision(r1, r2)) {  //如果碰撞检测成立
                you.is_attack(); //调用被攻击函数
            }
        }
    }



    update() {
        this.update_move();
        this.update_control();
        this.update_direction();
        this.update_attack();

        this.render(); //渲染
    }

    render() {  //渲染函数

        // //测试代码，画出矩形
        // this.ctx.fillstyle = this.color;
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);

        let status = this.status; //取出当前状态

        //如果和速度反方向，状态变为2（后退）
        if (this.status === 1 && this.direction * this.vx < 0) status = 2;

        let obj = this.animations.get(status);  //将当前状态status传入animations中

        if (obj && obj.loaded) {
            if (this.direction > 0) { //如果是正向
                //frame_current_cnt表示当前记录了多少帧
                //frame_current_cnt % obj.frame_cnt 当前帧数 % 图片总帧数，因为图片需要循环播放
                //frame_rate控制图片播放速率
                let k = parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt;

                //取出第k张图片
                let image = obj.gif.frames[k].image;
                //画出图像，  this.y + obj.offset_y：纵方向加上偏移量，  image.width * obj.scale：图片大小乘以缩放倍数
                this.ctx.drawImage(image, this.x, this.y + obj.offset_y, image.width * obj.scale, image.height * obj.scale);
            } else {
                this.ctx.save();
                this.ctx.scale(-1, 1); // x坐标乘-1，y坐标不变，即水平反转
                this.ctx.translate(-this.root.game_map.$canvas.width(), 0);

                let k = parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt;
                let image = obj.gif.frames[k].image;
                //水平翻转之后，两图像初始位置将会一致，所以初始位置需要对称过去
                this.ctx.drawImage(image, this.root.game_map.$canvas.width() - this.x - this.width, this.y + obj.offset_y, image.width * obj.scale, image.height * obj.scale);

                this.ctx.restore(); //恢复坐标系
            }
        }

        //状态为攻击，
        if (status === 4 || status === 5 || status === 6) {
            if (this.frame_current_cnt == obj.frame_rate * (obj.frame_cnt - 1)) { //当前帧计数=图片帧数时，即一个动作执行完时
                if (status === 6) {   //倒地死亡
                    this.frame_current_cnt--;
                } else {
                    this.status = 0; // 回归静止状态
                }
            }
        }

        this.frame_current_cnt++; //下一帧

    }

}