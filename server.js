const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    let logItem = `${new Date().toString()}: ${req.method}, ${req.path}`;
    fs.appendFile('server.log', logItem + '\n', (err) => {
       if(err){
           console.log('unable to append to server.log');
       }
    });
    next();
});
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear();
});

app.get('/', (req, res) => {
    //res.send('<h1>Hello!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my web app'
    })
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page'
   });
});

app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'Unable to handle request'
   }, 404)
});
app.listen(3000, () => {
    console.log('Server is up and running');
});