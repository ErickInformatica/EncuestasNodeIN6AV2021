'use strict'

const express = require('express');
const pruebasControlador = require('../controladores/pruebas.controlador');

const api = express.Router();

api.put('/incrementarPruebas/:id', pruebasControlador.incrementarPrueba);
api.post('/agregarPruebas', pruebasControlador.agregarPruebas)
module.exports = api;