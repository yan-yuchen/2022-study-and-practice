import { AcGameObject } from '/static/js/ac_game_object/base.js';
import { Controller } from '/static/js/controller/base.js';

export class GameMap extends AcGameObject { //继承
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>'); //jQuery用法，tabindex=0使得可以聚焦读取键盘输入
        this.ctx = this.$canvas[0].getContext('2d'); //取出canvas，这里参考canvas用法
        this.root.$kof.append(this.$canvas); //将canvas加入id为kof的div里
        this.$canvas.focus(); //使得convas可以聚焦

        this.controller = new Controller(this.$canvas); //将controller加入地图中，用于读取键盘输入
    }

    start() {    //开始时执行

    }

    update() {   //每一帧执行
        this.render();
    }

    render() {   //渲染函数中需要将每一帧地图都清空，否则物体运动过程会一直停留在地图上
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
