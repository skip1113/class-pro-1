# class-pro-1
# Live link to this app: https://skip1113.github.io/class-pro-1/
Trails on Tap

Participants:
Kamy Leeret
Skip Khamvongsa
Tammy Richardson

APIs we intend to use:
1.) Hiker Project Data API: https://www.hikingproject.com/data
2.) Brewerie API: https://www.openbrewerydb.org/
3.) Geocoding API: https://opencagedata.com/api

![](https://github.com/skip1113/class-pro-1/blob/master/assets/images/trailsscreenshot.JPG)

Our Vision
As developers we want to create an app that will allow the user to search for local hiking trails and breweries near by. 

features:
Trails:
search by city
name
location
difficulty level
ratings
summary


Breweries:
search by city
name
address
type
phone number
website


USER STORIES:

1) Audience: people who like to hike and drink beer
2) Helps people plan their hikes around favorite breweries or restaurants.
3) Geographically connect hiking trails to brewery locations:
    -provide trail directions to trail heads
    -directions to brewery venues
    -trail and brewery ratings
    -difficulty levels
4) Essential User Stories:  As a developer I want to provide...
    a) A website where you can search for hiking and breweries at the same time.
    b) I want to provide menu or beer ratings.
    c) I want to provide difficulty levels for hiking trails
    d) Provide hiking ratings or reviews.
    e) Route planner (bar hopping)
    f) Show maps or provide directions
    g) As a user I want to be able to plan my hiking adventures with one app -- with ease!

TECHNOLOGIES USED:
* JavaScript
* AJAX
* API's
    * Openbrewerydb
    * HikingProject
    * Mapbox

Overcoming Problems:
It made it difficult to use the hiking api to be able to search for a city since it would only let you search my longitude and latitude. We needed to find a way to convert a city to long and lat to be able to search from the hiking api. Our solution was to find a geography api that does that and implement it into our code to make this app user friendly.
