const express = require('express');
const { filtro } = require('../intermediarios/autenticacao');
const { listarCategoria } = require('./categoria');
const { login } = require('./login');
const { listarTransacao, detalharTrasacao, cadastrarTransacao, atualizarTransacao, deletarTransacao, consultarExtrato } = require('./trasacao');
const { cadastrarUsuario, obterPerfilUsuario, atualizarPerfil } = require('./usuario');

const rotas = express();

rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login)
rotas.use(filtro)
rotas.get('/usuario', obterPerfilUsuario)
rotas.put('/usuario', atualizarPerfil)
rotas.get('/categoria', listarCategoria)
rotas.get('/transacao', listarTransacao)
rotas.get('/transacao/:id', consultarExtrato)
rotas.get('/transacao/:id', detalharTrasacao)
rotas.post('/transacao', cadastrarTransacao)
rotas.put('/transacao:id', atualizarTransacao)
rotas.delete('/transacao:id', deletarTransacao)


module.exports = {
    rotas
}