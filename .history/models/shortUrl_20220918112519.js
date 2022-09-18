const mongoose = require('mongoose')

const shortUrlSchema = mongoose.Schema({
    full : {
        type: String,
        required:true
    },
    short: {
        type: String,
        required: true
    }
})