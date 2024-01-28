const express = require('express');
const ejs = require('ejs');

const mongoose = require('mongoose');
const Post = require('./models/Post');

const path = require('path');

// Database
mongoose.connect('mongodb://localhost/cleanblog-test-db');

const app = express();

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

// ROUTERS
app.get("/",async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
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