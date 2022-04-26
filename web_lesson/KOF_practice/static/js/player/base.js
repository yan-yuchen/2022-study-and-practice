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
        }

    }

    update() {
        this.update_move();

        this.render(); //渲染
    }

    render() {

        //测试代码，画出矩形
        this.ctx.fillstyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}