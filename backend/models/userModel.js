const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
    }
})

const UserModel = mongoose.model('UserModel', userSchema)
module.exports = UserModel