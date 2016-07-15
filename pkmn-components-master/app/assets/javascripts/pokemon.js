// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
PokemonApp.Pokemon = class {

	constructor (pokemonUri) {
		this.id = PokemonApp.idFromUri( pokemonUri );

	}


	render () {
		console.log("Rendering pokemon: #" + this.id);

		$.ajax({
			type: "GET",
			url: "/api/pokemon/" + this.id,
			success: function(response) {
				console.log(response);

				var myPokeImage = new PokemonApp.PokeImage(response.sprites[0].resource_uri);
				myPokeImage.render();

				var descriptionComponent = new PokemonApp.Description(response.description.resource_uri);
				descriptionComponent.render();

				$(".js-pkmn-name").text(response.name);
				$(".js-pkmn-number").text(response.pkdk_id);
				$(".js-pkmn-height").text(response.height);
				$(".js-pkmn-weight").text(response.weight);
				$(".js-pkmn-HP").text(response.HP);
				$(".js-pkmn-attack").text(response.attack);
				$(".js-pkmn-defense").text(response.defense);
				$(".js-pkmn-SPAttack").text(response.SPAttack);
				$(".js-pkmn-SPDefense").text(response.SPDefense);
				$(".js-pkmn-speed").text(response.speed);


				var types = [];
				var types_group = response.types.forEach(function(type){
						types.push(type.name);
			});
		
				var the_types = types.join(",");
				$(".js-pkmn-types").text(the_types);


				$(".js-pokemon-modal").modal("show");
		}	
			

		});
	}
}


PokemonApp.idFromUri = function (pokemonUri) {
	var uriSegments = pokemonUri.split("/");
	var secondLast = uriSegments.length - 2;
	return uriSegments[secondLast];
}

$(document).on("ready", function(){
	$(".js-show-pokemon").on("click", function(event){
	var $button = $(event.currentTarget);
	var pokemonUri = $button.data("pokemon-uri");

	var pokemon = new PokemonApp.Pokemon(pokemonUri);
	pokemon.render();
  });
});