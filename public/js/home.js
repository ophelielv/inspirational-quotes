// import axios from 'axios;'

console.log("index.js")


fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {
    method: 'GET',
    body: null,
})
.then((response) => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
