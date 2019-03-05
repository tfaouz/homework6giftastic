var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=XyLGkP7nr2rT85saCWhSXP2RkOpsgCzL";
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

        renderButtons();
    });
}

$("button").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("data-name");

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=XyLGkP7nr2rT85saCWhSXP2RkOpsgCzL&limit=10&rating=pg";

})
renderButtons();