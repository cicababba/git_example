
const sendErrorResponse = (httpCode, error, res) => {
    res.status(httpCode).send({status: "KO", message: `Something went wrong, error caused by: ${error}`})
}

const sendSuccessResponseTestDaGithub = (httpCode, result, res) => {
    console.log("sto cercando di creare un conflitto")
    res.status(httpCode).send({status: "OK", result})
}

const sendSuccessResponse = (httpCode, result, res) => {
    res.status(httpCode).send({status: "OK", result})
}

module.exports = {
    sendErrorResponse,
    sendSuccessResponse
}
