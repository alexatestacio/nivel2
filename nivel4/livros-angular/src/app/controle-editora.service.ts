import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    new Editora(1, 'Editora Nova'),
    new Editora(2, 'Editora Velha'),
    new Editora(3, 'Editora Antiga')
  ]

  getEditoras(): Observable<Array<Editora>> {
    return of(this.editoras);
  }

  getNomeEditora(codEditora: number): Observable<string> {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return of(editora ? editora.nome : '');
  }
}
