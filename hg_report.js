"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Trent Peterson
   Date:   2/28/19
   
   Filename: hg_report.js
	
*/
// This is the gamereport variable that has a bunch of code that connects to a bunch of variables in the products

var gameReport = "<h1>" + itemTitle + "</h1> <h2> By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "'id='gameImg'/> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr> </table>" + itemSummary;



// This calls in the gamereport variable into the article element that I created earlier 
document.getElementById("article").innerHTML = gameReport;
//This section is all about finding the averge rating by adding the ratings together and then divideing by 4 
var ratingsSum = 0;
// Finds how many values there are
var ratingsCount = ratings.length;
// This for loop adds all of the values together
for (var i = 0; i < ratingsCount; i++) {
    ratingsSum += ratings[i];
}
// This variable divides the sum of the values by the amount of values
var ratingAvg = ratingsSum / ratingsCount;

// This is all about the code for the aside
// This is the inital code
var ratingReport = "<h1>Customer Reviews</h1>"
ratingReport += "<h2>" + ratingAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

// This for loop adds the different ratings and there titles, authors, the date of the rating, the amount of stars it gave me and summarys
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'>";
    ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
    ratingReport += "<table>";
    ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
    ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
    ratingReport += "<tr><th>Rating</th><td>";


    for (var j = 0; j < ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png'/>";
    }
    ratingReport += "</td></tr>";
    ratingReport += "</table>";
    ratingReport += ratingSummaries[i];
    ratingReport += "</div>";
}

// This calls in the ratings from above
document.getElementById("aside").innerHTML = ratingReport;