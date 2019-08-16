import { ACCESS_KEY, SECRET_KEY } from './keys'
// import axios from 'axios'
import Unsplash from 'unsplash-js';



export default class Unsplash {
    constructor(){
        this.unsplash = new Unsplash({
            applicationId: ACCESS_KEY,
            secret: SECRET_KEY
        })

        this.url = 'https://api.unsplash.com/'
    }

    getPicture(){
        return app.get('/', async function(req, res) {
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
    }
}

/** 
 
front --> back --> unsplash --> afficher photo
 * */