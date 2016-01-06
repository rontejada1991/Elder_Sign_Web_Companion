$(function() {
	$('#investigators_menu').on('change', function() {	
		if (isNotFull()) {
			var investigator = findInvestigator($(this).val());
			addInvestigator(investigator);
		}
		$(this).val("Investigator Select");
	});

	$('#random_investigator').on('click', function() {
		if (isNotFull()) {
			// Filter out investigators that have been used
			var available_investigators = investigators.filter(function(i) {
					return i.available === true;
				});
			// Select a random number from the available investigators
			var investigatorID = Math.floor(Math.random() * available_investigators.length);
			var investigator = available_investigators[investigatorID];
			addInvestigator(investigator);
		}
	});
});

function findInvestigator(investigatorName) {
	for (i in investigators)
		if (investigators[i]["name"] === investigatorName)
			return investigators[i];
}

function createInvestigatorBlock(investigator) {
	var $investigator_block = $(".investigator_block:hidden:first");
	$investigator_block.find(".investigator_name").text(investigator.name);
	$investigator_block.find(".investigator_sanity").text(investigator.sanity);
	$investigator_block.find(".investigator_stamina").text(investigator.stamina);
	$investigator_block.find(".investigator_clues").text(investigator.clues);
	$investigator_block.fadeIn(750);
}

function updateUsedInvestigators(investigator) {
	$("option:contains('" + investigator.name + "')").attr('disabled', true);
	investigator.available = false;
	currentInvestigators++;
}

function addInvestigator(investigator) {
	createInvestigatorBlock(investigator);
	updateUsedInvestigators(investigator);
}