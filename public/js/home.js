
console.log("index.js")


const quote = document.querySelector('#quote')
setTimeout(function(){
    quote.classList.add('is-visible')
}, 2200)
console.log(quote)


// fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {
//     method: 'GET',
//     body: null,
// })
// .then((response) => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));
