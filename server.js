const express = require('express');
const { appendFile } = require('fs');

const app = express()
const port = 3000

const flowers = require('./models/flowers')
app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', (req,res) => {
    res.render('home', {data: flowers, pageTitle: "Welcome To My Flower Page" });  
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})