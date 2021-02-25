'use strict'

var express = require('express');
var encuestaControlador = require('../controladores/encuesta.controlador');

// MIDDLEWARES === INTERMEDIARIO
var md_autorizacion = require('../middlewares/authenticated');

// RUTAS
var app = express.Router();
app.post('/agregarEncuesta', md_autorizacion.ensureAuth, encuestaControlador.agregarEncuestas);
app.put('/comentarEncuesta/:idEncuesta', md_autorizacion.ensureAuth, encuestaControlador.comentarEncuesta);

module.exports = app;