const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

publicRoutes = [
    app.use('/search', routes.relatorio)
] 


app.listen(3000);

console.log('Server is runing http://localhost:3000/search')