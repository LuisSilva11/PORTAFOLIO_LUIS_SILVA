const express = require('express');
const router = express.Router();

router.get("/sobremi", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('sobremi')
});

module.exports = router;