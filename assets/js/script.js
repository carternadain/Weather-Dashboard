// const  = document.querySelector("#");
const fiveDayWeather = document.querySelector("#fivedayweather");
const submitButton = document.querySelector('#submit');
const citySearch = document.querySelector('#searchCity');
const currentWeather = document.querySelector('#currentweather')
const temp = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#windspeed')
const head = document.querySelector('#header')
const wind = document.querySelector('#wind')
const tempature = document.querySelector('#tempature')
const hum = document.querySelector('#hum')



// current weather function for a specefic city (temp,wind,humid,UV index)
var singleCityWeather = function(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=ffdd7626b68a3f81a3df32c8ea82937a')
     .then(response => response.json())
     .then(response => {
     currentWeather.innerHTML += ' City Name:' + ' ' + response.name 
     humidity.innerHTML += ' Humidity:' + ' ' + response.main.humidity
     windSpeed.innerHTML += ' Windspeed:' + ' ' + response.wind.speed
        console.log(response) 
     }) 
}
        


// .catch(err => alert("Wrong city name!"));







// data m , d ,y temp,wind,humidity
// 5 day weather function for that city searched
var multiDayWeather = function(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=ffdd7626b68a3f81a3df32c8ea82937a')
     .then(response => response.json())
     .then(response => {
        head.innerHTML += ' ' + 'Five Day Forecast'
        tempature.innerHTML += ' Tempature:' + ' ' + response.main.temp
        wind.innerHTML += ' Windspeed:' + ' ' + response.wind.speed
        hum.innerHTML += ' Humidity:' + ' ' + response.main.humidity
            console.log(response)
      
     })
    }      
  



// add eventlister to make search button work
submitButton.addEventListener ('click',function(){
    singleCityWeather (citySearch.value);
    console.log(citySearch.value)
})

submitButton.addEventListener ('click',function(){
    multiDayWeather (citySearch.value);
    console.log(citySearch.value)
})


// local storage area for previous searched cities
// var saveSearch = function(){
//     localStorage.setItem("cities", JSON.stringify(cities));
// 