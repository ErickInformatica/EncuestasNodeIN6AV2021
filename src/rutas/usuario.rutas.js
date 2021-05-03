'use strict'

// IMPORTACIONES
var express = require("express");
var usuarioControlador = require("../controladores/usuario.controlador");

// IMPORTACION MIDDLEWARES PARA RUTAS
var md_autorizacion = require("../middlewares/authenticated");

//RUTAS
var api = express.Router();
api.get('/ejemplo', md_autorizacion.ensureAuth ,usuarioControlador.ejemplo);
api.post('/registrar', usuarioControlador.registrar);
api.get('/obtenerUsuarios', usuarioControlador.obtenerUsuarios);
api.get('/obtenerUsuarioId/:idUsuario', usuarioControlador.obtenerUsuarioID);
api.post('/login', usuarioControlador.login);
api.put('/editarUsuario/:id', md_autorizacion.ensureAuth, usuarioControlador.editarUsuario);
api.put('/editarUsuarioAdmin/:id', md_autorizacion.ensureAuth, usuarioControlador.editarUsuarioAdmin);
api.delete('/eliminarUsuarioAdmin/:idUsuario', md_autorizacion.ensureAuth, usuarioControlador.eliminarUsuarioAdmin);

module.exports = api;