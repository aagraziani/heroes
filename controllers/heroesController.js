const fs = require('fs');
const express = require('express');
const router = express.Router();


const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));


let controlador = {
    todosLosHeroes: function (req, res){
        
        let respuesta;

        heroes.forEach(elemento => respuesta += "\n" + elemento.id + "\n" + elemento.nombre + "\n" + elemento.profesion + "\n" + elemento.pais + "\n" + elemento.resenia);


        res.end(respuesta);
    },

    heroeDetalle: function (req, res){

        if(req.params.id > heroes.length){
           
            let respuesta= 'id inexistente';
            res.end(respuesta);
        
        } else {
           
            let devolverHeroe = heroes.filter(function(elemento){
                return elemento.id == req.params.id;
            });
    
            res.end('Mi nombres es ' + devolverHeroe[0].nombre + 'y soy ' + devolverHeroe[0].profesion);
          
        }

    },

    detalleConBio: function (req, res){

        if(req.params.id > heroes.length){
            
            res.end('No encontramos un héroe para mostrarte su biografía.');
        
        } if(req.params.ok!= 'ok'){
            
            res.end(heroes[req.params.id].nombre + ' lamenta que no quieras sabes mas : (');
        
        }
        
        res.end (heroes[req.params.id].nombre +"\n" + heroes[req.params.id].resenia);

    },

};

module.exports = controlador;