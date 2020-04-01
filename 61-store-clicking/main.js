$(function() {
    var $btn = $(".main input"),
        num = localStorage.getItem("num") || 0;

    $btn.val("被按了" + num + "次");

    $btn.click(function() {
        localStorage.setItem("num", ++num),
        $btn.val("被按了" + num + "次")         
    })
});
