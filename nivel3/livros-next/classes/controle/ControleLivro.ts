import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    new Livro(1, 1, 'O Pequeno Príncipe', 
    'O Pequeno Príncipe conta a história de um menino que vive em um asteróide e viaja pelo universo conhecendo personagens engraçados', ['Antoine de Saint-Exupéry']),
    new Livro(2, 2, 'O Senhor dos Anéis', 
    'O Senhor dos Anéis conta a história de um grupo de hobbits que precisam destruir o anel de poder para salvar o mundo', ['J. R. R. Tolkien']),
    new Livro(3, 3, 'Harry Potter',
    'Harry Potter é um jovem órfão que descobre ser um bruxo e precisa salvar o mundo da magia do vilão Voldemort', ['J. K. Rowling'])
];

export class ControleLivro {

    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const codigoMax = Math.max(...livros.map(livro => livro.codigo));
        livro.codigo = codigoMax + 1;
        livros.push(livro);
    }

    excluir(codigo: any) {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index >= 0) {
          livros.splice(index, 1);
          return true;
        }
        return false;
    }
}

