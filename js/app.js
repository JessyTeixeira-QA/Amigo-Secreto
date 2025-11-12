function calcularSomaEProduto(array) {
  let somaPares = 0;
  let produtoImpares = 1;

  for (let i = 0; i < array.length; i++) {
    let numero = array[i];

    if (numero % 2 === 0) {
      // Se o número for par, adicione-o à soma
      somaPares += numero;
    } else {
      // Se o número for ímpar, multiplique-o pelo produto
      produtoImpares *= numero;
    }
  }

  // Retorna um objeto com os dois resultados
  return {
    soma: somaPares,
    produto: produtoImpares
  };
}

let numeros = [1, 2, 3, 4, 5, 6];
let resultados = calcularSomaEProduto(numeros);

console.log("Soma dos pares:", resultados.soma);     // Saída: 12 (2 + 4 + 6)
console.log("Produto dos ímpares:", resultados.produto); // Saída: 15 (1 * 3 * 5)