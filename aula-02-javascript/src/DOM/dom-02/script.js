
let container01 = document.querySelector('.container');
    container01.style.border = '2px solid black';
    container01.style.width = '300px';
    container01.style.height = '300px';
    container01.style.display = 'flex';
    container01.style.justifyContent = 'center'
    container01.style.alignItems = 'center'

let container01Titulo = document.querySelector('.container h1');
    container01.style.color = "aqua";

let acessarBotao = document.querySelector('.container #btn-01');
    acessarBotao.style.border = '2px solid black'
    
    acessarBotao.addEventListener('click', function() {
        alert('O botão foi clicado!')
        
})