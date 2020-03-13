/* global Rectangle:true*/
$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  /*calc button click event*/
  $btnCal.click(function(){
    if(!validate('#width') || !validate('#height')) return;

    //get value
    var w = Number($width.val()),
        h = Number($height.val());

    //calculate
    var r = new Rectangle(w,h);

    //output
    $perimeter.val(roundFractional(r.perimeter(),2));
    $area.val(roundFractional(r.area(),2));
  });


  $width.focusout(function(){
    if(!validate('#width')) $width.select();
  });

  $height.focusout(function(){
    if(!validate('#height')) $height.select();
  });


  function validate(field){
    //get dom error message
    var $data = $(field),
        $msg = $(field + '-validation-message');

    //validate null
    if($data.val() === ''){
      $msg.html('不能为空！');
      $data.select();
      return false;
    }
    //validate number  
    //if( !/^-?(0![1-9]\d*)(\.\d*)?([eE][+-]?\d+) .test($data.val())){
    //  $msg.html('必须是数值');
    //  $data.select();
    //  return false;
    //}
    //validate > 0
    if(Number($data.val()) < 0){
      $msg.html('数值必须大于0');
      $data.select();
      return false;
    }   
  }
});

function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
