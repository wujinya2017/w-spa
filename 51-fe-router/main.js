$(function() {
    window.onhashchange = function() {
        var $div = $('.main'), 
            strHash = window.location.hash, 
            color = strHash.substring(2, strHash.length);
        $div.css({
            "background-color": color
        })
    }
});
