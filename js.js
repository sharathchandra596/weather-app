
let  inputvalue= document.getElementById("inputbox")
const btn= document.getElementById("btn")

let weatherImg= document.getElementById("weatherimg")




function checkWeather(city)
{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf89bc2cde67abeceea98d4c23a10716&units=metric`)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        document.querySelector(".city").innerHTML=`${data.name}`
        document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}°C`
        document.querySelector(".humidity").innerHTML=`${data.main.humidity} %`
        document.querySelector(".wind").innerHTML=`${data.wind.speed} Km/h`
        weatherImg.setAttribute("src",`./images/${data.weather[0].main}.png`)
        inputvalue.value=''
    })
  
}

btn.addEventListener('click',()=>{
    if(inputvalue.value=='')
    {
        alert("enter the city name")
    }
    checkWeather(inputvalue.value)
    
})