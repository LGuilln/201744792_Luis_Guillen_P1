//imports para el servidor
const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');

router.get('/', (req, res) => {
    res.render('inicio', { max: 15 });
});

router.get('/analizador', (req, res) => {
    res.render('index', { max: 15 });
});

router.get('/users', (req, res) => {
    console.log("envio usuario");

    setTimeout(() => {
        res.status(400).json({
            usuario: '',
            id: '',
            carne: ''
        });
    }, );

}); 

router.get('/', (req, res) => {
    res.render('inicio', { max: 15 });
});

router.get('/123', (req, res) => {
    
    res.render('Frontend', { max: 15 });

});

router.get('/dr', (req, res) => {
    
    res.render('Diagrama', { max: 15 });

});


router.get('/leer', (req, res) => {
    res.post('../public/leer.js', { max: 15 });
});

router.get('/postdata', (req, res) => {
    console.log("recibio");
    let data = req.query.format;
    console.log(data);
});

router.post('/postusers', (req, res) => {
    console.log("recibo usuario");
    console.log(req);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.text);


    res.status(400).send('wrong');
});

router.get('/users', (req, res) => {
    console.log("envio usuario");

    setTimeout(() => {
        res.status(400).json({
            variable: 23
        });
    }, 4500);
    
});

module.exports = router;