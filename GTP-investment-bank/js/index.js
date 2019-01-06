$(function () {
    //1级导航栏项-鼠标悬浮效果
    $(".dropdown").hover(function () {
        $(this).children("ul").show();
    }, function () {
        $(this).children("ul").hide();
    });

    //打开页面时窗口的初始高度
    var h = $(window).height();
    $(".index-box").css("height", h);

    $("#more").click(function () {
        $("html,body").animate({scrollTop: h}, 600);
    });

    //更多介绍
    $(".row .col-md-3, .row .col-md-4").hover(function () {
        var img_src = $(this).children("img").attr("src");
        $(this).children(".my-hover")
            .css({"background": "url('" + img_src + "') no-repeat", "background-size": "100% 100%"});
        $(this).children(".my-hover").stop().animate({top: "0",opacity:"+=1"}, 500); //stop()防止鼠标累积事件
    }, function () {
        $(this).children(".my-hover").stop().animate({"top": $(this).height(),"opacity":0},200);
    });

    // 图片滤镜
    $(".my-filter").hover(function () {
        $(this).removeClass("my-filter");
    },function () {
        $(this).addClass("my-filter");
    });

    //回到顶部
    $(".go-top").click(function () {
        $("html,body").animate({scrollTop: 0}, 800);
    });

    //滚动条事件
    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        if (scroH >= h) {
            $(".go-top").fadeIn(600);
        } else {
            $(".go-top").fadeOut(600);
        }
    })

});
