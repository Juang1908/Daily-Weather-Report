var APIKey = "2255048fd7298045502b182ef2cef8e9";


var city;



var queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


fetch(queryURL)