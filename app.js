const express = require("express")
const app = express()
const mongoose = require("mongoose")

const restaurantRoutes = require("./routes/restaurantRoute")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const reviewRoutes = require("./routes/reviewRoutes")

const dbURI = "mongodb+srv://root:root@minibackend.i5vcu.mongodb.net/expressBe?retryWrites=true&w=majority"


mongoose.connect(dbURI).then(() => {
    console.log("Connection to database from feature/modify_master!")
}).catch(err => {
    console.error(`Something went wrong, error: ${err}`)
})

app.listen(9999)
// app.listen(3000)
// app.listen(3000)
// app.listen(3000)
//app.listen(7777)
//app.listen(7777)
app.use(express.json())
app.use('/restaurant', restaurantRoutes)
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/review', reviewRoutes)

//VADO A FARE ALTRE MODIFICHE






