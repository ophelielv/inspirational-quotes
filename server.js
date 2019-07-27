const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async function(req, res) {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });
  
    res.render('./index.ejs')
});

app.use('/public', express.static('public'));

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);

// const url = require('url');

// app.get('/sous-sol', function(req, res) {
//     const page = url.parse(req.url).pathname;
//     console.log("*********", page);
//     res.setHeader('Content-Type', 'text/plain');
//     res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
// });

// app.get('/etage/1/chambre', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.send('Hé ho, c\'est privé ici !');
// });

// app.get('/etage/:etagenum/chambre', function(req, res) {
//     res.render('../views/chambres.ejs', {etage: req.params.etagenum});
// });