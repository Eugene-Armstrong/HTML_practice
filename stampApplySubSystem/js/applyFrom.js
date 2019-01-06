$(function () {
    //获取当前时间
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    $("#cur-time").text(y + " 年 " + m + " 月 " + d + " 日 ");

    //输入提示
    $("input").each(function () {
        var tip = $(this).parent().prev().text();
        $(this).attr("placeholder", "请填写" + tip);
    })
    $("textarea").each(function () {
        var tip = $(this).parent().prev().text();
        $(this).attr("placeholder", "请填写" + tip);
    })

    $("input[type=radio]").css({"width": "auto", "height": "auto"});

    //表单同步验证
    $("input, textarea").blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent().addClass("errorTip");
            $(this).attr("placeholder", "本项不能为空");
            $(this).parent().prev().find("img").hide();
            //$(this).focus();
        } else {
            //验证手机号码有效性
            if ($(this).attr("id") == "legal-phone" || $(this).attr("id") == "agent-phone") {
                var phone = /^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
                if (!phone.test($(this).val())) {
                    $(this).parent().addClass("errorTip");
                    $(this).attr("value", "");
                    $(".my-mask, .phone-tip").fadeIn(500);
                    $(".my-mask, .phone-tip").fadeOut(3000);
                    return false;
                }
                else {
                    $(this).parent().removeClass("errorTip");
                    $(this).parent().prev().find("img").show();
                }
            } else if ($(this).attr("id") == "legal-id" || $(this).attr("id") == "agent-id") {
                var ID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if (!ID.test($(this).val())) {
                    $(this).parent().addClass("errorTip");
                    $(this).attr("value", "");
                    $(".my-mask, .id-tip").fadeIn(500);
                    $(".my-mask, .id-tip").fadeOut(3000);
                    return false;
                }
                else {
                    $(this).parent().removeClass("errorTip");
                    $(this).parent().prev().find("img").show();
                }
            }else if($(this).attr("id") == "unit-call"){
                var call = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
                if (!call.test($(this).val())) {
                    $(this).parent().addClass("errorTip");
                    $(this).attr("value", "");
                    $(".my-mask, .call-tip").fadeIn(500);
                    $(".my-mask, .call-tip").fadeOut(3000);
                    return false;
                }
                else {
                    $(this).parent().removeClass("errorTip");
                    $(this).parent().prev().find("img").show();
                }
            } else {
                $(this).parent().removeClass("errorTip");
                $(this).parent().prev().find("img").show();
            }

        }
    })

    $("button").click(function () {
        var chk = true;
        /*验证表单是否填写完全*/
        $("input").each(function () {
            if ($(this).val().length == 0) {
                chk = false;
                var content = $(this).parent().prev().text();
                alert("【" + content + "】是必填项！");
                $(this).focus();
                return false;
            }
        })
        if (chk) {
            alert("您确定要提交所填信息吗？");
        }
    })

})