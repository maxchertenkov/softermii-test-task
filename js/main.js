// Currency selector dropdown
$( ".currency-dropdown-title" ).click(function() {
  $( ".currency-dropdown" ).toggleClass('open');
});

$( ".currency-item" ).click(function(event) {
  var curr = $(event.target).text();
  $( ".currency-dropdown-title" ).text(curr);
  $( ".currency-dropdown" ).toggleClass('open');
});
//**************************

// Search input toggle 
$( ".search-icon" ).click(function() {
  $( ".search-field" ).slideToggle('slow')
});
//********************

// Slick slider
$(document).ready(function(){
  var time = 5;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.top-slider');

  $slick.slick({
    dots: true,
    autoplay: true,
    arrows: true, 
    mobileFirst: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $bar = $('.top-slider-progress .progress');

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }

  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }

  startProgressbar();

});

