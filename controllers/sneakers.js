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



router.get("/inventory", function(req, res){
    db.Sneaker.find(req.query, function(err, allSneakers){
        if (err) return res.send(err);
        const context = {sneakers: allSneakers};
        return res.render("sneakers/inventory", context);
    });
});


//ROUTE FOR NEW

router.get("/new", function(req, res){
    res.render("sneakers/new");
});

// ROUTE for SHOW PAGE BY SNEAKER ID

router.get("/:id", function(req, res){
    db.Sneaker.findById(req.params.id, function(err, foundSneaker){
        if (err) return res.send(err);

        const context = { Sneaker: foundSneaker };
        return res.render("sneakers/show", context);
    })
})


//MIGHT NEED TO CHANGE ROUTE HERE

router.post("/inventory", function(req, res){
    db.Sneaker.create(req.body, function(err, createdSneaker){
        if (err) return res.send(err);

        return res.redirect("/sneakers/inventory");
    });
});

// EDIT route 

router.get("/:id/edit", function(req, res){
    console.log("EDit routeeeeeeeeee");
    db.Sneaker.findById(req.params.id, function (err, foundSneaker){
        if (err) res.send(err);

        const context = { Sneaker: foundSneaker };
        return res.render("sneakers/edit", context);
    });
});

// PUT ROUTE
router.put("/:id", function(req, res){
    console.log("PUUUTTTTT ROUTE")
    db.Sneaker.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new :true },
        function (err, updatedSneaker){
            if (err) return res.send(err);
            return res.redirect(`/sneakers/${updatedSneaker._id}`);
        }
    );
});

//DELETE ROUTE

router.delete("/:id", function(req, res){
    db.Sneaker.findByIdAndDelete(req.params.id, function(err, deletedSneaker){
        if (err) return res.send(err);

        return res.redirect("/sneakers/inventory");
    });
});

module.exports = router;