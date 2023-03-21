import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  livro: Livro = new Livro();
  autoresForm: string = "";
  editoras: Array<Editora> = [];

  constructor(private servEditora: ControleEditoraService,
              private servLivros: ControleLivrosService,
              private router: Router) { }

  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe(
      editoras => {
        this.editoras = editoras;
      },
      error => {
        console.log('Erro ao obter editoras:', error);
      }
    );
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

}
