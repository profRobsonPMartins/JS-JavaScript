// Array
// O que é um array em JS, é uma estrutura de dados que permite armazenar
// uma coleção ordenada de elementos.
// Exemplo uma lista
console.log("----- Lista de numeros -----");
let numeros = [0, 1, 2, 3, 4];
console.log(numeros);

// Acessar o 1º elemento da nossa lista 
console.log(numeros[5]);

// Adicionar um novo array na lista
numeros.push(5);
console.log(numeros);

// Quantidade de elementos o array
console.log(numeros.length);

// Podemos remover o último elemento da lista
numeros.pop();
console.log(numeros);

// Podemos remover o primeiro elemento da lista
numeros.shift();
console.log(numeros);

// Adicionar um novo elemento no inicio da lista
numeros.unshift(100);
console.log(numeros);

console.log("------------------");
console.log("---Lista mista---");
//Um array pode ser de palavras tambem
let nomes = ["Ana", 33, "João", 34, "Maria", 35];
//Imprimir a lista
console.log(nomes);
// Acessar
console.log(nomes[2]);
// Adicionar
nomes.push("Antonio", [36])
console.log(nomes);
