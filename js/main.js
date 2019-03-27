$('.header .nav .item a').click(function(e){
  e.preventDefault();
  var className = this.innerHTML;
  // console.log(className);
  if(className!='login'){
    var position = $('.' + className).position();
    $('html,body').animate({
      scrollTop: position.top,
    },1000);
  }
});
