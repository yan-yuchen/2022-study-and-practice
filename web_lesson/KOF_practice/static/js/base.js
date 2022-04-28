import { Kyo } from '/static/js/player/kyo.js';
import { GameMap } from '/static/js/game_map/base.js';
import { Player } from '/static/js/player/base.js';


// 创建一个类KOF表示当前的大窗口,此大类包含玩家对象，地图对象
class KOF {
    constructor(id) {  //构造函数，需要传入id
        this.$kof = $('#' + id);//jQuery选择器

        //创建地图
        this.game_map = new GameMap(this);

        //创建玩家
        this.players = [  //player对象需要传入root与info
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];

    }
}

export {
    KOF
}