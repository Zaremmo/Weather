
window.addEventListener("load", function(){
    let locationTimzone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".tempereture-description");
    // Get current location
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
             var lon  = position.coords.longitude;
             var lat = position.coords.latitude;
             // Download api based on location
             const api = `http://api.weatherstack.com/current?access_key=153befd0d20d78360b1ef2070c6cae79&query=${lat},${lon}`;
             fetch(api)
            .then(results =>{
                return results.json();
            })
            
            .then(data =>{
                 console.log(data)
                 const {temperature, weather_descriptions} = data.current;
                 const {name} = data.location;
                 // Set DOM elements from api
                 temperatureDegree.textContent = temperature;
                 locationTimzone.textContent = name;
                 temperatureDescription.textContent = weather_descriptions.join(", ");
                 console.log(weatherDesc);

            });
        });
    }
});
