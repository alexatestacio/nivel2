import { Livro } from './livro';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Livro[] = [
    new Livro(1, 1, 'Livro 1', 'Resumo do livro 1', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro 2', 'Resumo do livro 2', ['Autor 3', 'Autor 4']),
    new Livro(3, 1, 'Livro 3', 'Resumo do livro 3', ['Autor 5'])
  ];

  obterLivros(): Observable<Array<Livro>> {
    return of(this.livros);
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): Observable<string> {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
    return of('1');
  }
}
