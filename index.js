//Js template

const express = require('express'); 
const app = express();
const port = 3000;



//este es un cambio en el repo
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));

app.use(express.static('Images'));

app.use(express.static('scripts'));


//routes

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('');
});

app.get('/strangeRoute', (req, res) =>{
    res.render('');
});

//cambios feature-edwin
app.get('/strangeRoute', (req, res) =>{
    res.render('');
});
//cambios feature-edwin

//app.post('/userSingup', rutas);


//RUTA DE WILMER
app.get('/wilmerRoute', (req, res) =>{
    res.render('');
});


const server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Mande App listening at http://", host, port)
});