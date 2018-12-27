
// var headertop = $('.header').position().top;
// console.log(headertop);
// var htop = $('.header').height();
// console.log(htop);


function showImage(){
  var h = window.innerHeight;
  var headerHeight = $('.header').height();
  $('#showImg .headerImg').css({
    // width:w,
    width:'100%',
    height:h,
    position:'relative',
    top:headerHeight,
  })
  $('#showImg').responsiveSlides({
    auto:true,
    pager:false,
    nav:false,
    speed:450,
    before:function(){

    },
    after:function(){

    }
  });
  // console.log(h);
}
showImage();

function dealHeader(){
  var headerHeight = $('.header').height();
  var h = $('.main').height() + 'px';
  $('#coverText').css({
    position:'absolute',
    top:headerHeight,
    height:h,
  });
  // console.log(h);
  // console.log(top);
}
dealHeader();

function dealFeature() {
  $('.jarallax').jarallax({
  speed: 0.5,
  imgWidth: 1366,
  imgHeight: 768
  });
}
dealFeature();

function toTop() {
  $('#toTop p').click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
}

toTop();

function jumpTo(){
  $('.header .navbar-nav span').click(function (e) {
    e.preventDefault();
    var spanId = this.id;
    // console.log(spanId);
    var divId = spanId.split('-')[0];
    var position = $('#' + divId).position();
    $('html,body').animate({
      scrollTop:position.top,
    },1000);
  });
}

jumpTo();
