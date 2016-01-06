$(function() {
	$('.investigator_sanity, .investigator_stamina, .investigator_clues').on('click', function() {
		var currentValue = parseInt($(this).text());
		$(this).text(currentValue + 1);
	});
	
	$('.subtract_one').on('click', function() {
		var previousEl = $(this).prev();
		var currentValue = parseInt(previousEl.text());
		if (currentValue > 0) {
			previousEl.text(currentValue - 1);
		}
	});
	
	$('.remove_investigator').on('click', function() {
		var $parent = $(this).parent().fadeOut(750);
		currentInvestigators--;
	});
});

