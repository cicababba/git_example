
const sendErrorResponse = (httpCode, error, res) => {
    res.status(httpCode).send({status: "KO", message: `Something went wrong, error caused by: ${error}`})
}

const sendSuccessResponse = (httpCode, result, res) => {
    console.log("sto cercando creare un conflitto")
    res.status(httpCode).send({status: "OK", result})
}

module.exports = {
    sendErrorResponse,
    sendSuccessResponse
}
