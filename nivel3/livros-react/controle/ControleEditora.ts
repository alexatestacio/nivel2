import { Editora } from '../modelo/Editora';


const editoras: Array<Editora> = [
    new Editora(1, 'Editora Nova'),
    new Editora(2, 'Editora Velha'),
    new Editora(3, 'Editora Antiga')
]
  
  export class ControleEditora {
    getNomeEditora(codEditora: number): string {
        const editora = editoras.filter((editora) => editora.codEditora === codEditora)[0];
        return editora ? editora.nome : '';
    }
    
    getEditoras(): Editora[] {
      return editoras;
    }
  }
