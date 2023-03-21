import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from './index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
        const codLivro = Number(req.query.codigo);
        controleLivro.excluir(codLivro);
        res.status(200).json({ message: 'Livro excluído com sucesso.' });
    } else {
      res.status(405).send('Método não permitido');
    }
  } catch (error) {
    res.status(500).end();
  }
}