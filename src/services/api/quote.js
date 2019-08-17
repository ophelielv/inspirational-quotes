const axios = require('axios');
// const getRandomInt = require('../utils/utils')

class Quote {
    constructor(){
        const params = `?method=getQuote`
        + `&format=json`
        + `&lang=en`

        this.url = `http://api.forismatic.com/api/1.0/${params}`
    }

    /**
     * Citation reçue :
     * {
     *  "quoteText":"Learn all you can from the mistakes of others. You won\'t have time to make them all yourself.", 
     *  "quoteAuthor":"Alfred Sheinwold", 
     *  "senderName":"", 
     *  "senderLink":"", 
     *  "quoteLink":"http://forismatic.com/en/4eff8da0bd/"
     * }
     */
    getQuote(){
        return axios.get(this.url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.message)
        })          
    }

}

module.exports = Quote