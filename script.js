// a4f7645cd1a2c37568bcde746fa74336
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=a4f7645cd1a2c37568bcde746fa74336


async function weather(){
    let city = document.querySelector("#search>input").value;
    const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=a4f7645cd1a2c37568bcde746fa74336";
    const res=await fetch(url);
    const data = await res.json();
    console.log(data);
    
    temp.innerHTML=Math.round(data.main.temp)+"ºC";
    cityname.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"km/h";

}