import { ControleLivro } from '../../../classes/controle/ControleLivro'
import { NextApiRequest, NextApiResponse } from 'next';


const controleLivro = new ControleLivro()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const livros = controleLivro.obterLivros()
            res.status(200).json(livros)
        } else if (req.method === 'POST') {
            const novoLivro = req.body;
            controleLivro.incluir(novoLivro);
            res.status(200).json({ message: 'Livro adicionado com sucesso!' });
        } else {
            res.status(405).send('Método não permitido');
        }
    } catch (error) {
        res.status(500).end()
    }
}

export { controleLivro };