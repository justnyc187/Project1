
// *** EXTERNAL MODULES *** \\
const express = require("express");
const methodOverride = require("method-override");

// *** INTERNAL MODULES *** \\
const controllers = require("./controllers");


// *** INSTANCED MODULES *** \\
const app = express();

// *** CONFIGURATION *** \\
const PORT = 4002;

app.set("view engine", "ejs");


// *** MIDDLEWARE ** \\
// body data middleware
app.use(express.urlencoded({ extended: true}));

// method override middleware
app.use(methodOverride("_method"));


// *** ROUTES/CONTROLLERS ** \\

// HOME routes

app.get("/", function(req, res){
    res.send("WOAT is in Progress!!!!!!!")
});


// *** SERVER LISTENER *** \\
app.listen(PORT, function(){
    console.log(`SNEAKER APP is live at http:/localhost:${PORT}`);
});



