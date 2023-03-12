require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8080;

//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//MiddleWeather - Servir contenido estatico 
app.use(express.static('public'));

//TODO: Endpoints con HANDLEBARS
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Pool Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Pool Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Pool Rojas',
    titulo: 'Curso de Node'
  });
});


//EndPoints
app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(port, () => {
  console.log(`Se esta corriendo el servidor en el puerto: ${port}`);
});

// app.get('/', (req, res) => {
//   res.send(__dirname + '/public/index.html');
// });s

// app.get('/generic', (req, res ) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res ) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

// app.get('/404', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// });