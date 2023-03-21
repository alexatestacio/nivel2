import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
        
      const codEditora = Number(req.query.codEditora);
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      const responseObj = { nomeEditora };
      res.status(200).json(responseObj);
    } else {
      res.status(405).send('Método não permitido');
    }
  } catch (error) {
    res.status(500).end();
  }
}