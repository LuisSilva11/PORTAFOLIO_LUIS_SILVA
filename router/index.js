const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('index',{titulo:"pagina Home cargada"})
});

module.exports = router;