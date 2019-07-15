$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.modal').modal();
	$('.slider').slider({
		height: 600
	});
	$('.materialboxed').materialbox();
	$('.scrollspy').scrollSpy();
	$('.carousel').carousel();
	$('.fixed-action-btn').floatingActionButton();

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});

	var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});