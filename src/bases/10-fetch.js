const apiKey = 'x0op9UlJ2ZNPGxEFGGgXN0f9P673RRSC'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        
        document.body.append(img)
    })


