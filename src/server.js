const apiPicture = require('./services/api/picture')
const apiQuote = require('./services/api/quote')
const express = require('express')
const app = express()

app.set('views', process.cwd() + '/src/views')

app.get('/', async function(req, res) {
    let error = null

    const image = await (new apiPicture()).getPicture()
    if(!image){
        error ='Image not found';
    }
    
    const quote = await (new apiQuote()).getQuote()
    if(!quote){
        error = 'Quote not found'
    }
    
    res.render('index.ejs', {
        image: image,
        quote: quote,
        error: error
    })
});

app.get('/api/refresh-picture', async function(req, res) {
    const image = await (new apiPicture()).getPicture()
    if(!image){
        res.status(424).send(false);
    }

    res.json({
        largeImageURL: image.largeImageURL,
        tags: image.tags
    })
})

app.get('/api/refresh-quote', async function(req, res) {
    const quote = await (new apiQuote()).getQuote()
    if(!quote){
        res.status(424).send(false);
    }

    res.json({
        quoteAuthor: quote.quoteAuthor,
        quoteText: quote.quoteText
    })
})

app.use('/public', express.static('src/public'));

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);