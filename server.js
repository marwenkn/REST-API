//reQuire framework
require("dotenv").config()
const express = require("express")
const connectDB = require("./DBConnecter")
const mongoose = require("mongoose")
const personne = require("./Models/personneSchema")

// create express app
app = express()

//connect to DataBase
connectDB()


// create a model using save function
P = new personne({
    name: "marwen",
    age: 26,
    favoriteFood: [
        "mloukhiya",
        "kamouneya",
        "pasta"
    ]
})

P.save().
then(doc =>
        console.log("succeded to insert data"))
    .catch(err => {
        console.log(err)
    })

// create many models using create fucntion
arrayOfPeople = [{
        name: "ons",
        age: 25,
        favoriteFood: [
            "beaf",
            "koskos",
            "pasta"
        ]
    },
    {
        name: "ghofran",
        age: 26,
        favoriteFood: [
            "indomi",
            "indomi",
            "indomi"
        ]
    },
    {
        name: "mahdi",
        age: 26,
        favoriteFood: [
            "whatever",
            "whatever",
            "whatever"
        ]
    }
]

personne.create(arrayOfPeople).
then(doc =>
    console.log("succeded to insert many data")).
catch(err => {
    console.log(err)
})

//find all with only name
personne.find(null, "name")
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })

//find.one
personne.findOne({ favoriteFood: { $in: ["indomi"] } })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })

//findByID
personne.findById("6288e39133c5e12ae4858080", )
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })

// Find, Edit, then Save
personne.findById("6288e39133c5e12ae4858082")
    .then(doc => {
        doc.favoriteFood.push("yaghort")
        doc.save()
            .then(doc => {
                console.log(doc)
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    })

// findOneAndUpdate
personne.findOneAndUpdate({
        name: "ons" //search Query
    }, {
        age: 20 // replacement values
    }, {
        new: true,
        runValidators: true
    })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })


//findByIdAndRemove
personne.findByIdAndRemove("6288e39133c5e12ae4858081")
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })

//Remove a model
personne.remove({
        name: "mahdi"
    })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })

//chaining query
personne
    .find()
    .sort({ "name": 1 })
    .limit(2)
    .select({ age: 0 })
    .exec()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.log(err)
    })