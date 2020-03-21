function displayTrails(lat, long) {
//ajax call for hiking API
// $("img-here").empty();
var queryURL = "https://www.hikingproject.com/data/get-trails?" + lat + "&" + long + "&maxDistance=10&key=200704227-63dce10d4323d2ac2f6a6cb59477a59e";

// var location = $(this).attr("data-name");
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // var results = response.data;
    console.log(response);
    console.log(response.trails[0].name);
    var trailResults = response.trails;
    var trailLink = trailResults.url; 
    for (var i = 0; i < 5; i++) {
        // console.log(response.trails[0].name);
        var trailImg = $("<img>").addClass("trail");
        var gifDiv = $("<div id='gifId'>")
        trailImg.attr("src", response.trails[i].imgSqSmall);
        // var trailLink = trailResults.url; 
        console.log(trailLink);
        var trailName = $("<p>").text(response.trails[i].name);
        $("#trail-name").append(trailName);
        var location = $("<p>").text(response.trails[i].location);
        $("#loc-here").append(location);
        var rating = $("<p>").text(response.trails[i].stars + "\u2B50");
        $("#rating-here").append(rating);
        var summary = $("<p>").text(response.trails[i].summary);
        $("#summary-trail").append(summary);
        gifDiv.append(trailImg);
        gifDiv.append(trailName);
        gifDiv.append(location);
        gifDiv.append(rating);
        gifDiv.append(summary);
        $("#img-here").prepend(gifDiv);

    }
});
}
// var brewSearch = [];
function displayBrewery(citySearch) {
    console.log("call made ");
    
    // var cityInput = $(this).attr("data-name");
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + citySearch + "&breweries?per_page=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {
        console.log(result);
        console.log(result[1].name);
        for (var j = 0; j < 5; j++) {
            var brewDiv = $("<div id='brewId'>")
            var breweryName = $("<p>").text(result[j].name);
            var street = $("<p>").text(result[j].street);
            var brewery_type = $("<p>").text(result[j].brewery_type);
            var phone = $("<p>").text(result[j].phone);
            var website_url = $("<p>").text(result[j].website_url);
            brewImage = $("<img src='https://files.slack.com/files-pri/TS9EUV9K4-F01045AQKGA/image.png'>").addClass("brewImage");
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
        console.log(calling);
        console.log(calling.features[0].center);
        var lat = calling.features[0].center[1];
        var long = calling.features[0].center[0];
        console.log(lat);
        console.log(long);
        displayTrails("lat=" + lat, "lon=" + long);
    })
}
$("#add-search").on("click", function (event) {
    event.preventDefault();
        console.log("you've clicked: ")
        var citySearch = $("#input-search").val().trim();
        console.log("city " + citySearch)   
        displayBrewery(citySearch);
        convert(citySearch);
        // displayTrails(lat, long);
    });
