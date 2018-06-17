var emotions = ["happy", "sad", "fear", "anger", "loving", "confused"];

function displayMovieInfo() {

    var emotion = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=aKYA7NkuzH1vc4aBPSLVCFJBNLK4Fns2&tag=" + emotions;
    $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function(response) {

        
        var rating = response.Rated;
        var pOne = $("<p>").text("Rating: " + rating);
        emotionDiv.append(pOne);
    


    });

}
function renderButtons(){
$("#buttons-view").empty();
for ( var i = 0; i < emotions.length; i++){
    var a = $("<button>");
    a.addClass("emotion-btn");
    a.attr("data-name", emotions[i]);
    $("#buttons-view").append(a);
}

}


