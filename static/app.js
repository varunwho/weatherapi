let weather = {
  apiKey: "18e247e0f23aeb979d363b605126f7e9",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
      console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp } = data.main;
    const { speed, deg } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
      document.querySelector(".degree").innerText =
      "Wind Direction: " + deg + "°";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Odisha");


//====================Forecast===========//
$(document).ready(function() {
$('button').click(function(event){
    console.log("inside ajax");
    $.ajax(
        {
            data : {
                speedval : speed.innerHTML,
                direction :direction.innerHTML,
                    },
            url: '/predict',
            type : 'GET',
            success: function(data)
            {
                alert(data.prediction);
                $('#output').text(data.prediction * 3600 + "   kW").show();
            }


        }
    );
    
    
}
);
});