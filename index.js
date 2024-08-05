const express = require('express')
const path = require('path');

const app = express()

const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');
// set the middleware for static files
app.use(express.static(path.join(__dirname, 'public')));


// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})
