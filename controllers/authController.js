const { userLogin } = require("../services/authService")
const { sendErrorResponse } = require("../shared/utils");

const login = (req,res) => {
    const {email, password} = req.body
    userLogin(email, password).then(result => {
        if(result)
            res.send(result)
        else
            sendErrorResponse(401, "email or password are wrong", res)
    }).catch(err => {
        sendErrorResponse(500, err, res)
    })

}

const logout = (req,res) => {
    //ti chiedo scusa, non ho avuto voglia di implementarlo
    //avrei salvato su db i token e quindi nella validateToken
    //oltre a controllare la validtá del token
    //avrei controllato anche che non fosse su db
    res.status(200).send()
}

module.exports = {
    login,
    logout
}