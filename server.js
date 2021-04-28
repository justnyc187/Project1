
// *** EXTERNAL MODULES *** \\
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");




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

app.use(express.static(__dirname + "/public"));

// method override middleware
app.use(methodOverride("_method"));


app.use(session({
	// where to store the sessions in mongodb
	store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/snkrdb"}),
	// secret key is used to sign every cookie to say its is valid
	secret: "Super Secret Waffles",
	resave: false,
	saveUninitialized: false,
	// configure the experation of the cookie
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
	}
}));

// logger middleware
// all controller functions take in req,res,next
app.use(function(req,res,next){
	console.log(`${req.method} - ${req.url}`);
	console.log(req.session);
	// we use next in routes to tell express to move on to the next route in order
	next();
});

// add user credientials to ejs files
app.use(function(req,res,next){
	app.locals.user = req.session.currentUser;
	next();
});

// authRequired middleware
const authRequired = function(req,res,next){
	if(req.session.currentUser){
		return next();
	}

	return res.redirect("/login");
};


app.get("/", function (req, res){
    res.render("home");

});

// CONTROLLERS ROUTE

// authentication and authorization
app.use("/", controllers.auth);

app.use("/sneakers", authRequired, controllers.sneakers);

app.use("/users", authRequired, controllers.users);


// *** ROUTES/CONTROLLERS ** \\




// *** SERVER LISTENER *** \\
app.listen(PORT, function(){
    console.log(`SNEAKER APP is live at http:/localhost:${PORT}`);
});



