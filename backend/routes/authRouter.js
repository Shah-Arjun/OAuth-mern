const router = require('express').Router()

router.get('/test', (req, res)=>{
    res.send("test pass")
})


//for google login

module.exports = router