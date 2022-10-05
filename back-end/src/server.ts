import express from 'express'

const app = express()

///localhost:3000/anuncios

app.get('/anuncios', (request, response) => {
    return response.json([

    { id: 1, name: 'Anuncio 1'},

    { id: 1, name: 'Anuncio 2'},

    { id: 1, name: 'Anuncio 3'},

    { id: 1, name: 'Anuncio 4'},

    { id: 1, name: 'Anuncio 5' },
    
    ])
}) 

app.listen(3000) 