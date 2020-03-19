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
        // for (var i = 0; i < response.length; i++) {
            // console.log(response.trails[0].name);
            var trailImg = $("<img>").addClass("trail");
            var gifDiv = $("<div id='gifId'>")
            trailImg.attr("src", response.trails[0].imgSqSmall);
            // gifDiv.append(trailImg);
            $("#img-here").prepend(trailImg);
            var trailName = $("<p>").text(response.trails[0].name);
            $("#trail-name").append(trailName);
            var location = $("<p>").text(response.trails[0].location);
            $("#loc-here").append(location);
            var rating = $("<p>").text(response.trails[0].stars);
            $("#rating-here").append(rating);
            var summary = $("<p>").text(response.trails[0].summary);
            $("#summary-trail").append(summary);

        // }
    });
// }
// $("#add-search").on("click", function() {
//     var citySearch = $("#input-search").val().trim();
//     location.push(citySearch);
//     displayTrail()
// })

//ajax call for Beer API
//var queryURL = " http://api.brewerydb.com/v2/?key=53ae7fd539ff1a48828cce99135a3feb";

//$.ajax({
    //url: queryURL,
    //method: "GET"
//}).then(function (response) {
    //console.log(response);
//});