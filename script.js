document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.querySelector(".input");
    const searchBtn = document.querySelector(".search-button");
     const weatherIcon = document.querySelector("weather-icon"); 
    async function checkWeather(city){
        const response = await fetch( `https://api.weatherapi.com/v1/current.json?key=8fa5478f1bd04dafbcf101243240304&q=${city}` );
        var data = await response.json();

        console.log(data.location.name);

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";


    }

    searchBtn.addEventListener( 'click', ()=>{
        checkWeather(searchBox.value);
        
    })
});

// // const apiKey = "";
// const apiUrl = "";

// const searchBox = document.querySelector(".input");
// const searchBtn = document.querySelector(".search-button");

// async function checkWeather(city){
//     const response = await fetch( `https://api.weatherapi.com/v1/current.json?key=8fa5478f1bd04dafbcf101243240304&q=${city}` );
//     var data = await response.json();

//     console.log(data.location.name);

//     document.querySelector(".city").innerHTML = data.location.name;
//     document.querySelector(".temp").innerHTML = data.current.temp_c + "°c";
//     document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
// }

// searchBtn.addEventListener( 'click', ()=>{
//     checkWeather(searchBox.value);
//     console.log("Click on search button")
// })



//  <script>
      

// // function api(){
// //     fetch("https://api.weatherapi.com/v1/current.json?key=8fa5478f1bd04dafbcf101243240304&q=patna")
// //     .then(res=> res.json())
// //     .then(data=> console.log(data.current.condition.text))
// //     // temp f -> data.current.temp_f
// //     // temp c -> data.current.temp_c
// //     // city -> data.location.name
// //     // region -> data.location.region
// //     // country -> data.location.country
// //     //weather condition -> data.current.condition.text
// //     // weather icon ->
// // }
// // api();
// </script> 