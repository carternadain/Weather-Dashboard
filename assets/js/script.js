// const  = document.querySelector("#");
const fiveDayWeather = document.querySelector("#fivedayweather");
const submitButton = document.querySelector('#submit');
const citySearch = document.querySelector('#searchCity');
const currentWeather = document.querySelector('#currentweather')
const temp = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const windspeed = document.querySelector('#windspeed')




// current weather function for a specefic city (temp,wind,humid,UV index)
var singleCityWeather = function(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=ffdd7626b68a3f81a3df32c8ea82937a')
     .then(response => response.json())
     .then(response => {
     currentWeather.innerHTML += response.name
     humidity.innerHTML += ' ' + response.main.humidity
     windspeed.innerHTML += ' ' + response.wind.speed
        console.log(response) 
     }) 
}
        


// .catch(err => alert("Wrong city name!"));








// 5 day weather function for that city searched
// var fiveDayWeather = function(city) {
//  
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=ffdd7626b68a3f81a3df32c8ea82937a')
//      .then(response => response.json())
//      .then(response => {
//         // fivedayWeather.innerHTML += response.name
//         // fivedayWeather.innerHTML += ' ' + response.main.temp
//         // fivedayWeather.innerHTML += ' ' + response.main.humidity
//         // fivedayWeather.innerHTML += ' ' + response.wind.speed

//         console.log(response) 
//      }) 
// }





// add eventlister to make search button work
submitButton.addEventListener ('click',function(){
    singleCityWeather (citySearch.value);
    console.log(citySearch.value)
})




// local storage area for previous searched cities
var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};