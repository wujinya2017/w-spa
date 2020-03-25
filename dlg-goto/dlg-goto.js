var $dlgGoto = (function(){    
  function show(conf){ 
    var $dlg = $(''
       + '<div class="notepad-dlg-mask notepad-dlg-goto">'
       + '<div class="dialogbox notepad-dlgbox">'
       + '<div class="notepad-dlg-titlebar">'
       + '<span class="title">转到指定行</span>'
       + '<span class="close-btn">✖</span>'
       + '</div>'
       + '<div class="main notepad-dlg-main">'                                                   + '<label for="">行号(L):</label><br>'
       + '<input class="txt-line-num" type="text" autofocus><br>'
       + '<input class="btn-goto btn" type="button" value="转到">'
       + '<input class="btn-cancel btn" type="button" value="取消">'
       + '</div>'
       + '</div>'
       + '</div>' 
    ); 
     var  cfg = {
            container:'body',
            num : 6,
            title:'同意',
            onClick:null
          };
    $(cfg.container).append($dlg);
    $.extend(cfg,conf);//追加到最新配置
    num = cfg.num;
    $dlg.val(cfg.title + '(' + cfg.num + 's)');//按钮初始值
    
   //2.event bind
    $dlg.click(cfg.onClick);
  }
  return {
    show : show
  }
}());
