/* when the page has loaded */
$(function() {

	// hide all the sections

	$('h3').next().hide();

	// when human clicks an h3
	$('h3').on('click', function() {

		// toggle the next element
		$(this).next().slideToggle(1500, 'swing');

	});

});
