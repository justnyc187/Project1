// Require Express
const express = require("express");

// Set up Router
const router = express.Router();

// Internal db 
const db = require("../models");



/*
 * Index - GET - /authors  - Presentational - respond with all authors
 * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author
 * Show - GET - /authors/:id  - Presentational - respond with specific author by id
 * Create - Post - /authors  - Functional - recieve data from new route to create a author
 * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
 * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
 * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
 */

router.get("/", function (req, res){
    res.render("sneakers/home");

});


router.get("/Sneakers", function(req, res){
    db.Sneaker.find({}, function(err, allSneakers){
        if (err) return res.send(err);
        const context = {sneakers: allSneakers};
        return res.render("sneakers/inventory", context);
    });
});



module.exports = router;