$(function(){

  var len = $('.header-2 img').length;
  var i = 0;
  // console.log(i);
 function run(){
    setInterval(function(){
    //  console.log(i)
     if (i < len - 1) {
       i++;
     }else{
       i = 0;
     }
     console.log($('.header-2 img').eq(i).fadeIn().siblings().hide());


   },1000)
 }
 run();
})
