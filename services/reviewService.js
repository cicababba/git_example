const Review = require("../models/review")

const getAllByRestaurantId = (restaurantId) => {
    return Review.find({ restaurantId })
}

const getLastByRestaurantId = (restaurantId) => {
    return Review.find({ restaurantId })
        .sort({createdAt: -1})
        .limit(1)
}

const insertReview = (data) => {
    const { vote, content, restaurantId } = data
    const newReview = new Review({ vote, content, restaurantId })
    return newReview.save()
}

const deleteReview = (id) => {
    return Review.findByIdAndDelete(id)
}

const updateReview = (id, data) => {
    const { vote, content, restaurantId } = data
    return Review.findByIdAndUpdate(id, { vote, content, restaurantId })
}

const getVotesAvg = async (restaurantId) => {
    let avg
    let reviews = await Review.find({ restaurantId })
    avg = reviews.reduce((prev, curr) => {
        return prev.vote + curr.vote
    })
    return avg / reviews.length
}

const getById = (id) => {
    return Review.findById(id)
}

module.exports = {
    getAllByRestaurantId,
    getLastByRestaurantId,
    insertReview,
    deleteReview,
    updateReview,
    getVotesAvg,
    getById
}