$(function(){
  var n=$("#password"),
      o=$("#pwd-text"),
      e=$("#eye");
  n.on("input",function(){
    o.val(n.val())
  }),
  e.mouseover(function(){
    console.log(1);
    n.attr('type','hidden');
    o.attr('type','password');
    
  }),
  e.mouseout(function(){
    n.attr('type','password');
    o.attr('type','hidden');
  })
});
