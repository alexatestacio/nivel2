import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editora, Livro } from "./tipos";
import { ControladorEditora } from "./ControladorEditora";
import { ControladorLivro } from "./ControladorLivro";

export default function LivroDados() {
  const controleLivro = new ControladorLivro();
  const controleEditora = new ControladorEditora();

  const opcoes = controleEditora.getEditoras().map((editora: Editora) => ({
    value: editora.codigoEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  function tratarCombo(event: React.ChangeEvent<HTMLSelectElement>) {
    setCodEditora(Number(event.target.value));
  }

  function incluir(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
      codigoEditora: codEditora,
    };
    controleLivro.incluir(livro);
    navigate("/");
  }

  return (
    <main>
      <h2>Incluir Livro</h2>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            rows={3}
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (um por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            rows={3}
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">
            Editora
          </label>
          <select
            className="form-control"
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir
        </button>
      </form>
    </main>
  );
}
