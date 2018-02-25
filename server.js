const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    name : 'Kishore',
    currentYear : new Date().getFullYear()
  });
});

app.listen(3000);
