// Faça os exercícios abaixo sem utilizar funções prontas de array.
// As únicas propriedades de array que você deve usar são o .length e o .push().

// Ao final, responda o formulário a seguir: https://respondea.typeform.com/to/m1MxT1qk

// Escreva uma função que retorne o tamanho da array
// Exemplo: dada a array ['a','b','c'] deve retornar 3
export function tamanhoDaArray(lista) {
  return lista.length;
}

// Escreva uma função que retorne o último elemento da array
// Exemplo: dada a array ['a','b','c'] deve retornar 'c'
export function retornaUltimo(lista) {
  return lista[lista.length - 1];
}

// Escreva uma função que retorne o elemento no meio da array
// Exemplo: dada a array [1, 2, 3, 4, 5], deve retornar 3
// Se o número de elementos for par, dos dois elementos centralizados, deve retornar o mais à esquerda
// Exemplo: dada a array [1, 2, 3, 4], deve retornar 2
// Dica: pesquise pela função Math.floor
export function retornaMeio(lista) {
  if (lista.length % 2 !== 0) {
    let inteiro = parseInt(lista.length / 2);
    return lista[inteiro];
  } else {
    let inteiro = parseInt(lista.length / 2);
    return lista[inteiro - 1];
  }
}

// Escreva uma função que receba uma lista de números
// e retorne uma nova array contendo os números multiplicados por 2
// Exemplo: Dada a array [1,2,3,4] deve retornar [2,4,6,8]
export function retornaDobro(lista) {
  let newList = [];
  for (let i = 0; i < lista.length; i++) {
    newList[i] = lista[i] * 2;
  }
  return newList;
}

// Escreva uma função que, dada uma array, retorne uma nova array
// contendo somente os elementos da array original que estavam em índices ímpares.
// Exemplo: ['a','b','c','d'] deve retornar ['b','d']
export function elementosImpares(lista) {
  let newList = [];
  for (let i = 0; i < lista.length; i++) {
    if (i % 2 != 0) {
      newList.push(lista[i]);
    }
  }
  return newList;
}

// Escreva uma função que, dada uma array, retorne a soma de todos os seus elementos
// Exemplo: Dada a array [1,2,3] deve retornar 6
export function somaArray(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

// Escreva uma função que procure um elemento dentro de uma array
// e retorne o índice da primeira ocorrência desse elemento.
// Exemplo: procurar 'x' em ['a','x','c','x'] deve retornar 1.
// Se o valor não for encontrado, deve retornar null.
// Não utilize funções prontas (como indexOf)
export function encontraIndice(lista, elemento) {
  let retorno = null;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == elemento) {
      retorno = i;
      return retorno;
    }
  }
  return retorno;
}

// Escreva uma função que retorne o maior número de uma array
// Exemplo: Dada a array [2,5,10,3] deve retornar 10
export function maiorNumero(lista) {
  let maior = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (maior < lista[i + 1]) {
      maior = lista[i + 1];
    }
  }
  return maior;
}

// Escreva uma função que inverta uma array.
// Exemplo: [1,2,3] vira [3,2,1]
// Não utilize funções prontas (como reverse)
export function inverterArray(lista) {
  let newList = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    newList.push(lista[i]);
  }
  return newList;
}

// Escreva uma função que retorne 1 caso o texto fornecido seja um palíndromo ou 0 caso contrário.
// Ser palíndromo significa que o texto escrito de traz pra frente é igual ao texto original. Exemplo: 'ana' é um palíndromo
// Dica: assim como em arrays, você pode acessar o caracter de uma string a partir do seu índice, por exemplo: 'abcd'[1] te dará 'b'
export function ehPalindromo(texto) {}

// Utilizando loops, escreva uma função que concatene duas arrays em uma só
// Exemplo: dadas as arrays [a,b,c] e [1,2,3], retorna [a,b,c,1,2,3]
// Não utilize funções prontas (como concat)
export function concatenarArrays(lista1, lista2) {}

/*
 *
 *
 *
 ********* BÔNUS *********
 *
 *
 *
 */

// Escreva uma função que combine duas arrays de forma alternada
// Exemplo: dadas as arrays [a,b,c] e [1,2,3] retorne [a,1,b,2,c,3].
// Caso as arrays sejam de tamanhos diferentes, a função deve se comportar
// da seguinte forma: dadas arrays [a,b,c,d,e] e [1,2,3], retorne [a,1,b,2,c,3,d,e].
export function concatenarArraysAlternado(lista1, lista2) {}

// Escreva uma função que combine duas arrays que já estão ordenadas
// em uma única array ordenada.
// Exemplo: [1,4,6],[2,3,5] → [1,2,3,4,5,6]
export function concatenarArraysOrdenadas(lista1, lista2) {}

// Escreva uma função que rotacione uma array k vezes
// Exemplo: [1,2,3,4,5,6] rotacionada por 2 vira [3,4,5,6,1,2]
// Caso k seja um número negativo, rotacione para o sentido oposto: [1,2,3,4,5,6] rotacionada por -2 vira [5,6,1,2,3,4]
export function rotacionarArray(lista, k) {}
