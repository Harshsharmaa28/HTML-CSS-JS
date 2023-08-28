const apikey ="c1107b822c77088b00fdd47586a2318e";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&&units=metric&q=";
const inputcity =document.querySelector('.cityname');
const searchbtn= document.querySelector(".btn");
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
searchbtn.addEventListener('click',checkweather);
// const city="patna";
async function checkweather(){
    const response = await fetch(apiurl + inputcity.value +`&appid=${apikey}`);
    var data = await response.json();
    city.innerHTML=inputcity.value;
    temp.innerHTML=data.main.temp;
    console.log(data);
}
