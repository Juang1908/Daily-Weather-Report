var APIKey = "2255048fd7298045502b182ef2cef8e9";
var searchbtn = document.getElementById("search");
var cityArray = []




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
        if(!cityArray.includes(data.name)){
            cityArray.push(data.name)
            // Adding to Local Storage
        localStorage.setItem("cityArray", JSON.stringify(cityArray))
        }
        
        var weathercard =document.createElement("div")
        weathercard.setAttribute("class", "card p-1")
        var cityname =document.createElement("h2")
        cityname.setAttribute("class", "card-title")
        cityname.textContent = data.name
        var icon = document.createElement("img")
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        cityname.appendChild(icon)
        // Creating Div for Temp.Humidity.Wind
        var temperatureEl =document.createElement("div")
        temperatureEl.setAttribute("class","card-title")
        temperatureEl.innerHTML = `<p>Temperature: ${Math.round(data.main.temp)} &#8457;</p>`
        var humidityEl =document.createElement("div")
        humidityEl.setAttribute("class", "card-title")
        humidityEl.innerHTML = `<p>Humidity: ${data.main.humidity} &#37;</p>`
        var windEl =document.createElement("div")
        windEl.setAttribute("class", "card-title")
        windEl.innerHTML = `<p>Wind-Speed: ${data.wind.speed} mph</p>`
        weathercard.append(cityname,temperatureEl, humidityEl, windEl);
        document.getElementById("current-weather").appendChild(weathercard)

        console.log(data);
    })
}
// City Search
searchbtn.addEventListener("click", function(){
var city = document.getElementById("city").value;
console.log(city)
getlatlon(city)
});