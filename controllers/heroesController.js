const fs = require('fs');
const express = require('express');

const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));


let controlador = {
    todosLosHeroes: function (req, res){
        
        let respuesta;

        heroes.forEach(elemento => respuesta += "\n" + elemento.id + "\n" + elemento.nombre + "\n" + elemento.profesion + "\n" + elemento.pais + "\n" + elemento.resenia);


        res.send(respuesta);
    }

};

module.exports = controlador;