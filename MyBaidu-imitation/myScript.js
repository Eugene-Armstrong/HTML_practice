/*
* 实现页中导航栏Tab切换功能js代码部分
* */

function myId(id) {
    //若id的数据类型是string，就返回对应的id的html元素，否则返回id本身的值
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {

    //获取鼠标点击的标签和对应要切换内容的元素
    var titles = myId('nav2Titles').getElementsByTagName('a'),
        divs = myId("nav2Display").getElementsByClassName('nav2CtnBox');

    //若标签个数与显示内容个数不一致时则停止执行
    if (titles.length != divs.length)
        return;

    //遍历titles下的所有<a>
    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onclick = function () {

            for (var j = 0; j < titles.length; j++) {
                //清除<a>上所有元素的class
                titles[j].className = '';

                //隐藏其他没被选中的div
                divs[j].style.display = 'none';
            }
            //设置当前导航栏标签为高亮显示
            this.className = 'current';
            divs[this.id].style.display = 'block';
        }
    }
}