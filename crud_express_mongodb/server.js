const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient


console.log('May Node be with you');
var db

MongoClient.connect('mongodb://user:password@ds255958.mlab.com:55958/star-wars-quotes', (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
app.set('view engine', 'ejs') //helps with generating html that contains all our quotes.
app.use(bodyParser.urlencoded({extended: true})) //body parser before crus handlers!


app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/index.html')
    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
    //var cursor = db.collection('quotes').find()
    db.collection('quotes').find().toArray(function(err, results) {
        //console.log(results)
        // send HTML file populated with quotes here
        res.render('index.ejs', {quotes: results});
      })
  });


  app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
  });