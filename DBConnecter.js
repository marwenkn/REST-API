const express = require("express")
const mongoose = require("mongoose")
URI = process.env.URI

const connectDB = async() => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, UseUnifiedTopology: true })
        app.listen(3000)
        console.log('MongoDB connected!!')
        console.log('listening to port : 3000')

    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

module.exports = connectDB