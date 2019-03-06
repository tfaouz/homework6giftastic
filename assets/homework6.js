//var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=XyLGkP7nr2rT85saCWhSXP2RkOpsgCzL";
//&tag=cats after api key
//api key XyLGkP7nr2rT85saCWhSXP2RkOpsgCzL



var topics = ["Mario", "Peach", "Luigi", "Bowser", "Boo", "Wario", "Waluigi", "Daisy", "Piranha Plant"];
console.log(topics);

function renderButtons() {

    $("#char-view").empty();


    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
        a.addClass("char");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#char-view").append(a);
    }

    $("#add-char").on("click", function (event) {

        event.preventDefault();

        var topic = $("#char-input").val().trim();
        // adds to array so needs to link to array
        topics.push(topic);
        // if i take the below render out i cannot hit submit and add buttons
        renderButtons();
    });
}

function displaygif() {

    //below doesnt work correctly
    $(".char").on("click", function () {

        var character = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            character + "&api_key=XyLGkP7nr2rT85saCWhSXP2RkOpsgCzL&limit=10&rating=pg";
        console.log(character)
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                //alert(queryURL);

                //alert(response);

                var results = response.data;

                // goes through results
                for (var i = 0; i < results.length; i++) {

                    // creates div
                    var CharacterDiv = $("<div>");

                    // paragraph plus rating
                    var para = $("<p>").text("Rating: " + results[i].rating);

                    // makes the image
                    var CharacterImage = $("<img>");
                    CharacterImage.attr("src", results[i].images.fixed_height.url);

                    // glues them all together
                    CharacterDiv.append(para);
                    CharacterDiv.append(CharacterImage);

                    //attaches it to char view on the other page
                    $("#char-view").append(CharacterDiv);
                }
            });
    });
}
renderButtons();

$(document).on("click", ".char", displaygif);