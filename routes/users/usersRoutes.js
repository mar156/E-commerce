const express = require('express');
const router = express.Router();

(req,res) =>{
    res.sendFile(__dirname + '/views/formulario-usuario.html');
}

(req,res) => {
    res.sendFile(__dirname + '/views/iniciar-sesion.html');
}
module.exports = router;