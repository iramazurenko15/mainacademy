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

// Open modal window
  $('#sign-in').click( function(event){
    event.preventDefault(); 
    $('#overlay').fadeIn(400, 
      function(){ 
        $('#modal_form') 
          .css('display', 'block') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });

  //Close modal window
  $('#modal_close, #overlay').click( function(){ 
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,
        function(){ 
          $(this).css('display', 'none');
          $('#overlay').fadeOut(400); 
        }
      );
  });


//load more movies
  var size_movies = $(".all-movies .movie-item").length;
  var x=9;
  $('.all-movies .movie-item:gt('+x+')').hide();
  $('#load-more').click(function () {
    x= (x+10 <= size_movies) ? x+10 : size_movies;
    $('.all-movies .movie-item:lt('+x+')').show();
  });



});


