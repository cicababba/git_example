const Restaurant = require("../models/restaurant");

const getRestaurantByName = (name) => {
    return Restaurant.find({ name })
}

const getRestaurants = () => {
    return Restaurant.find()
}

const createRestaurant = (data) => {
    const { name, menu, photos } = data
    const newRestaurant = new Restaurant({ name, menu, photos })
    return newRestaurant.save()
}

const deleteRestaurant = (id) => {
    return Restaurant.findByIdAndDelete(id)
}

const updateRestaurant = (id, data) => {
    const { name, menu, photos } = data
    return Restaurant.findOneAndUpdate(id, { name, menu, photos })
}


module.exports = {
    getRestaurants,
    createRestaurant,
    getRestaurantByName,
    deleteRestaurant,
    updateRestaurant
}