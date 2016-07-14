if (window.PokemonApp === undefined) {
	window.PokemonApp = {};
}

PokemonApp.init = function () {
	// third party code here
	console.log("Pokemon App Online!");
};

$(document).on("ready", function () {
	PokemonApp.init();
});