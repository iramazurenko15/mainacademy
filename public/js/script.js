$(document).ready(function(){
  $(".owl-carousel.main-slider").owlCarousel({
  	items:1,
		nav:true,
		autoplay:true,
		autoplayHoverPause:true
  });

  $(".owl-carousel.item-slider").owlCarousel({
		items:1,
		nav:true,
		autoplay:true,
		autoplayHoverPause:true,
		nav:true,
    navText:['<span class="glyphicon glyphicon-chevron-left"></span>', '<span class="glyphicon glyphicon-chevron-right"></span>'],
		margin: 25,
		dots: false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
});


