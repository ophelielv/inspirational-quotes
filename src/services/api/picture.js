const axios = require('axios');
const getRandomInt = require('../utils/utils')

class Picture {
    constructor(keywords){

        const categorìes = [
            `nature`, `backgrounds`, `science`, `education`, 
            `people`, `feelings`, `places`, `animals`, 
            `computer`, `sports`, `travel`, `buildings`,
            `business`, `music`
        ]
        const categoryIndex = getRandomInt(categorìes.length)

        const key = `13332035-cb32565c630b756f293fd93b6`
        const params = `&image_type=photo`
            + `&editors_choice=true`
            + `&orientation=horizontal`
            + `&safesearch=true`
            // + `$per_page=20`
            + `$category=${categorìes[categoryIndex]}`
            + `&q=${ (keywords) ? keywords : 'jack+white' }`

        this.url = `https://pixabay.com/api/?key=${key}${params}`
    }

    /**
     * Image reçue :
     *  {
     *      largeImageURL: 'https://pixabay.com/get/51e2dc464b57b108f5d084609629347d163ddee6564c704c732a72d29449c75e_1280.jpg',
     *      webformatHeight: 416,
     *      webformatWidth: 640,
     *      likes: 329,
     *      imageWidth: 1980,
     *      id: 729515,
     *      user_id: 909086,
     *      views: 47362,
     *      comments: 21,
     *      pageURL: 'https://pixabay.com/photos/flower-beautiful-bloom-blooming-729515/',
     *      imageHeight: 1288,
     *      webformatURL: 'https://pixabay.com/get/51e2dc464b57b108f5d084609629347d163ddee6564c704c732a72d29449c75e_640.jpg',
     *      type: 'photo',
     *      previewHeight: 97,
     *      tags: 'flower, beautiful, bloom',
     *      downloads: 30636,
     *      user: 'Bessi',
     *      favorites: 423,
     *      imageSize: 370390,
     *      previewWidth: 150,
     *      userImageURL: 'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
     *      previewURL: 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729515_150.jpg' 
     *  }
     */
    getPicture(){
        return axios.get(this.url)
        .then(response => {
            const num = getRandomInt(response.data.hits.length)
            return response.data.hits[num]
        })
        .catch(error => {
            console.log(error.message)
        })          
    }

}

module.exports = Picture