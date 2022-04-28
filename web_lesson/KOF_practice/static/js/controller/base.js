export class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;

        this.pressed_keys = new Set(); //set用于存储当前按住了哪个键
        this.start();
    }

    start() {
        let outer = this; //这里pressed_keys是Controller对象下的值，不是convas的，所以要使用outer
        this.$canvas.keydown(function (e) { //按下
            outer.pressed_keys.add(e.key); //这里this指的是canvas，outer指的是controller
        });

        this.$canvas.keyup(function (e) {  //放开
            outer.pressed_keys.delete(e.key);
        });
    }
}
