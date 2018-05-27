const express = require('express');
const hbs = require('hbs');

let app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('<h1>Hello!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my web app',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page',
       currentYear: new Date().getFullYear()
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