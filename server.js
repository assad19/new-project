
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars'); // Use require here
const app = express();
const port = 3000;


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', require(path.join(__dirname, '/routes/blog.js')));

app.get('/', (req, res) => {
  // res.send('Welcome to our blog');
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
