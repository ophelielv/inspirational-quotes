const apiPicture = require('./src/services/api/picture')
const apiQuote = require('./src/services/api/quote')
const express = require('express');
const app = express();

app.get('/', async function(req, res) {
    const image = await (new apiPicture()).getPicture()
    const quote = await (new apiQuote()).getQuote()
    if(!image){
        res.status(424).send('Image introuvable');
    }
  
    res.render('./index.ejs', {
        image: image,
        quote: quote
    })
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