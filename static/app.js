
let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let cityName = document.querySelector('.cityName');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let speed = document.querySelector('.speed');
let direction = document.querySelector('.direction'); 

button.addEventListener('click',function() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=18e247e0f23aeb979d363b605126f7e9')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        let windSpeed = data['wind']['speed'];
        let directionValue = data['wind']['deg'];

        cityName.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = (tempValue-273.15).toFixed(2)+'\xB0C';
        speed.innerHTML = windSpeed+' m/s';
        direction.innerHTML = directionValue + ' deg';
    })

.catch(err => console.log('Wrong city name'))
})


//====================Forecast===========//
$(document).ready(function() {
$('out').click(function(event){
    console.log("inside ajax");
    $.ajax(
        {
            data : {
                speedval : speed.innerHTML,
                direction : direction.innerHTML,
                    },
            url: '/hi',
            type : 'POST',
            success: function(data)
            {
                alert(data.prediction);
            }


        }
    );
    
    
}
);
});