const express = require('express');
const router = express.Router();

router.get("/estudios", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('estudios',{titulo:"pagina Home de productos",descripcion:"Esta pagina es de productos"})
});

module.exports = router;