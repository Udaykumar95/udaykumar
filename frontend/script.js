/*console.log("=== hour1: json basics ===");
let student = {
    name:"uday",
    age:21,
    marks:[85,60,89]
};

let jsonString = JSON.stringify(student);
console.log("JSON OBJECTS:",jsonString);

let parsedObj = JSON.parse(jsonString);
console.log("parsed object:", parsedObj);


book = {
    title:"zero to one",
    author:"peter",
    price:250,
    books:["joy","happy","toy"],
};

let jsonString = JSON.stringify(book);
console.log("JSON OBJECTS:",jsonString);

let parsedObj = JSON.parse(jsonString);
console.log("parsed object:", parsedObj);

console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));

 console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));


fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));

fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
 .then(users => {
    let output = "<h3>user list</h3> <ul>";
    users.forEach(user => {
        output += '<li>${user.name} - ${user.email}</li>';
    });
    output += "</ul>";

    document.body.innerHTML += output;
    
 });
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    console.log("User List:");
    users.forEach(user => {
      console.log(`${user.name} - ${user.email}`);
    });
   
  });

const cityCoords = {
    "bangalore":{lat:12.97,lon: 77.89},
    "londan":{lat:28.97,lon: 87.89},
    "mumbai":{lat:14.97,lon: 74.89},
    "new york":{lat:22.97,lon: 52.89}

  };
  document.getElementById("fetchBtn").addEventListener("click",() => {
    let city = document.getElementById("cityInput").value.toLowerCase();

     
  })
  let coords = cityCoords[city];
  let url = `https://api.open-metro.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=ture`;



  //------------------------AJAX FETCH---------------------------------------------
fetch(url)
  .then(res => res.json())
  .then(users => {
    if(DataTransfer.current_weather){
        document.getElementById("weather").innerHTML = `
        <h3>weather in ${city}</h3>
        <p> temp : ${Data.current_weather.temperature}c</p>
        <p> wind : ${data.current_weather.windspeed}km/h</p>
        <p> time : ${data.current_weather.time}</p>
        `;
    }else{
        document.getElementById("weather").innerHTML = " no data available";
    }
   });
   catch(error => {
    console.error(error);
    document.getElementById("weather").innerHTML = "error city ";
})
