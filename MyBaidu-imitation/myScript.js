/*
* ʵ��ҳ�е�����Tab�л�����js���벿��
* */

function myId(id) {
    //��id������������string���ͷ��ض�Ӧ��id��htmlԪ�أ����򷵻�id�����ֵ
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {

    //��ȡ������ı�ǩ�Ͷ�ӦҪ�л����ݵ�Ԫ��
    var titles = myId('nav2Titles').getElementsByTagName('a'),
        divs = myId("nav2Display").getElementsByClassName('nav2CtnBox');

    //����ǩ��������ʾ���ݸ�����һ��ʱ��ִֹͣ��
    if (titles.length != divs.length)
        return;

    //����titles�µ�����<a>
    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onclick = function () {

            for (var j = 0; j < titles.length; j++) {
                //���<a>������Ԫ�ص�class
                titles[j].className = '';

                //��������û��ѡ�е�div
                divs[j].style.display = 'none';
            }
            //���õ�ǰ��������ǩΪ������ʾ
            this.className = 'current';
            divs[this.id].style.display = 'block';
        }
    }
}