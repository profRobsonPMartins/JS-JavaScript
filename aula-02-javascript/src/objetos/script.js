
// Objeto em JS
// Objeto é uma estrutura de dados que permite armazenar um 
// conjunto de propriedades e métodos relacionados há algo...
console.log("----Novo Objeto-----");
// Como criar um objeto em js?
let pessoa = {
    nome: 'Ana',
    idade: 30,
    profissao: 'Programadora',
    altura: 1.90,
    sabeProgramar: true
}
console.log(pessoa);

console.log("----Novo Objeto-----");
// Objeto com função
let fulano = {
    nome: 'Pedro',
    idade: 45, 
    profissao: 'Designer',
    saudacao: function() {
        console.log('Olá, meu nome é ' + this.nome + ', tenho ' + this.idade + ' anos, e sou ' + this.profissao + '!');
    }
}
fulano.saudacao()