const userService = require("../services/userService")

const { sendErrorResponse, sendSuccessResponse } = require("../shared/utils")

const signup = (req, res) => {
    const { email, password } = req.body
    userService.createNewUser(email, password).then(result => {
        sendSuccessResponse(201, result, res)
    }).catch(err => {
        sendErrorResponse(400, err, res)
    })
}

const changePassword = (req, res) => {
    const { userId, password } = req.body
    userService.changePassword(userId, password).then(result => {
        sendSuccessResponse(200, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const reserve = (req, res) => {
    const { userId } = req.query
    const { data } = req.body
    userService.reserve(userId, data).then(result => {
        sendSuccessResponse(201, result, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}

const getReservations = (req, res) => {
    const { userId } = req.query
    userService.getById(userId).then(result => {

        sendSuccessResponse(200, result.reservations, res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })
}


module.exports = {
    signup,
    changePassword,
    reserve,
    getReservations
}