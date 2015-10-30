

$(document).ready(function()
{
	$('section#screenshorts a').on('click', function()
	{
		$('div#modal img').attr('src', $(this).attr('data-image-url'));
	});

	var nav = $('.navbar-fixed-top');
	var distance = $('.navbar-fixed-top').offset();
	if(distance.top >= 300)
	{
		nav.addClass('effect');
	}
	$(window).scroll(function(){
		var scrollbar = $(window).scrollTop();
		if(scrollbar >= 300)
		{
			nav.addClass('effect');
		}
		else
		{
			nav.removeClass('effect');
		}
	});
	$('#about .blue-circle').waypoint(function(){
		$('#about .blue-circle').addClass('animated fadeInUp')
	},{
		offset : "50%"
	});

	$('.feature-image img').waypoint(function(){
		$('.feature-image img').addClass('animated rubberBand')
	},{
		offset : "50%"
	});

	$('#features .blue-circle').waypoint(function(){
		$(this.element).addClass('animated fadeInUp')
	},{
		offset : "50%"
	});

	$('#screenshorts .col-sm-4').waypoint(function(){
		$('#screenshorts .col-sm-4').addClass('animated zoomIn');
		$(this.element).css({
			'opacity':1
		});
	},{
		offset : "50%"
	});

	$('#download div.phone img').waypoint(function(){
		$(this.element).addClass('animated fadeInLeft');
	},{
		offset : "50%"
	});

	$('#download .platforms > div').waypoint(function(){
		$(this.element).addClass('animated fadeInUp');
	},{
		offset : "50%"
	});

	// $('#download .downloads-empty').waypoint(function(){
	// 	$(this.element).addClass('animated fadeInRight');
	// },{
	// 	offset : "50%"
	// });

	
});

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 700, // Integer. How fast to complete the scroll in milliseconds
    easing: ' easeOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});