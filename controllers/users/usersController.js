const express = require('express');

const controller = {
createAccount:  (req,res) =>{
    res.render('formulario-usuario');
},

login:  (req, res) => {
    res.render('iniciar-sesion')
}

}


module.exports= controller;