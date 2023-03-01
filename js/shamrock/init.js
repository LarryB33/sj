
$(document).ready(function() {
	init();
});

function init()
{
	$window = $(window);


	$('section[data-type="background"]').each(function(){
		// declare the variable to affect the defined data-type
		var $scroll = $(this);
		             
		$(window).scroll(function() {

			var yPos = -($window.scrollTop() / $scroll.data('speed'));
		 
			// background position
			var coords = '50% '+ yPos + 'px';

			$scroll.css({ backgroundPosition: coords });
		});
	});


	$window.resize(function() {
    	$('section').css('min-height',$window.height());
	});


	$window.trigger('resize');




}

