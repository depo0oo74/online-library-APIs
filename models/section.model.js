const mongoose = require("mongoose")

const sectionSchema = mongoose.Schema({
    name: String,
    dateOfCreation: {type: Date, default: Date.now()}
})

const section = mongoose.model("section", sectionSchema)

module.exports = section