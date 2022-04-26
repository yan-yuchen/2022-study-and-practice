let AC_GAME_OBJECTS = []

class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this); //存储对象

        this.timedelta = 0; //时间间隔，每个object对象都需要存储当前一帧与上一帧的时间间隔，每个物体的速度取决于时间间隔
        this.has_call_start = false; //表示当前对象是否调用过start函数

    }

    start() { //初始执行一次

    }

    updats() { //每一帧执行一次（第一帧除外）

    }

    destroy() { //删除对象
        for (let i in AC_GAME_OBJECTS) {    //for in 是枚举下标，for of是枚举值
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp; //上一帧执行时刻

let AC_GAME_OBJECTS_FRAME = (timestamp) => {  //timestamp它表示requestAnimationFrame() 开始去执行回调函数的时刻,时间戳
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_call_start) {  //如果没有执行过start函数
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp; //时间间隔，当前时刻-上一帧时刻
            obj.update();
        }
    }

    last_timestamp = timestamp;  //更新上次调用函数的时刻
    requestAnimationFrame(AC_GAME_OBJECTS_FRAME); //递归调用
}

requestAnimationFrame(AC_GAME_OBJECTS_FRAME);

export {
    AcGameObject
}

