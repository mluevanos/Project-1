var tellMe = document.querySelector("#tellMe");
var useME = document.querySelector("#useME");


$(tellMe).on("click", function() {
    $(".container1").remove();
    $(".container2").remove();
    $(".container3").show();
})

$(useME).on("click", function() {
    $(".container1").remove();
    $(".container2").remove();
    $(".container3").show();
    
}
) 





var temperature = data.main.temp * (9/5) - 459.67;

// // var weathers = { sunny :"sunny",
// //                  cloudy: "cloudy",
// //                  mostlyCloudy: "mostly cloudy",
// //                  windy: "windy",
// //                  rainy: "rainy",
// //                  snowy: "snowy",
// //                  monsoony: "monsoony", 
// //                  icy: "icy",


var data = "whatever the ajax call for for open weather api is"

if (weather[0].description = "clear sky") {
    brIMG = sunny
}

if (weather[0].description = "clear sky" && wind.speed>15) {
    document.body.style.background-image = url('SUNNYWINDY');
}


// // clear sky: https://www.youtube.com/watch?v=VLrk-EV_EGA 

// // descriptions: broken clouds, few clouds, scattered cloud,  overcast clouds,
// // heavy intensity rain, light rain, moderate rain,

// // broken clouds / few clouds / scattered clouds background video: https://www.youtube.com/watch?v=joQ42CYhtZw
// //play at 2x speed 
// // use at different points in video, different cloud densities 
// // or https://www.youtube.com/watch?v=YgmIibSnZs0

// // overcast clouds: https://www.youtube.com/watch?v=Wimkqo8gDZ0
// //