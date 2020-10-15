function displayTrails(lat, long) {

    var queryURL = "https://www.hikingproject.com/data/get-trails?" + lat + "&" + long + "&maxDistance=10&key=200704227-63dce10d4323d2ac2f6a6cb59477a59e";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        for (var i = 0; i < 5; i++) {

            var trailImg = $("<img>").addClass("trail");
            var gifDiv = $("<div id='gifId'>")
            trailImg.attr("src", response.trails[i].imgSqSmall);
            var trailNameP = $("<p>");
            var trailName = $("<a>").text(response.trails[i].name);
            trailNameP.append(trailName);
            var location = $("<p>").text(response.trails[i].location);
            var difficulty = $("<p>").text("Difficulty level: " + response.trails[i].difficulty);
            var rating = $("<p>").text(response.trails[i].stars + "\u2B50");
            var summary = $("<p>").text(response.trails[i].summary);
            trailName.attr("href", response.trails[i].url);
            console.log(response.trails[i].url);
            gifDiv.append(trailImg);
            gifDiv.append(trailNameP);
            gifDiv.append(location);
            gifDiv.append(difficulty);
            gifDiv.append(rating);
            gifDiv.append(summary);
            $("#img-here").prepend(gifDiv);

        }
    });
}

function displayBrewery(citySearch) {
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + citySearch + "&breweries?per_page=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {
        for (var j = 0; j < 5; j++) {
            var brewDiv = $("<div id='brewId'>")
            var breweryName = $("<p>").text(result[j].name);
            var street = $("<p>").text(result[j].street);
            var brewery_type = $("<p>").text("Type: " + result[j].brewery_type);
            var phone = $("<p>").text(result[j].phone);
            var website_url = $("<a>").text(result[j].website_url);
            website_url.attr("href", result[j].website_url);
            brewImage = $("<img src=https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/10/09/USATODAY/usatsports/247WallSt.com-247WS-497973-beer-cover-photo-1.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp>").addClass("brewImage");
            brewDiv.append(brewImage);
            brewDiv.append(breweryName);
            brewDiv.append(street);
            brewDiv.append(brewery_type);
            brewDiv.append(phone);
            brewDiv.append(website_url);
            $("#brews-here").prepend(brewDiv);
        }
    });
};

function convert(citySearch) {
    var mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + citySearch + ".json?country=us&access_token=pk.eyJ1Ijoic2tpcDExMTMiLCJhIjoiY2s4MjR3Y3p3MHdybTNlcmwxdGlia2Q3MCJ9.LueUgl63OO8XUk6Jh3r46Q"
    $.ajax({
        url: mapboxURL,
        method: "GET"
    }).then(function (calling) {
        var lat = calling.features[0].center[1];
        var long = calling.features[0].center[0];
        displayTrails("lat=" + lat, "lon=" + long);
    })
}
hideEmpty();
function hideEmpty() {
    $(".full-results").hide();
}
$("#add-search").on("click", function (event) {
    event.preventDefault();
    $("#img-here").empty();
    $("#brews-here").empty();
    var citySearch = $("#input-search").val().trim();
    displayBrewery(citySearch);
    convert(citySearch);
});


