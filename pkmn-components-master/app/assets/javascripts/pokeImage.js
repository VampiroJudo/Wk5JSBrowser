	// $(document).on("ready", function(){

// }
PokemonApp.PokeImage = class {

	constructor (spriteUri){
		this.spriteUri = spriteUri;
	}

	render () {
		console.log(`Rendering sprite: ${this.spriteUri}`);

		var urlImage =  this.spriteUri;
		$.ajax({
			type: "GET",
			url: urlImage,
			success: function(response) {
				var html = `<img src="http://pokeapi.co${response.image}">`;
					

				$(".js-pkmn-image").empty()	.append(html);
			}
		});
	}
}

