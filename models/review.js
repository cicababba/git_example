const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    vote: {
        type: Number,
        required: true,
        max: 10,
        min: 0
    },
    content: {
        type: String,
        required: true,
        maxlength: 255
    },
    restaurantId: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review