$(function () {
    //1级导航栏项-鼠标悬浮效果
    $(".dropdown").hover(function () {
        $(this).children("ul").show();
    }, function () {
        $(this).children("ul").hide();
    });

    $(".index-box").css("height", "600px");

    // $(window).resize(function () {
    //     var img_width = $(".service-box").find("img").width();
    //     $(".sub-box").css("width",img_width);
    // });

    //回到顶部
    $(".go-top").click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    //滚动条事件
    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        if (scroH >= $(this).height()) {
            $(".go-top").fadeIn(600);
        } else {
            $(".go-top").fadeOut(600);
        }
    })

});
