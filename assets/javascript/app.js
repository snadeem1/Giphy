var emotions = ["happy", "sad", "fear", "anger", "loving", "confused"];

function displayEmotionInfo() {

    var emotion = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=aKYA7NkuzH1vc4aBPSLVCFJBNLK4Fns2&tag=" + emotions;
    $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function(response) {

        var emotionDiv = $("<div class='emotion'>");
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
    a.text(emotions[i]);
    $("#buttons-view").append(a);
}

}

$("#add-emotion").on("click", function(event) {
    event.preventDefault();
    
    var emotion = $("#emotion-input").val().trim();
    emotions.push(emotion);
    renderButtons();
});

$(document).on("click", ".emotion-btn", displayEmotionInfo);

     renderButtons();
    
