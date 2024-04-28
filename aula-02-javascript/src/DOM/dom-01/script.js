
// Criar uma variavel e acessar o dicumento html usando o document
let acessarClasse = document.querySelector('.container');
    acessarClasse.style.border = '2px solid blue';
    acessarClasse.style.height = '80px';
    acessarClasse.style.width = '80px';
    acessarClasse.style.backgroundColor = '#333';

let acessarId = document.getElementById('container-02');
    acessarId.style.border = '2px solid blue';
    acessarId.style.height = '80px';
    acessarId.style.width = '80px';
    acessarId.style.backgroundColor = '#666';
    acessarId.style.transform = 'translateY(-60px) translateX(20px)'

let container03 = document.querySelector('.container-03');
    container03.style.border = '2px solid green'
    container03.style.width = '100px'
    container03.style.height = '100px'

let container03Titulo = document.querySelector('.container-03 h1');
    container03Titulo.textContent = 'Novo Titulo';

let container04 = document.querySelector('.container-04');
    container04.style.border = '2px solid red';
    container04.style.height = '100px'
    container04.style.width = '100px';
    container04.style.transform = 'translateY(30px)';

let container04Paragrafo = document.querySelector('.container-04 p')
    container04Paragrafo.textContent = 'Novo paragrafo';
                                                     