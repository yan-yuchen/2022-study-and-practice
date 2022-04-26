// 创建一个类KOF表示当前的大窗口
class KOF {
    constructor(id) {  //构造函数，需要传入id
        this.$kof = $('#' + id);//jQuery选择器

    }
}

export {
    KOF
}