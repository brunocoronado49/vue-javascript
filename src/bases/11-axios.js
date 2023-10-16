import axios from 'axios'

const apiKey = 'x0op9UlJ2ZNPGxEFGGgXN0f9P673RRSC'
//https://api.giphy.com/v1/gifs/random?api_key=

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// giphyApi.get('/random')
//     .then(({data}) => data)
//     .then(({data}) => {
//         const {images} = data
//         const {original} = images

//         const img = document.createElement('img')
//         img.src = original.url

//         document.body.append(img)
//     })


export default giphyApi

