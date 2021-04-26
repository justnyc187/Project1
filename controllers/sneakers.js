const express = require("express");

const db = require("../models");

const router = express.Router();






router.get("/", function (req, res){
    res.render("sneakers/home");

});


router.get("/Sneakers", function(req, res){

res.render("sneakers/inventory");
});



module.exports = router;