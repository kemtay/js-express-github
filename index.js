/* Express dependency */
// the path is relative to the mode_modules folder by default
const express = require('express');
const ejs = require('ejs');
const app = express();

// set EJS as the "view engine"
// view engine = template engine
app.set("view engine", "ejs");

// ROUTES (a URL fragment) ==> a JS function
app.get("/", function(req, res) {
    // req: request (sent by the client)
    // res: response (to be sent back to the client)

    //res.send("<h1>Hello World</h1><h2>Hi how are you?</h2>")  // send the text back to the client, without ejs

    res.render("index", {
        "yourName": "Jon Snow",
        "luckyNumber": Math.random() * 100
    });   // send back the content of index.ejs
          // second arg is an object (dictionary)
          // res.render() will assume the file to be in views folder

});

app.get("/about-us", function(req, res) {
    res.send("About Us - A japanese restaurant")
})

// match hello/<anything>
// will match hello/skemtay 
app.get('/hello/:firstName', function(req, res) {
    res.send("Hello " + req.params.firstName);
})

// start server
app.listen(8080, function(){
    console.log("Express server has started")
})