// function displayTrail() {
//ajax call for hiking API

var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200704227-63dce10d4323d2ac2f6a6cb59477a59e";

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
    for (var i = 0; i < trailResults.length; i++) {
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
// }
// $("#add-search").on("click", function() {
//     var citySearch = $("#input-search").val().trim();
//     location.push(citySearch);
//     displayTrail()
// })

//ajax call for Beer API
var queryURL = "https://api.openbrewerydb.org/breweries?by_city=colorado_springs";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (result) {
    console.log(result);
    console.log(result[1].name);
    for (var j = 0; j < result.length; j++) {
        // console.log(response.trails[0].name);
        //var trailImg = $("<img>").addClass("trail");
        var brewDiv = $("<div id='brewId'>")
        //trailImg.attr("src", response.trails[0].imgSqSmall);
        // gifDiv.append(trailImg);
        //$("#img-here").prepend(trailImg);
        var breweryName = $("<p>").text(result[j].name);
        // $("#brewery-name").append(breweryName);
        var brewImg = $("<img src='https://tse2.mm.bing.net/th?id=OIP.DSzirQ5z6t7iSmeaso2sjgHaD4&pid=Api&P=0&w=352&h=186'>").addClass("brewImage");
        // brewImg
        var street = $("<p>").text(result[j].street);
        // $("#street-here").append(street);

        var brewery_type = $("<p>").text(result[j].brewery_type);
        // $("#brewery-type").append(brewery_type);

        var phone = $("<p>").text(result[j].phone);
        // $("#phone-here").append(phone);

        var website_url = $("<p>").text(result[j].website_url);
        // $("#website-here").append(website_url);
        brewDiv.append(brewImg);
        brewDiv.append(breweryName);
        brewDiv.append(street);
        brewDiv.append(brewery_type);
        brewDiv.append(phone);
        brewDiv.append(website_url);
        $("#brews-here").prepend(brewDiv);
    }

});