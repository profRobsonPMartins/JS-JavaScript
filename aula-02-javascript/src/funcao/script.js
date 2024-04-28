// O que é uma função?
// É um bloco de código que executa uma tarefa específica
// quando chamado ou invocado.
// Sendo assim permite organizar e reultilizar o código.

// Como declarar uma função?
function saudacao(){
    console.log("Olá turma do terceirão!");
}
//retorno da função
saudacao()

console.log("-------------");
// Parametros e argumentos
function soma(a, b) {
    return a + b;
}
// Retorno
let resultado = soma(35, 98);
console.log(resultado);
console.log("-------------");

// Aqui vamos falar sobre função seta
let imprimirmensagem = () =>{
    console.log("Esta é uma função seta!");
}
imprimirmensagem()

console.log("-------------");
// Função de soma no tipo seta
let somando = (c, d) =>{return c + d;};let resultado02 = soma(5, 78);
console.log(resultado02);

// Função do tipo seta saudação
let saudacao02 = (nome) =>{
    return "Olá, " + nome + "!"; // retorno com concatenação
}
let mensagem02 = saudacao02("Turma do 3º A");
console.log(mensagem02);