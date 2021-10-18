const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuSchema = new Schema({
    plate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const restaurantSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    menu: [
        menuSchema
    ],
    photos: {
        type: [String]
    }
}, { timestamps: true })

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant
