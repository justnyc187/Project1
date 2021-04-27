
// *** EXTERNAL MODULES *** \\
const express = require("express");
const methodOverride = require("method-override");


const db = require("./models");

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

// CONTROLLERS ROUTE

app.use("/", controllers.sneakers);


// *** ROUTES/CONTROLLERS ** \\




// *** SERVER LISTENER *** \\
app.listen(PORT, function(){
    console.log(`SNEAKER APP is live at http:/localhost:${PORT}`);
});



