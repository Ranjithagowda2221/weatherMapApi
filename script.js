var button = document.querySelector('.submitBtn');
var inputValue = document.querySelector('.inputValue');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=51d90cdf9c243bda1f87056fa17de75e')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.cod == '404') {
            document.querySelector('.display').style.display="none";
            alert(data.message);
           return
        }
        document.querySelector('.display').style.display="block";
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        document.querySelector('.cityName').innerText += nameValue;
        temp.innerHTML= tempValue;
        desc.innerHTML= descValue;
        document.querySelector('.humidity').innerHTML= data['main']['humidity'];
    })
    
    .catch(err => alert(err)) 
})
