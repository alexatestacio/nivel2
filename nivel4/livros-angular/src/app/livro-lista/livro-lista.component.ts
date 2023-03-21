import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe(
      (editoras: Array<Editora>) => {
        this.editoras = editoras;
      }
    );

    this.servLivros.obterLivros().subscribe(
      (livros: Array<Livro>) => {
        this.livros = livros;
      }
    );
  }

  excluir = (codLivro: number): void => {
    this.servLivros.excluir(codLivro).subscribe(() => {
      this.servLivros.obterLivros().subscribe((livros) => {
        this.livros = livros;
      });
    });
  }

  obterNome = (codEditora: number): string => {
    let nome: string = '';
    this.servEditora.getNomeEditora(codEditora).subscribe(result => nome = result);
    return nome;
  }
}
