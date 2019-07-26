$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.dropdown-trigger').dropdown();
	$('.modal').modal();
	$('.slider').slider({
		height: 600
	});
	$('.scrollspy').scrollSpy();
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