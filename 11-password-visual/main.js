/*global $*/
$(function(){
  var n=$("#password"),
      o=$("#pwd-text"),
      e=$("#eye");
  n.on("input",function(){
    o.val(n.val())
  }),
 
  e.mouseover(function(){
    n.attr('type','hidden');
    o.attr('type','text');

    //console.log(e.attr("src"));

    $(this).attr('src','./1111.jpg');

    //console.log(e.attr("src"));

  }),
  e.mouseout(function(){
    n.attr('type','password');
    o.attr('type','hidden');

    e.attr("src","./2222.jpg"); 
  })
});
