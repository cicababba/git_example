const express = require("express")
const router = express.Router()

const {validateToken} = require("../middlewares/authMiddleware")
const {
    getAllByRestaurantId,
    getLastByRestaurantId,
    writeReview,
    deleteReview,
    getAvgVotes,
    getById,
    updateReview
} = require("../controllers/reviewController");

router.post("/", validateToken, writeReview)
router.delete("/", validateToken, deleteReview)
router.get("/", validateToken, getById)
router.put("/", validateToken, updateReview)
router.get("/all", validateToken, getAllByRestaurantId)
router.get("/last", validateToken, getLastByRestaurantId)
router.get("/avg", validateToken, getAvgVotes)


module.exports = router