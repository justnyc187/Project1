// require mongoose
const mongoose = require("mongoose");

// connect to mongodb
const dburl = "mongodb://localhost:27017/snkrdb";

// connect mongoos
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(function (){
    console.log("MongoDB connected! :)");
})
.catch(function (err) {
    console.log("MongoDB error :(");
    console.log(err);
});

mongoose.connection.on("disconnected", function(){
    console.log("MongoDB disconnected :(");
});


module.exports = {
    Sneaker: require("./Sneaker"),
    User: require("./User"),
};
