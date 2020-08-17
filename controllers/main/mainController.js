const express = require('express');

const controller = {
    index: (req, res)=>{
        res.render('index');
    }
}

module.exports= controller;