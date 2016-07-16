$(document).ready(function(){

	$(".js-artist-form").on("submit", function(event){
		event.preventDefault();
		getArtistFromApi();

	});	
});


		


function getArtistFromApi(){
	var searchterm = $("#artistName").val();

	console.log(searchterm)

	$.ajax ({
		type: "GET",
		url: "https://api.spotify.com/v1/search?type=artist&query=" + searchterm,
		success: showArtist,
		error: artistError
	});

}

function showArtist(results){
	var searchResults = `

		<div>
				${results.artists.items[0].name}

		</div>
		<img class="image" src="${results.artists.items[0].images[0].url}" data-id="${results.artists.items[0].id}" alt="Ain't seein' nutin'" height="500" width="350">
	`
	$(".js-artist-info").append(searchResults)
	$(".image").click(function(event){
		
		function getAlbum(response){
			console.log(response);

		}

		var identification = $(event.currentTarget).data("id")
		
		$.ajax({
			type: "GET",
			url: `https://api.spotify.com/v1/artists/${identification}/albums`,
			success: getAlbum,
			error:artistError
		})

	})
};




function updateArtist(response){
	$(".js-artist-info").empty();
	$(".js-artist-info").append();
	getArtistFromApi();
}




function artistError(error) {
	console.log("Error", error);
}



