$(function() {
    var $btn = $(".main input"), 
        num = 0;
 
    $btn.val("被按了 " + num + " 次");

    $btn.click(function() {
        var n = location.origin + location.pathname + "#/" + ++num;
        history.pushState(null, null, n),
        $btn.val("被按了 " + num + " 次")
    }),
    $(window).on("popstate", function() {
        var t1 = num = "" === (num = location.href.match(/(\d*)$/)[0]) ? 0 : num;
        $btn.val("被按了 " + t1 + " 次")

    })
});
