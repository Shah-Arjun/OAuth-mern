const { oauth2client } = require('../utils/googleConfig')
const axios = require('axios')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

// function
const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    // console.log("code is: ", code)

    //1. send the code to google auth server to revieve token
    const googleRes = await oauth2client.getToken(code)

     //2. set  credentials
    oauth2client.setCredentials(googleRes.tokens) 

    //3. get user profile/info form google server
    const userRes = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?json&access_token=${googleRes.tokens.access_token}`) 

    const { email, name, picture } = userRes.data

    // find the user in db
    let user = await UserModel.findOne({userEmail : email})

    // id user not exist in db then create the user data in db --> (if new user)
    if(!user){
      user = await UserModel.create({
        userName:name, 
        userEmail: email,
        image: picture
      })
    }

    const {_id} = user

    // if above authentication is successful then generate jwt token
    const token = jwt.sign({_id, email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIMEOUT})

    return res.status(200).json({
      success: true,
      token,
      user: user
    })
  } catch (err) {
    console.log("error", err.response?.data || err.message)
    res.status(500).json({
      success: false,
      message: "Google Authentication Failed",
      error: err.message
    })
  }
};


module.exports = { googleLogin };
