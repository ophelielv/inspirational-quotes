//----------------------------------------------------------
//--------------- Affichage --------------------------------
//----------------------------------------------------------
/**
 * Afficher la citation
 */
const quote = document.querySelector('#quote')
setTimeout(() => quote.classList.add('is-visible'), 2200)

//----------------------------------------------------------
//--------------- Utils ------------------------------------
//----------------------------------------------------------
const showError = message => {
    const errorHTML = document.querySelector('.error')
    errorHTML.innerHTML = message
    errorHTML.classList.add('is-visible')
}
//----------------------------------------------------------
//--------------- Boutons ----------------------------------
//----------------------------------------------------------
const url = '127.0.0.1:8080'

/**
 * Bouton recharger l'image
 */
document.querySelector('#refresh-picture').addEventListener('click', event => {
    event.preventDefault()        
    apiRefresh('/api/refresh-picture').then(
        response => {
            const picture = document.querySelector('#picture')
            picture.src = response.largeImageURL
            picture.alt = response.tags
        },
        error => showError('Image not found, try again') 
    )
})

/**
 * Bouton recharger la citation
 */
document.querySelector('#refresh-quote').addEventListener('click', event => {
    event.preventDefault()
    apiRefresh('/api/refresh-quote').then(
        response => {
            const { quoteText, quoteAuthor } = response
            document.querySelector('#quote-text').innerHTML = quoteText ? quoteText : ''
            document.querySelector('#quote-author').innerHTML = quoteAuthor ? '- ' + quoteAuthor : ''
        },
        error => showError('Quote not found, try again')
    )
})

//----------------------------------------------------------
//--------------- API --------------------------------------
//----------------------------------------------------------
/**
 * 
 * @param {*} url 
 */
const apiRefresh = (url) => {
    const xhr = new XMLHttpRequest()

    const loader = document.querySelector('.loader')
    loader.classList.add('is-visible')

    const error = document.querySelector('.error')
    error.classList.remove('is-visible')

    return new Promise( (resolve, reject) => {
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                setTimeout(function(){
                    loader.classList.remove('is-visible')
                }, 250) 
                
                if(xhr.status !== 200 || xhr.responseText === '{}' ){
                    reject(true)
                }
                const data = JSON.parse(xhr.responseText)
                resolve(data)
            }
        }
        xhr.open("GET", url, true)
        xhr.send()
    })
}