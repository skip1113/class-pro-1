//ajax call for hiking API
var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200704227-63dce10d4323d2ac2f6a6cb59477a59e";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

//ajax call for Beer API
//var queryURL = " http://api.brewerydb.com/v2/?key=53ae7fd539ff1a48828cce99135a3feb";

//$.ajax({
    //url: queryURL,
    //method: "GET"
//}).then(function (response) {
    //console.log(response);
//});