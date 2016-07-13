//app.js

$(document).ready(function(){
	getCharactersFromApi(); 	

	$(".js-character-form").on("submit", function(event){
		event.preventDefault();
		

		var name = $("#name").val();
		var occupation = $("#occupation").val();
		var weapon = $("#weapon").val();

		var params = {
			name: name,
			occupation: occupation,
			weapon: weapon
		};

		$.ajax({
			type: "POST",
			url: "https://ironhack-characters.herokuapp.com/characters",
			data: params,
			success: updateList,
			error: characterError
		});
	});
});


function getCharactersFromApi(){
	$.ajax ({
		type: "GET",
		url: "https://ironhack-characters.herokuapp.com/characters",
		success: showCharacters,
		error: characterLoadError,
	});


}

		

function showCharacters(response){
	response.forEach(function(character){
		appendCharacter(character);
	});
}
function appendCharacter (character){
	
	var html = `

		 <li>
		 	name: ${character.name}
		 	occupation: ${character.occupation}
		 	weapon: ${character.weapon}
		 </li>
	`;
		$(".js-character-list").append(html);	

	}



function characterLoadError(err){
	console.log("Error", err);
}

function updateList(response){
	$(".js-character-list").empty();
	$(".js-character-list").append();
	getCharactersFromApi();
}

function characterError(err){
	console.log("Error", err);
}
