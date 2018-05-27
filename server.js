const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello!</h1>');
    res.send({
        name: 'Gagan',
        likes: [
            'Travelling',
            'Football',
            'Adventure Sports'
        ]
    })
});

app.get('/about', (req, res) => {
   res.send('<h1> About Page </h1>');
});

app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'Unable to handle request'
   }, 404)
});
app.listen(3000, () => {
    console.log('Server is up and running');
});