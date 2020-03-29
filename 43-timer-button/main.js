requirejs.config({
  "paths":{
    'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
});
require(['jquery'],function($){
  $(function(){
      /*
      var tb1 = new TimerButton();
      tb1.show({
          num:10,
          title:'发送验证码1',
          onClick:function(){
              alert('短信已发送')
          }
      });
      */
      var $btnAdd = $('#add');
      $btnAdd.click(function(){
        require(['timer-button'],function(TimerButton){
          var tb = new TimerButton();
          tb.show({
              num:10,
              title:'添加发送验证码',
              onClick:function(){
                console.log('点击了定时器')
              }
          });
        })         
      });
      /*
      $timerButton.show({
          num:10,
          title:'发送验证码',
          onClick:function(){
            console.log('验证码已发送')
          }
      })

      var $btnAdd = $('#add');

      $btnAdd.click(function(){
          $timerButton.show({
              num:10,
              title:'发送验证码',
              onClick:function(){
                console.log('点击了定时器')
              }
          });
      })
      */
  });
});
