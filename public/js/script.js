$(document).ready(function(){
  $(".owl-carousel.main-slider").owlCarousel({
  	items:1,
		nav:true,
		autoplay:true,
		autoplayHoverPause:true,
		nav:true
  });

  $(".owl-carousel.item-slider").owlCarousel({
		items:1,
		nav:true,
		autoplay:true,
		autoplayHoverPause:true,
		nav:true,
		margin: 25,
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


