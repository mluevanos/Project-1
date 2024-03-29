
var APIKey = "4aa84673b53e416b8d8183934192910";
  
    // Here we are building the URL we need to query the database
var queryURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=4aa84673b53e416b8d8183934192910&q=Los Angeles&format=json&num_of_days=1&extra=localObs,utcDateTime&date=today&includelocation=yes" + APIKey;
  
    // Here we run our AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
})
      // We store all of the retrieved data inside of an object called "response"
.then(function(response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
});

$("#confirm").on("click", function() {
    var locationInput = document.querySelector(".myLocation").value;
    console.log(locationInput);
    var queryTest = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key="+APIKey+"&q="+locationInput+"&format=json&num_of_days=1&includelocation=yes";
    $.ajax({
        url: queryTest,
        method: "GET"
    })
          // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
            // Log the queryURL
            console.log(queryURL);
            // Log the resulting object
            console.log(response);
            var tempNow = response.data.current_condition[0].temp_F;
            var descNow = response.data.current_condition[0].weatherCode;
            console.log(tempNow);
            console.log(descNow);
            var tempIcon = response.data.current_condition[0].weatherIconUrl[0].value;
            console.log(tempIcon);
            var tempIconImg = $("<img>").attr("src", tempIcon);
            
            $(".openWeather").prepend("<br><hr>" + "Current Temperature : " + tempNow + "F" + "<br>" + "Current Condition : " + descNow );
            $(".openWeather").append(tempIconImg);
            if (descNow ==="113"){
                console.log("hello")
                var urlHot = "https://api.edamam.com/search?q=salad&app_id=c814663e&app_key=0c4b0756ea6a4474bc365916d73a84b7";
                $.ajax({
                url: urlHot,
                method: "GET"
                })
                .then(function(response) {
                    console.log(response);
                    var recipeList = response.hits;
                    console.log(recipeList[0].recipe.label);
                    console.log(recipeList[0].recipe.shareAs); //OR recipe.shareAs
                    for (let i=0; i<recipeList.length; i++){
                        var recipeName = recipeList[i].recipe.label;
                        var recipeUrl = recipeList[i].recipe.shareAs;
                        var recipeText = recipeName.link(recipeUrl);
                        $(".recipe").prepend("<br><hr>" + recipeText);
                    }
                })
            }
            else if(descNow ==="323" || descNow ==="326" || descNow ==="329" || descNow ==="332" || descNow ==="335" || descNow ==="338"){
                var urlCold = "https://api.edamam.com/search?q=soup&app_id=c814663e&app_key=0c4b0756ea6a4474bc365916d73a84b7";
                $.ajax({
                url: urlCold,
                method: "GET"
                })
                .then(function(response) {
                    console.log(response);
                    var recipeList = response.hits;
                    console.log(recipeList[0].recipe.label);
                    console.log(recipeList[0].recipe.shareAs); //OR recipe.shareAs
                    for (i=0; i<recipeList.length; i++){
                        var recipeName = recipeList[i].recipe.label;
                        var recipeUrl = recipeList[i].recipe.shareAs;
                        var recipeText = recipeName.link(recipeUrl);
                        $(".food").prepend("<br><hr>" + recipeText);
                    }
                })
            }
            else if(descNow ==="308" || descNow ==="305" || descNow ==="302" || descNow ==="299" || descNow ==="296" || descNow ==="293"){
                var urlRain = "https://api.edamam.com/search?q=crockpot&app_id=c814663e&app_key=0c4b0756ea6a4474bc365916d73a84b7";
                $.ajax({
                url: urlRain,
                method: "GET"
                })
                .then(function(response) {
                    console.log(response);
                    var recipeList = response.hits;
                    console.log(recipeList[0].recipe.label);
                    console.log(recipeList[0].recipe.shareAs); //OR recipe.shareAs
                    for (i=0; i<recipeList.length; i++){
                        var recipeName = recipeList[i].recipe.label;
                        var recipeUrl = recipeList[i].recipe.shareAs;
                        var recipeText = recipeName.link(recipeUrl);
                        $(".food").prepend("<br><hr>" + recipeText);
                    }
                })
            }
            else if(descNow === "122") {
                var urlSnow = "https://api.edamam.com/search?q=roast&app_id=c814663e&app_key=0c4b0756ea6a4474bc365916d73a84b7";
                $.ajax({
                url: urlSnow,
                method: "GET"
                })
                .then(function(response) {
                    console.log(response);
                    var recipeList = response.hits;
                    console.log(recipeList[0].recipe.label);
                    console.log(recipeList[0].recipe.shareAs); //OR recipe.shareAs
                    for (i=0; i<recipeList.length; i++){
                        var recipeName = recipeList[i].recipe.label;
                        var recipeUrl = recipeList[i].recipe.shareAs;
                        var recipeText = recipeName.link(recipeUrl);
                        $(".food").prepend("<br><hr>" + recipeText);
                    }
                })
            }

            else {
                var urlDessert = "https://api.edamam.com/search?q=dessert&app_id=c814663e&app_key=0c4b0756ea6a4474bc365916d73a84b7";
                $.ajax({
                url: urlDessert,
                method: "GET"
                })
                .then(function(response) {
                    console.log(response);
                    var recipeList = response.hits;
                    console.log(recipeList[0].recipe.label);
                    console.log(recipeList[0].recipe.shareAs); //OR recipe.shareAs
                    for (i=0; i<recipeList.length; i++){
                        var recipeName = recipeList[i].recipe.label;
                        var recipeUrl = recipeList[i].recipe.shareAs;
                        var recipeText = recipeName.link(recipeUrl);
                        $(".food").prepend("<br><hr>" + recipeText);
                    }
                })
            }
    
    })})