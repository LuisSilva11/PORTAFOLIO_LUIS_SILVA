const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('index',{titulo:"pagina Home cargada"})
});

router.get("/sobremi", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('sobremi')
});

router.get("/estudios", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('estudios',{titulo:"pagina Home de productos",descripcion:"Esta pagina es de productos"})
});

router.get("/referencias", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('referencias')
});

module.exports = router;