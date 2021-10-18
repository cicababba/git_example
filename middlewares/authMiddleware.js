const jwt = require("jsonwebtoken")

const { sendErrorResponse }  = require("../shared/utils")

const validateToken = (req, res, next) => {
    let token = req.headers["auth"]
    if(!token) {
        sendErrorResponse(400, "YOU SHALL NOT PASS", res)
    }
    if (token)
        jwt.verify(token, "viromarquantebell", (err, decodedToken) => {
            if (err)
                sendErrorResponse(401, "YOU SHALL NOT PASS", res)
        })
    next()
}

module.exports = {
    validateToken
}