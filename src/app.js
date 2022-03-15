const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())

app.use((req, res, next) => {
    console.log(Object.keys(req))
    next()
})

app.post('/auth/login', (req, res) => {
    return res.sendStatus(200)

    // Utils.setCookie('trainToken', res.data.idToken.jwtToken, 1);
    // Utils.setCookie('trainCurrentPayload', JSON.stringify(res.data.idToken.payload), 1);
    // Utils.setCookie('trainCurrentUser', res.data.idToken.payload

})


module.exports = app