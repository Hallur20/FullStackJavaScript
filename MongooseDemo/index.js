var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //so we can use req.body to retrieve fx post data.

var app = express();
var Schema = mongoose.Schema;

app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://user:password@ds255958.mlab.com:55958/star-wars-quotes');

var quoteSchema = {
    "name": String,
    "quote": String
};

var Quote = mongoose.model('Quote', quoteSchema);

app.listen(3000, () => {
    console.log("server started");
});
app.get('/', (req, res) => {
    Quote.find({}, function (err, quotes) {
        if (err) throw err;
        var success = "getSuccess";
        // object of all the users
        res.render('index.ejs', { quotes: quotes, success: success });
    });

});
app.post('/', (req, res) => {
    var n = req.body.name;
    var q = req.body.quote;
    var success;
    var newQuote = Quote({
        name: n,
        quote: q
    });

    if (n !== "" && q !== "") {
        newQuote.save((err) => {
            if (err) throw err;
            Quote.find({}, (err, quotes) => {
                if (err) throw err;
                success = "postSuccess";
                res.render('index.ejs', { quotes: quotes, success: success });
            });
        });
    } else {
        Quote.find({}, (err, quotes) => {
            if (err) throw err;
            success = "postFail";
            res.render('index.ejs', { quotes: quotes, success: success });
        }
        )
    };
}
);