const restaurantService = require("../services/restaurantService")

const { sendErrorResponse, sendSuccessResponse } = require("../shared/utils")


const insertRestaurant = (req,res) => {
    const { data } = req.body
    restaurantService.createRestaurant(data).then((result) => {
        sendSuccessResponse(201, result, res)
    }).catch((err) => {
        sendErrorResponse(500, err, res)
    })
}

const getRestaurants = (req, res) => {
    restaurantService.getRestaurants().then((result) => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const getByName = (req, res) => {
    const { name } = req.query
    restaurantService.getRestaurantByName(name).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
       sendErrorResponse(500, err, res)
    })
}

const deleteRestaurant = (req, res) => {
    const { id } = req.query
    restaurantService.deleteRestaurant(id).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const updateRestaurant = (req, res) => {
    const { id } = req.query
    const { data } = req.body
    restaurantService.updateRestaurant(id, data).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

module.exports = {
    getRestaurants,
    insertRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getByName
}