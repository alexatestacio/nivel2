const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const livro = req.body;
  try {
    await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro.' });
  }
});

router.delete('/:_id', async (req, res) => {
  const _id = req.params._id;
  try {
    await excluir(_id);
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro.' });
  }
});

module.exports = router;
