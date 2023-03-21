function swap(array, posicao_1, posicao_2) {
    const temp = array[posicao_1];
    array[posicao_1] = array[posicao_2];
    array[posicao_2] = temp;
}

function bubble_sort(vetor) {
    const len = vetor.length;
    let trocado;
    let ultimo_indice = len - 1;
  
    do {
      trocado = false;
      let ordenado = true;
  
      for (let i = 0; i < ultimo_indice; i++) {
        if (vetor[i] > vetor[i + 1]) {
          swap(vetor, i, i + 1);
          trocado = true;
          ordenado = false;
        }
      }
      ultimo_indice--;
  
      if (ordenado) {
        return vetor;
      }
    } while (trocado);
  
    return vetor;
}
  
function selection_sort(vetor) {
    const len = vetor.length;
  
    for (let i = 0; i < len - 1; i++) {
      let indice_minimo = i;
  
      for (let j = i + 1; j < len; j++) {
        if (vetor[j] < vetor[indice_minimo]) {
          indice_minimo = j;
        }
      }
  
      if (indice_minimo !== i) {
        swap(vetor, i, indice_minimo);
      }
    }
  
    return vetor;
}

function quick_sort(vetor, pos_inicial = 0, pos_final = vetor.length - 1) {
    if (pos_inicial < pos_final) {
      const indice_pivo = particionamento(vetor, pos_inicial, pos_final, vetor[pos_final]);
      quick_sort(vetor, pos_inicial, indice_pivo - 1);
      quick_sort(vetor, indice_pivo + 1, pos_final);
    }
    return vetor;
  }
  
  function particionamento(vetor, pos_inicial, pos_final, pivot) {
    let indice_pivo = pos_inicial - 1;
  
    for (let i = pos_inicial; i < pos_final; i++) {
      if (vetor[i] < pivot) {
        indice_pivo++;
        swap(vetor, indice_pivo, i);
      }
    }
  
    swap(vetor, indice_pivo + 1, pos_final);
    return indice_pivo + 1;
}
    
function shuffle(vetor, qtd_trocas) {
    const n = vetor.length;
  
    for (let i = 0; i < qtd_trocas; i++) {
      const index1 = Math.floor(Math.random() * n);
      const index2 = Math.floor(Math.random() * n);
      swap(vetor, index1, index2);
    }
  
    return vetor;
}