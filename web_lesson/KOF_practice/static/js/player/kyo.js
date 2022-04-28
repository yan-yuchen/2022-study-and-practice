import { Player } from '/static/js/player/base.js';
import { GIF } from '/static/js/utils/gif.js';

export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [0, -22, -22, -140, 0, 0, 0];  //偏移量，因为图片高度的原因，对应7种不同状态时回到同一水平线需要的偏移量

        for (let i = 0; i < 7; i++) { //对图片循环处理
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {  //这里的animations是在player中定义过的Map用来存储键值对，set是插入键值对
                gif: gif,
                frame_cnt: 0,  // 总图片数
                frame_rate: 5,  // 每5帧过度一次
                offset_y: offsets[i],  // y方向偏移量
                loaded: false,  // 是否加载完整
                scale: 2,  // 放大多少倍
            });

            gif.onload = function () {
                let obj = outer.animations.get(i); //Map用法get是查找关键字
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true; //表示加载完整

                if (i === 3) {  //如果是第3种图片即跳跃状态，更改帧率
                    obj.frame_rate = 4;
                }
            }
        }
    }
}
