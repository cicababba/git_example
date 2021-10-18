const User = require("../models/user")
const jwt = require("jsonwebtoken")

const createToken = (userId) => {
    return jwt.sign({ userId }, 'viromarquantebell', {
        expiresIn: 24 * 60 * 60 //24 hours
    })
}


const userLogin = async (email, password) => {
    const userId = await User.login(email, password)
    if(userId)
        return { jwt: createToken(userId)}
    return null
}

const userLogout = (token) => {

}

module.exports = {
    userLogin,
    userLogout
}