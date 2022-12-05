var APIKey = "2255048fd7298045502b182ef2cef8e9";
var searchbtn = document.getElementById("search");





queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=2255048fd7298045502b182ef2cef8e9"
function getlatlon(city){
var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=2255048fd7298045502b182ef2cef8e9";
fetch(geoURL).then(function(response){
   return response.json();
}).then(function(data){
    console.log(data);
    var lat = data[0].lat;
    var lon = data[0].lon;
    getweather(lat,lon);
})
}
function getweather(lat,lon){
    console.log(lat,lon);
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=2255048fd7298045502b182ef2cef8e9`
    fetch(weatherURL).then(function(response){
        return response.json();
    }).then(function(data){
        var weathercard =document.createElement("div")
        weathercard.setAttribute("class", "card")
        var cityname =document.createElement("h2")
        cityname.setAttribute("class", "card-title")
        cityname.textContent = data.name
        weathercard.appendChild(cityname);
        document.getElementById("current-weather").appendChild(weathercard)

        console.log(data);
    })
}
searchbtn.addEventListener("click", function(){
var city = document.getElementById("city").value;
console.log(city)
getlatlon(city)
});