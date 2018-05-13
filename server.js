const express = require('express');

var app = express();

app.get('/', function(req, res)
{
res.send({
  name: 'Tino',
  city: 'Leeds',
  gender: 'Male'
});
});

app.get('/about', (req, res) =>
{
  res.send('About Page');
})


app.get('/bad', (req, res) =>
{
  res.send({
    errorMessage: 'Bad request'
  }
)})

app.listen(3000);
