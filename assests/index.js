//let request = require('request');
let apiKey = '9cc1df6b3062f5be2751bb5258fff903'
let city = 'san diego';
let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


//request(url, function (err, response, body) {
//  if(err){
//    console.log('error:', error);
//  } else {
//    let weather = JSON.parse(body)
//    let message = `It's ${weather.main.temp}F degrees in
//               ${weather.name}!`;
//                console.log(message);
//                
//  }      
//                                
//
//}).then((response)=>{
//    console.log(response)
//})
//

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

$.ajax({
    url: url,
    method: "GET"

}).then(function(response) {
    console.log(response);
    console.log(response.weather[0].icon);
    let city = response.name;
    let temp = response.main.temp;
    let weatherIcon = response.weather[0].icon;
    let iconurl = "https://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";
    $('#city').text(city);

  //  $('#temp').text(fahrenheitToCelsius(Math.round(temp)) + " \xB0F");
    $('#temp').text(fahrenheitToCelsius((temp)).toFixed(2) + " \xB0F");
    $("#img-icon").html("<img src="+ iconurl + ">");
//$('img-icon').append($("<img>").attr("src", getIcon(weatherIcon)));
////
//function getIcon(iconId) {
//    return ("https://openweathermap.org/img/wn/"+ iconId +"@2x.png");
////
//}
});
