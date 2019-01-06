//信用代码验证
function checkKey(value){
    if(value == ""){
        $("#registerKey").addClass("errorbox");
        $("#registerKey-prompt").html("请输入信用代码！").removeClass("correct");
    } else {
        $("#registerKey").removeClass('errorbox');
        $("#registerKey-prompt").html("").addClass("correct");
    }
}
//账号验证
function checkUser(value){
     var myreg = /^[a-zA-Z\d]\w{3,12}[a-zA-Z\d]$/;
        if(value!="")
        {
            if(!myreg.test(value))
            {
                $("#user").addClass("errorbox");
                $("#user-prompt").html("请输入正确的账号!");
                return false;
            }
            else{
                $("#user").removeClass('errorbox');
                $("#user-prompt").html("").addClass("correct");
            }
        }
        else {
            $("#user").addClass("errorbox");
            $("#user-prompt").html("请输入账号！").removeClass("correct");
        }
}
//密码验证
function checkPwd(value){
    var mvreg = /^\S{6,16}$/;
    if(value == ""){
        $("#pass").addClass("errorbox");
        $("#pass-prompt").html("请输入密码！").removeClass("correct");
    } else if(!mvreg.test(value)){
        $("#pass").addClass('errorbox');
        $("#pass-prompt").html("请输入正确的密码！").removeClass("correct");
    } else{
        $("#pass").removeClass("errorbox");
        $("#pass-prompt").html("").addClass("correct");
    }
}
function checkRpwd(value){
    if(value == ""){
        $("#Rpass").addClass("errorbox");
        $("#Rpass-prompt").html("请再次输入密码！").removeClass("correct");
    } else if(value != $("#pass").val()) {
        $("#Rpass").addClass("errorbox");
        $("#Rpass-prompt").html("两次密码不一样！").removeClass("correct");
    } else{
        $("#Rpass").removeClass('errorbox');
        $("#Rpass-prompt").html("").addClass("correct");
    }
}
//企业名称验证
function checkCpy(value){
        if(value!="")
        {
                $("#company").removeClass('errorbox');
                $("#company-prompt").html("").addClass("correct");
        }
        else {
            $("#company").addClass("errorbox");
            $("#company-prompt").html("请输入企业名称！").removeClass('correct');
        }
}
//联系人名称验证
function checkName(value){
        if(value!="")
        {
                $("#name").removeClass('errorbox');
                $("#name-prompt").html("").addClass("correct");
        }
        else {
            $("#name").addClass("errorbox");
            $("#name-prompt").html("请输入联系人名称！").removeClass('correct');
        }
}
//电话验证
function checkTel(value){
    var myreg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/;
        if(value!="")
        {
            if(!myreg.test(value))
            {
                $("#tel").addClass("errorbox");
                $("#tel-prompt").html("请输入有效的手机号!").removeClass('correct');
                return false;
            }
            else{
                $("#tel").removeClass('errorbox');
                $("#tel-prompt").html("").addClass("correct");
            }
        }
        else {
            $("#tel").addClass("errorbox");
            $("#tel-prompt").html("请输入手机号！").removeClass('correct');
        }
}
  