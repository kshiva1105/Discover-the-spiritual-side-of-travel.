const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/packages', (req, res) => {
    res.render('packages');
});

app.get('/north', (req, res) => {
    res.render('north');
});

app.get('/south', (req, res) => {
    res.render('south');
});

app.get('/east', (req, res) => {
    res.render('east');
});

app.get('/west', (req, res) => {
    res.render('west');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
