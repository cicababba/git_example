
const sendErrorResponse = (httpCode, error, res) => {
    res.status(httpCode).send({status: "KO", message: `Something went wrong, error caused by: ${error}`})
}

const sendSuccessResponseTest = (httpCode, result, res) => {
    console.log("sto cercando di creare un conflitto durante un merge")
    res.status(httpCode).send({status: "OK", result})
}

const sendSuccessResponse = (httpCode, result, res) => {
    console.log("sto cercando di creare un conflitto")
    res.status(httpCode).send({status: "OK", result})
}

const testMethod = (httpCode, result, res) => {
    console.log("sono un metodo di test")

}

module.exports = {
    sendErrorResponse,
    sendSuccessResponse
}
