const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: false
    },
    favoriteFood: {
        type: [String]
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user