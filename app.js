
const { readFile } = require('fs').promises;
const express = require('express')
const app = express()

const port = 9001

app.get('/', async(req, res) =>{
    res.send(await readFile('./index.html', 'utf-8'))
})
app.get('/contact', async(req, res) =>{
    res.send(await readFile('./contact.html', 'utf-8'))
})
app.get('/about', async(req, res) =>{
    res.send(await readFile('./about.html', 'utf-8'))
})
app.use( async (request, response) => {
    response.status(404).send( await readFile('./404.html', 'utf8'));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
