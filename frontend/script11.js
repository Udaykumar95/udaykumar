/*const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
$("fetchBtn").on("click", function() {
  let city = $("cityInput").val().toLowerCase();

    if (!cityCoords[city]) {
    $("weather").HTML = "⚠️ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  $.getJSON(url,function(data){
      if (data.current_weather) {
        $("weather").HTML =( `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `);
      } else {
        $("weather").HTML = "⚠️ No data available.";
      }
    }).fail(function() {
        $("#weather").html("⚠️ Error fetching weather.");
      });
});*/
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mydukur": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -1.13 },
  "anantapur": { lat: 41.51, lon: -5.13 },
  "guntur": { lat: 91.51, lon: -2.13 },
  "tadipathri": { lat: 57.51, lon: -30.13 },
  "kurnool": { lat: 50.51, lon: -8.13 },
  "nadyal": { lat: 22.51, lon: -7.13 },
  "proddutor": { lat: 31.51, lon: -10.13 },
  "badvel": { lat: 59.51, lon: -8.23 },
  "kadapa": { lat: 10.71, lon: -74.01 }
};

$("#fetchBtn").on("click", function () {
  let city = $("#cityInput").val().toLowerCase();

  if (!cityCoords[city]) {
    $("#weather").html("⚠️ City not in list!");
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  $.getJSON(url, function (data) {
    if (data.current_weather) {
      $("#weather").html(`
        <h3>Weather in ${city}</h3>
        <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
        <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
        <p>⏱ Time: ${data.current_weather.time}</p>
      `);
    } else {
      $("#weather").html("⚠️ No data available.");
    }
  }).fail(function () {
    $("#weather").html("⚠️ Error fetching weather.");
  });
});
