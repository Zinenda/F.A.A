$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.dropdown-trigger').dropdown();
	$('.modal').modal();
	$('.slider').slider({
		height: 600
	});
	$('.scrollspy').scrollSpy();
	$('.fixed-action-btn').floatingActionButton();

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		nav:true,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},            
			960:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});

	var owl = $('.owl-carousel .parceiros-carousel');
	owl.owlCarousel({
		items:6,
		loop:true,
		margin:2,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true
	});
	$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	})

	var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});