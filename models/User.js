const mongooes = require("mongoose");

const userSchema = new mongooes.Schema(
    {
        username: { type: String, required: [true, "Please Provide A Username"], unique: true },
        password: { type: String, required: [true, "Please Provide A Password"], unique: true},
    },
    {
        timestamp: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;