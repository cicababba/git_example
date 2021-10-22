const User = require("../models/user")

const changePassword = (userId, password) => {
    return User.findOneAndUpdate(userId, { password })
}

const createNewUser = (email,password) => {
    return User.create({ email, password })
}

console.log("ho sistemato dove viene usata la funzione")

const reserve = (userId, data) => {
    const { date, restaurantId, restaurantName } = data
    return User.findByIdAndUpdate(userId, { $push: { reservations: { restaurantName, restaurantId, date }}})
}

const getById = (userId) => {
    return User.findById(userId)
}


module.exports = {
    changePassword,
    createNewUser,
    reserve,
    getById
}