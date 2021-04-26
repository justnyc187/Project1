const mongoose = require("mongoose");


// Sneaker schema (Style, Size, Condition, Timestamp - unclear about the timestamp right now, but teri had it in her app so i left it in there for now lol)

const sneakerSchema = new mongoose.Schema ({
    style: { type: String, required: [true, "You must provide a style"]},
    size: { type: Number, required: [true, "You must provide a size"]},
    condition: { type: Number, required: [true, "You must provide a condition"]}
},
    {
        timestamps: true,
    }
);

// Model with schema so the rest of the app can access it

const Sneaker = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;