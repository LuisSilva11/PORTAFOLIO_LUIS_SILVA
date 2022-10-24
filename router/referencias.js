const express = require('express');
const router = express.Router();

router.get("/referencias", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('referencias')
});

module.exports = router;