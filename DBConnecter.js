const express = require("express")
const mongoose = require("mongoose")
URI = process.env.URI

const connectDB = async() => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, UseUnifiedTopology: true })
        console.log('MongoDB connected!!')

    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

module.exports = connectDB