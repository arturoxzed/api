const express = require('express')
const ditto = require('./pokemon/ditto.json')
const path = require('path')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())
app.get('/pokemon/ditto', (req,res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
res.status(201).json(data)  
    //    let body = ''
})

//req.on('data', chunk =>{
//    body += chunk.tostring()
// })

//req.on('end', () => {
//    const data = JSON.parse(body)
//    data.timestamp = Date.now()
    
// })

app.use((req,res) => {
    res.status(404).send('<h1>404<h1>')
})

app.listen(PORT, () => {
    console.log('server listening on port http://localhost:${PORT}')
})