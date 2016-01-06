$(function() {	
	populateOptions(investigators);
	populateBlocks();
	$('.investigator_block').hide();
});

function populateOptions(options) {
	var html_options = "";
	for (i in options) {
		html_options += ("<option>" + options[i].name + "</option>");
	}
	$("#investigators_menu").append(html_options);
}

function populateBlocks() {
	for (var i = 0; i < MAX_INVESTIGATORS; i++) {
		$("#investigators_container").append(
			"<div class='investigator_block'>" +
				"<span class='investigator_number'>" + (i + 1) + ". </span>" +
				"<span class='investigator_name'></span>" +
				"<div class='investigator_stats'>" +
					"<button class='investigator_sanity'></button>" +
					"<button class='subtract_one'>-</button>" +
					"<button class='investigator_stamina'></button>" +
					"<button class='subtract_one'>-</button>" +
					"<button class='investigator_clues'></button>" +
					"<button class='subtract_one'>-</button>" +
					"<button class='remove_investigator'>X</button>" +
				"</div>" +
			"</div>"
		);
	}
}