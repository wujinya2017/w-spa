$function() {
    
    var e = new Behave({
        textarea: $(".main textarea").get(0),
        replaceTab: !0,
        softTabs: !0,
        tabSize: 2,
        autoOpen: !0,
        overwrite: !0,
        autoStrip: !0,
        autoIndent: !0,
        fence: !1
    });
    return $('input[type="button"]').click(function() {
        var t = $('<div><pre class="javascript"></pre><i class="iconfont icon-clipboard" title="复制到剪贴板"></i><i class="iconfont icon-delete" title="删除"></i></div>'), 
            e = $(".main textarea");

        "" !== e.val() && (t.find("pre").html(e.val()),

        hljs.highlightBlock(t.find("pre").get(0)),
        $(".main").append(t));
        var i = t.find("i.icon-delete")
          , n = t.find("i.icon-clipboard");
        i.click(function() {
            t.remove()
        }),
        n.click(function() {
            var e = t.find("pre")
              , i = document.createRange();
            i.selectNode(e[0]),
            window.getSelection().addRange(i),
            document.execCommand("copy"),
            window.getSelection().removeAllRanges()
        })
    }),
    /*
  $('input').click(function(){
    var $code = $('<div><pre class="javascript"></pre></div>');
    var $txt = $('textarea');

    if($txt.val() !== ''){
        $code.find('pre').html($txt.val());
        hljs.highlightBlock($code.find("pre").get(0)),
          $("body").append($code));

    }

  })
  */
  
});

