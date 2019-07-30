$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.dropdown-trigger').dropdown();
	$('.modal').modal();
	$('.slider').slider({
		height: 600
	});
	$('.scrollspy').scrollSpy();
	$('.fixed-action-btn').floatingActionButton();

	$('.slick-responsive').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
		}
	]
	});

	$('.slick-clientes').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 5,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });

	var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});