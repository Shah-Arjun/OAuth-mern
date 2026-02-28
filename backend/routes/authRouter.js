const { googleLogin } = require('../controllers/authController')

const router = require('express').Router()

router.get('/test', (req, res)=>{
    res.send("test pass")
})


//for google login
router.post('/google', googleLogin)
module.exports = router