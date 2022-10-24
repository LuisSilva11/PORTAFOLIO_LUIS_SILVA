const express = require("express");
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public'))

app.set('view engine','ejs')

app.set('views',__dirname + '/views')

app.use('/', require('./router/rutasweb'));
app.use('/index', require('./router/index'));

app.use('/sobremi', require('./router/rutasweb'));
app.use('/sobremi', require('./router/sobremi'));

app.use('/estudios', require('./router/rutasweb'));
app.use('/estudios', require('./router/estudios'));

app.use('/referencias', require('./router/rutasweb'));
app.use('/referencias', require('./router/referencias'));


app.use((req,res,next) =>{
    res.status(404).render('404')
});

app.listen(port, () =>{
    console.log(`Ejecutando en el puerto : ${port}`)
})