const path = require('path'); 
const express = require('express')
var morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

app.get('/ThanhBlog', (req, res) => {
  res.render('home');
});

app.get('/News', (req, res) => {
  res.render('News');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




