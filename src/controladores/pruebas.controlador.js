'use strict'

var Pruebas = require('../modelos/pruebas.model');

function agregarPruebas(req, res) {
    var pruebasModel = new Pruebas();
    var params = req.body;
    if(params.ciudad && params.habitantes){
        pruebasModel.ciudad = params.ciudad;
        pruebasModel.habitantes = params.habitantes;

        pruebasModel.save((err, pruebaGuardad)=>{
            return res.status(200).send({pruebaGuardad})
        })
    }
}

function incrementarPrueba(req, res){
    var params = req.body;
    var pruebaId = req.params.id;
    var nacimientos = Number(params.nacimientos);

    Pruebas.findByIdAndUpdate(pruebaId, { $inc: { habitantes: nacimientos }}, {new: true}, (err, pruebasEditadas)=>{

        return res.status(200).send({ pruebasEditadas: pruebasEditadas})

    })
}

module.exports ={
    incrementarPrueba,
    agregarPruebas
}