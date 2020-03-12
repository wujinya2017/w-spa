$(function(){
  var $btn = $('input'),
  timer,
  i=6;

timer=setInterval(function(){
  i--;
  if(i === 0){
    clearInterval(timer);
    $btn.val('同意');
    $btn.removeAttr('disabled');
  }else{
    $btn.val('同意 ('+i+'s)')
  }
},1000);
  $btn.click(function(){
    alert('就知道你会同意！');
  })
});
