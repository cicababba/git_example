const express = require("express")
const router = express.Router()

const {
    changePassword,
    signup,
    reserve,
    getReservations
} = require("../controllers/userController");
const { validateToken } = require("../middlewares/authMiddleware");


router.post("/signup", signup)
router.put("/change-password", validateToken, changePassword)
router.post("/reserve", validateToken, reserve)
router.get("/reservations", validateToken, getReservations)

module.exports = router