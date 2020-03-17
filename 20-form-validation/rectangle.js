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

  //1.event keypress
  //2.event argument get key value,e.key and e.target.value
  //3.如果数据不合法直接不能输入
  //4.合法字符还要考虑出现的位置，例如：.  ,  e  E  -
  
  $width.keypress(function(e){
    console.log('press');

    var pos = e.target.selectionStart,
        con = e.target.value;

    console.log(pos);
    console.log(con);


    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }
    //合法字符
    //允许出现在非科学计数法的数字末尾
    //允许出现在非科学计数法的数字中间
    
    //不允许出现在非科学计数法的数字前面
    //不允许出现在空文本中
    //不允许出现在负号后面
    //不允许出现在科学计数法（e和E）数字末尾
    //不允许出现在科学计数法的数字中间
    //不允许出现在科学计数法的数字前面
  
    if(e.key === 'e'){
      if(pos ===0 || con.indexOf('e')!==-1 || con.indexOf('E')!==-1){
        e.preventDefault();
        return;
      }
      if(pos ===1 || con.substring(0,1) === '-'){
        e.preventDefault();
        return;
      }
    } 
    //合法字符E
    
    //合法字符e
    
    //合法字符-
    
  });

  $height.keypress(function(){

    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }
   
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
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值');
      $data.select();
      return false;
    }

    //validate > 0
    if(Number($data.val()) < 0){
      $msg.html('数值必须大于0');
      $data.select();
      return false;
    }
  };

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
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值');
      $data.select();
      return false;
    }

    //validate > 0
    if(Number($data.val()) < 0){
      $msg.html('数值必须大于0');
      $data.select();
      return false;
    }  


    $msg.html('');
    return true;
  }


});

function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}



