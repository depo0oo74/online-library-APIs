const mongoose = require("mongoose")

const privacyPolicySchema = mongoose.Schema({
    title: String,
    content: String,
    dateOfCreation: {type: Date, default: Date.now()}
})

const privacy_policy = mongoose.model("privacy_policy", privacyPolicySchema)

module.exports = privacy_policy