// const  = document.querySelector("#");
// const  = document.querySelector("#");
// const  = document.querySelector('#');
// const  = document.querySelector('#');





// current weather function for a specefic city (temp,wind,humid,UV index)
fetch('https://api.openweathermap.org/data/2.5/weather?q=miami&appid=ffdd7626b68a3f81a3df32c8ea82937a')
.then(response => response.json())
.then(data => {

// .catch(err => alert("Wrong city name!"));
})







// 5 day weather function for that city searched
fetch('https://api.openweathermap.org/data/2.5/weather?q=miami&appid=ffdd7626b68a3f81a3df32c8ea82937a')
.then(response => response.json())
.then(data => {

// .catch(err => alert("Wrong city name!"));
})





// add eventlister to make search button work





// local storage area for previous searched cities