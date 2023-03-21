import { useState, useEffect } from "react";
import ControleLivro from "../controle/ControleLivro";
import ControleEditora from "../controle/ControleEditora";
import LinhaLivro from "./LinhaLivro";

export default function LivroLista() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const carregarLivros = async () => {
      const listaLivros = await controleLivro.obterLivros();
      setLivros(listaLivros);
      setCarregado(true);
    };

    if (!carregado) {
      carregarLivros();
    }
  }, [carregado, controleLivro]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Código</th>
            <th>Editora</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
              nomeEditora={controleEditora.getNomeEditora(livro.codigoEditora)}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}