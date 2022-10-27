const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    res.render('index')
});

router.get("/sobremi", (req, res) =>{
    res.render('sobremi')
});

router.get("/estudios", (req, res) =>{
    res.render('estudios')
});

router.get("/referencias", (req, res) =>{
    res.render('referencias')
});

module.exports = router;