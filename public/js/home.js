//----------------------------------------------------------
//--------------- Affichage --------------------------------
//----------------------------------------------------------
/**
 * Afficher la citation
 */
const picture = document.querySelector('#picture')
const quote = document.querySelector('#quote')
setTimeout(() => quote.classList.add('is-visible'), 2200)

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
        error => console.log(error)
    )
})

/**
 * Bouton recharger la citation
 */
document.querySelector('#refresh-quote').addEventListener('click', event => {
    event.preventDefault()
    apiRefresh('/api/refresh-quote').then(
        response => {
            document.querySelector('#quote-text').innerHTML = response.quoteText
            document.querySelector('#quote-author').innerHTML = response.quoteAuthor
        },
        error => console.log(error)
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
    return new Promise( (resolve, reject) => {
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.responseText)
                resolve(data)
            }
        }
        xhr.open("GET", url, true)
        xhr.send()
        // reject("")
    })
}
