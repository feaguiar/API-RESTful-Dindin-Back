const { query } = require("../bancodedados/conexao");

const listarCategoria = async (req, res) => {
    try {
       const categorias = await query('select * from categorias ');
       return res.json(categorias.rows)
    } catch (error) {
        return res.status(500).json({ mensagem: `Erro interno: ${error.message}` })
    }
}

module.exports = {
    listarCategoria
}