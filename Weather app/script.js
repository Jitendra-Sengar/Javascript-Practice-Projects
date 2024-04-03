const apikey="44964122c96971622fdcceec44f5b0c4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q="

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
    
})