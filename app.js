const express = require('express')
const path = require('path');

const app = express();

//MIDDLEWARES
app.use(express.static('public'));

app.set("view engine", "ejs")

// ROUTERS
app.get('/', (req, res) => {
   // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
   res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
 });

 app.get('/contact', (req, res) => {
    res.render('contact')
 });

 app.get('/post', (req, res) => {
    res.render('post')
 });

let port = 4030;
app.listen(port, () => {
    console.log(`🚀🚀🚀 Uygulama ${port} portunda aktif.`);
})