const fs = require('fs');
const express = require('express');

const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));


let controlador = {
    todosLosHeroes: function (req, res){
        
        let respuesta;

        heroes.forEach(elemento => respuesta += "\n" + elemento.id + "\n" + elemento.nombre + "\n" + elemento.profesion + "\n" + elemento.pais + "\n" + elemento.resenia);


        res.send(respuesta);
    },

    heroeDetalle: function (req, res){

        if(req.params.id>=1 && req.params.id<=10){
            let devolverHeroe = heroes.filter(function(elemento){
            return elemento.id == req.params.id;
        });

        res.send('Mi nombres es ' + devolverHeroe[0].nombre + 'y soy ' + devolverHeroe[0].profesion);
        
        } else {
            let respuesta= 'id inexistente';
            res.send(respuesta);
        }

    }

};

module.exports = controlador;