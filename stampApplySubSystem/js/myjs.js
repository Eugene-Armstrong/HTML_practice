/**
 * Created by dxw on 2016/12/2.
 */
$(document).ready(function () {
/*    //二级菜单
    $(".mytdx").on("click", function () {
        if($(".individual i").attr('class') == 'icon-down') {
            $(".individual i").removeClass("icon-down").addClass("icon-up");
            $(".individual ul").show();
            console.log()
        } else {
            $(".individual i").removeClass("icon-up").addClass("icon-down");
            $(".individual ul").hide();
        }

    });

    //侧边栏
    $(".left ul li").on("click",function() {
        console.log($(this));
        $(".left ul li").removeClass("current");
        $(this).addClass("current");
    });*/
    //上传文件
    $("#file").change(function(){
        var value = $("#file").val();
        $("#dbtp").val(value);
    });
});
function selectFile() {
    $("#file").trigger("click");
}

