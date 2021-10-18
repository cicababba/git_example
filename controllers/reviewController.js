const reviewService = require("../services/reviewService")

const { sendErrorResponse, sendSuccessResponse } = require("../shared/utils")

const getAllByRestaurantId = (req,res) => {
    const { restaurantId } = req.query
    reviewService.getAllByRestaurantId(restaurantId).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const getLastByRestaurantId = (req,res) => {
    const { restaurantId } = req.query
    reviewService.getLastByRestaurantId(restaurantId).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const getById = (req,res) => {
    const { id } = req.query
    reviewService.getById(id).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const writeReview = (req,res) => {
    const { data } = req.body
    reviewService.insertReview(data).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const deleteReview = (req,res) => {
    const { id } = req.query
    reviewService.deleteReview(id).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const getAvgVotes = (req,res) => {
    const { restaurantId } = req.query
    reviewService.getVotesAvg(restaurantId).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const updateReview = (req, res) => {
    const { id } = req.query
    const { data } = req.body
    reviewService.updateReview(id, data).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

module.exports = {
    getAllByRestaurantId,
    getLastByRestaurantId,
    writeReview,
    deleteReview,
    getAvgVotes,
    getById,
    updateReview
}