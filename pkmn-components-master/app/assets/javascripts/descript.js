PokemanApp.Description = class {

	constructor (descriptionArray){
		this.descriptionArray = descriptionArray;
	}

	findLatestDescription(){
		this.descriptionArray.sort(function(descA,descB){
				if 		(descA.name > descB.name){
					return -1;
				
				else if  (descB.name > descA.name){
					
					return 1;
				}
				else{
					return 0
				}
			}

			return sortedArray[0];
		});
	}

	render (){
		var latestDescription = this.findLatestDescription();

		console.log("Rendering description:");
		console.log(latestDescription);
	

		var urlScript = this.desUri;
		$.ajax({
			type: "GET",
			url:urlScript,
			success: function(response){
				console.log("Pokemon DESCRIPTION");
				console.log(latestDescription)
			}
		})


		}
	}