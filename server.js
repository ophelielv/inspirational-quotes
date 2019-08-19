const apiPicture = require('./src/services/api/picture')
const apiQuote = require('./src/services/api/quote')
const express = require('express');
const app = express();

app.get('/', async function(req, res) {
    const image = await (new apiPicture()).getPicture()
    if(!image){
        res.status(424).send('Image not found');
    }
    
    const quote = await (new apiQuote()).getQuote()
    if(!quote){
        res.status(424).send('Quote not found');
    }
    
    res.render('./index.ejs', {
        image: image,
        quote: quote
    })
});

app.get('/api/refresh-picture', async function(req, res) {
    const image = await (new apiPicture()).getPicture()
    if(!image){
        res.status(424).send('Image not found');
    }

    res.json({
        largeImageURL: image.largeImageURL,
        tags: image.tags
    })
})

app.get('/api/refresh-quote', async function(req, res) {
    const quote = await (new apiQuote()).getQuote()
    if(!quote){
        res.status(424).send('Quote not found');
    }

    res.json({
        quoteAuthor: quote.quoteAuthor,
        quoteText: quote.quoteText
    })
})

app.use('/public', express.static('public'));

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);