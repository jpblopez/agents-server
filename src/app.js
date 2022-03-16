const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())

app.use((req, res, next) => {
    console.log(Object.keys(req))
    next()
})

app.post('/auth/login', (req, res) => {
    const payload = {
        user: "John",
        id: 111
    }

    const jwtToken = jwt.sign(payload, "randomsecret", 10)
    
    const idToken = {
        jwtToken,
        payload
    }
    
    return res.status(200).json({
        idToken
    })

    // Utils.setCookie('trainToken', res.data.idToken.jwtToken, 1);
    // Utils.setCookie('trainCurrentPayload', JSON.stringify(res.data.idToken.payload), 1);
    // Utils.setCookie('trainCurrentUser', res.data.idToken.payload
})


module.exports = app