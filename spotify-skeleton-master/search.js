$(document).ready(function(){
  	
	$(".js-artist-form").on("submit", function(event){
		event.preventDefault();
		findArtist();
		
	});

});

	

function   findArtist(){
	var findArtist = $("#artistId").val();
	console.log(findArtist);
	


	$.ajax ({
		type: "GET",
		url: `https://api.spotify.com/v1/search?type=track&query=` + findArtist,
		success: showArtist,
		error: renderError
	});
}


function showArtist(result){
	console.log(result);
	var findings1 =  result.tracks.items[0].artists[0].name;
	var findings2 = result.tracks.items[0].name;
	var findings3 = result.tracks.items[0].album.images[0].url;
	var findings4 = result.tracks.items[0].preview_url;
		$("p.author").text(findings1);
		$("p.title").text(findings2);
		$('img').attr('src',findings3);
		$('audio').attr('src',findings4);
		$('.js-player').trigger('play');
		$('.js-player').trigger('pause');
}

function renderError(error){
	console.log("Error", error);
}