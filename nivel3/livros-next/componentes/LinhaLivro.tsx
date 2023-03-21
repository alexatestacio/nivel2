import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const editora = controleEditora.getNomeEditora(livro.editora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{editora}</td>
      <td>{livro.ano}</td>
      <td>{livro.preco}</td>
      <td>
        <button className="btn btn-primary">Editar</button>
        <button className="btn btn-danger ml-2" onClick={excluir}>
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default LinhaLivro;