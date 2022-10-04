var inputs = document.getElementsByTagName("inctrl");
var wTable = document.getElementById("weather-result");
var loadFileButton = document.getElementById("load-file");
inputs[0].innerHTML = "Waleed";

document.getElementById("get-location").addEventListener("click", getW);
loadFileButton.addEventListener("click", loadFile);

async function loadFile(){
    let file = fetch("README.md");
    let text = (await file).text();
    await text.then((x)=>{console.log(x);})
}

function getLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    console.log(position);
}
async function getWeatherForecast(){
    let x = fetch("https://localhost:5001/weatherforecast");
    let y = (await x).text();
    await y.then((x)=>{inputs[0].innerHTML = x});
}
 function getW(){
    const http = new XMLHttpRequest();
    http.onload =  function(){
        wTable.hidden = null;
            inputs[0].innerHTML = this.responseText;
            let w = JSON.parse(this.responseText);
            for (let i = 0; i< w.length; i++) {
              let row = document.createElement("tr");
              let date = document.createElement("td");
              date.innerHTML=w[i].date
              row.appendChild(date);
              
              let tempC = document.createElement("td");
              tempC.innerHTML=w[i].temperatureC
              row.appendChild(tempC);

              let tempF = document.createElement("td");
              tempF.innerHTML=w[i].temperatureF
              row.appendChild(tempF);

              let summary = document.createElement("td");
              summary.innerHTML=w[i].summary
              row.appendChild(summary);

              wTable.appendChild(row);
            }
    }
    http.open("GET", "https://localhost:5001/weatherforecast", true);
    http.send();
}