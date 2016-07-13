$(document).ready(function(){
	console.log("This should work");

	if ("geolocation" in navigator) {
		console.log("This browser has geolocation");
		navigator.geolocation.getCurrentPosition(showPosition, handleError);
	} 
	else {
		console.log("This browser does not have geolocation. :/");
	}

	

});

function showPosition(position) {
	console.log("User consented to give location.");
	console.log(position);

	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	
	


	var html = `
	<h2>Your Position</h2>
	<ul>
		<li> Latitude: ${lat}</li>
		<li> Longitude: ${lng}</li>
	</ul>
	`;

	
		var img = ` <img src="https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&size=640x400&zoom=20" alt="Your locale"></img>
	`;
    
    $("body").append(html);
    $("body").append(img);
}

function handleError(error) {
	console.log("Error getting postion", error);

	if (error.code === 1){
		var html = `<h2>Come on! What are you scared? It's not like I'm going to hunt you down and... muahahaha...</h2>`;
		$("body").append(html);
	}

}


