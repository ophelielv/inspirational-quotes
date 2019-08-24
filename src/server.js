const express = require('express');
const ApiPicture = require('./services/api/picture');
const ApiQuote = require('./services/api/quote');

const app = express();

app.set('views', `${process.cwd()}/src/views`);

app.get('/', async (req, res) => {
    let error = null;

    const image = await (new ApiPicture()).getPicture();
    if (!image) {
        error = 'Image not found';
    }

    const quote = await (new ApiQuote()).getQuote();
    if (!quote) {
        error = 'Quote not found';
    }

    res.render('index.ejs', {
        image,
        quote,
        error,
    });
});

app.get('/api/refresh-picture', async (req, res) => {
    const image = await (new ApiPicture()).getPicture();
    if (!image) {
        res.status(424).send(false);
    }

    res.json({
        largeImageURL: image.largeImageURL,
        tags: image.tags,
    });
});

app.get('/api/refresh-quote', async (req, res) => {
    const quote = await (new ApiQuote()).getQuote();
    if (!quote) {
        res.status(424).send(false);
    }

    res.json({
        quoteAuthor: quote.quoteAuthor,
        quoteText: quote.quoteText,
    });
});

app.use('/public', express.static('src/public'));

app.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
