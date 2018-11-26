$(document).ready(function(){

// var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
// url += '?' + $.param({
//   'api-key': "5077ee1c2b4247a992c2e348b609ebc2"

$("#input").keypress(function(event){
		
		if(event.keyCode == 13){
			var searchTerm = $("#input").val();
			$.ajax({
				'url': "https://api.nytimes.com/svc/movies/v2/reviews/search.json",
				'type': "GET",
				'dataType': "JSON",
				'data': {
					'api-key': "5077ee1c2b4247a992c2e348b609ebc2",
					'status': "string",
					'copyright': "string",
					'num_results': "integer",
				},

				success: function(data){


					console.log(data);

					var myReviews = data.results.display_title;

					for(var i=0; i<myReviews; i++){
						
							console.log(data.results.display_title[i].headline.byline);
							var newHeader = $("<h2>" + data.results.display_title[i].headline.byline + "</h2>");
							$('body').append(newHeader);
						}
					

					},
				error: function(data, textStatus, errorThrown) {
		        	console.log("whomp, whomp")
		            console.log(errorThrown);
		        }
			});
		}
	

	
});



})


