var movies = [
								{
									title: "Sixth Sense",
									rating: 4.7,
									hasWatched: true
								},

								{
									title: "Aparichit",
									rating: 4.6,
									hasWatched: true
								},

								{
									title: "Pixels",
									rating: 4.5,
									hasWatched: true
								},

								{
									title: "Fifty Shades of Grey",
									rating: 4.3,
									hasWatched: false
								}
]

// movies.forEach(function(movie){
// 	if(movie.hasWatched === true)
// 		console.log("You have seen \"" + movie.title + "\" - " + movie.rating + " stars");
// 	else
// 		console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
// })

//Another way for printing
movies.forEach(function(movie){
	console.log(buildString(movie));
})

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched === true)
		result += "seen ";
	else
		result += "not seen ";
	result += "\"" + movie.title + "\" - " + movie.rating + " stars";
	return result;
}
