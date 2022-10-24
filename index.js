const express = require("express");
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public'))

app.set('view engine','ejs')

app.set('views',__dirname + '/views')

app.get("/", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('index',{titulo:"pagina Home cargada"})
});

app.get("/sobremi", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('sobremi')
});

app.get("/estudios", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('estudios',{titulo:"pagina Home de productos",descripcion:"Esta pagina es de productos"})
});

app.get("/referencias", (req, res) =>{
    // res.send("Solo sena lkas");
    // console.log(__dirname)
    res.render('referencias')
});


app.use((req,res,next) =>{
    res.status(404).render(__dirname + '/public/404.html')
});

app.listen(port, () =>{
    console.log(`Ejecutando en el puerto : ${port}`)
})