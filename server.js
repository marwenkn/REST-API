//reQuire framework
require("dotenv").config()
const express = require("express")
const connectDB = require("./DBConnecter")
const user = require("./Models/userSchema")
const bodyParser = require("body-parser")


// create express app
app = express()

//body Paser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//connect to DataBase
connectDB()

// GET: return all users
app.get("/list", async(req, res) => {
    const users = await user.find()
    res.send(users)
})

// POST: add a new user to the DB
app.post("/add", async(req, res, next) => {
    try {
        const data = new user({
            name: "aymen",
            age: 26,
            favoriteFood: [
                "mloukhiya",
                "kamouneya",
                "pasta"
            ]
        })
        await data.save()
        console.log("data inserted")
        req.body = data
        res.send(req.body)
    } catch (err) {
        res.send(err)
    }
})

// update user by id : put method
app.put("/update/:id", async(req, res) => {
    try {
        const { id } = req.params
        const updatedUser = new user({
            name: zeineb,
            age: 28
        })
        const updated_user = await user.findByIdAndUpdate(req.params.id, updatedUser)
        const a = user.findById(id)
    } catch (err) {
        res.send(err)
    }
})

// delete user by id  :delete method
app.delete("/delete/:id", async(req, res) => {
    try {
        const { id } = req.params
        await user.findByIdAndDelete(id)
        res.send("user is deleted")
    } catch (err) {
        res.send(err)
    }
})

const port = 3000
app.listen(port)
console.log(`listen to port: ${port}`)