const express = require("express")
const router = express.Router()

const {validateToken} = require("../middlewares/authMiddleware")
const {
    getRestaurants,
    insertRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getByName
} = require("../controllers/restaurantController");

router.post("/", validateToken, insertRestaurant)
router.get("/all", validateToken, getRestaurants)
router.put("/", validateToken, updateRestaurant)
router.delete("/", validateToken, deleteRestaurant)
router.get("/", validateToken, getByName)


module.exports = router