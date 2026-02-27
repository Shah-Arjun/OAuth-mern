const express = require('express')
const app = express()
require('dotenv').config()

const authRouter = require('./routes/authRouter')

// test api
app.use('/', (req, res) => {
    res.send("This is Home page")
})

app.use('/auth', authRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> {
    console.log(`Server started at port ${PORT}`)
})