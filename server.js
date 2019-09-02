const express = require('express')
const app = express()
// const port = 3000
//app.get('/', (req, res) => res.send('Hello World!'))

// this code is router create
app.get('/', (request, response) => {
    response.send('Welcome to Express JS')
});

app.get('/aboutus', (request, response) => {
    response.send('Welcome to About Us Page')
});

app.get('/Service', (request, response) => {
    response.send('Welcome to Service Page')
})
//this code is show in console log
app.listen(3000, () => console.log('Servr listen on port 3000'));