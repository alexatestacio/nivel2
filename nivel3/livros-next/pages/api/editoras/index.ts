import { ControleEditora } from '../../../classes/controle/ControleEditora'
import { NextApiRequest, NextApiResponse } from 'next';


const controleEditora = new ControleEditora()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const editoras = controleEditora.getEditoras()
            res.status(200).json(editoras)
        } else {
            res.status(405).send('Método não permitido');
        }
    } catch (error) {
        res.status(500).end()
    }
}

export { controleEditora };