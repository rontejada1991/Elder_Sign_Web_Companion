var MAX_INVESTIGATORS = 8;
var currentInvestigators = 0;

var investigators = [
	new investigator ("Akachi Onyele", 6, 4, 0),
	new investigator ("Amanda Sharpe", 5, 5, 0),
	new investigator ("\"Ashcan\" Pete", 4, 6, 0),
	new investigator ("Bob Jenkins", 4, 6, 0),
	new investigator ("Carolyn Fern", 6, 4, 0),
	new investigator ("Darrell Simmons", 4, 6, 0),
	new investigator ("Dexter Drake", 5, 5, 0),
	new investigator ("Diana Stanley", 4, 6, 1),
	new investigator ("Finn Edwards", 5, 5, 1),
	new investigator ("Gloria Goldberg", 6, 4, 0),
	new investigator ("Harvey Walters", 7, 3, 0),
	new investigator ("Jacqueline Fine", 7, 3, 0),
	new investigator ("Jenny Barnes", 6, 4, 0),
	new investigator ("Jim Culver", 6, 4, 0),
	new investigator ("Joe Diamond", 4, 6, 1),
	new investigator ("Kate Winthrop", 6, 4, 0),
	new investigator ("Leo Anderson", 5, 5, 1),
	new investigator ("Mandy Thompson", 5, 5, 1),
	new investigator ("Marie Lambeau", 6, 4, 0),
	new investigator ("Mark Harrigan", 3, 7, 0),
	new investigator ("Michael McGlen", 3, 7, 0),
	new investigator ("Monterey Jack", 3, 7, 0),
	new investigator ("Norman Withers", 7, 3, 0),
	new investigator ("Patrice Hathaway", 6, 4, 2),
	new investigator ("Rita Young", 4, 6, 0),
	new investigator ("Sister Mary", 7, 3, 0),
	new investigator ("\"Skids\" O Toole", 3, 7, 0),
	new investigator ("Tommy Muldoon", 4, 6, 1),
	new investigator ("Trish Scarborough", 5, 5, 1),
	new investigator ("Vincent Lee", 5, 5, 0),
	new investigator ("William Yorick", 4, 6, 0),
	new investigator ("Wilson Richards", 5, 5, 1)
];

function investigator (name, sanity, stamina, clues, available) {
	this.name = name;
	this.sanity = sanity;
	this.stamina = stamina;
	this.clues = clues;
	this.available = true;
}

function isNotFull() {
	return currentInvestigators < MAX_INVESTIGATORS;
}