const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    phoneNumber: Number,
    password: String,
    role: {type: String, default: "client"},
    dateOfJoin: {type: Date, default: Date.now()}
})

const user = mongoose.model("user", userSchema)

module.exports = user

