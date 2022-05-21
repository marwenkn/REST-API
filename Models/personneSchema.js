const mongoose = require("mongoose")
const Schema = mongoose.Schema

const personneSchema = new Schema({
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

const personne = mongoose.model("personne", personneSchema)

module.exports = personne