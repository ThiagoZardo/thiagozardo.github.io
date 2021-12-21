//Insere Legenda na Imagem
const textoEntrada = document.getElementById('text-input');
const textoSaida = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');

textoEntrada.addEventListener('keyup', exibeTexto);

function exibeTexto(){
    textoSaida.innerHTML = textoEntrada.value;
}


//Upload de Imagem
function exibeImagem(event) {
    let imagem = document.getElementById('meme-image');
    imagem.src = (URL.createObjectURL(event.target.files[0]));
    imagem.onload = function() {
        URL.revokeObjectURL(imagem.src) 
    }
};


//Botões
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

fire.addEventListener('click',btnFire);
function btnFire(){
    container.style.border='none'
    container.style.border='3px dashed red'
}

water.addEventListener('click',btnWater);
function btnWater(){
    container.style.border='none'
    container.style.border='5px double blue'
}

earth.addEventListener('click',btnEarth);
function btnEarth(){
    container.style.border='none'
    container.style.border='6px groove green'
}

//Imagens Prontas
let meme1 = document.getElementById('meme-1');
let meme2 = document.getElementById('meme-2');
let meme3 = document.getElementById('meme-3');
let meme4 = document.getElementById('meme-4');

meme1.addEventListener('click', exibeMeme1);
meme2.addEventListener('click', exibeMeme2);
meme3.addEventListener('click', exibeMeme3);
meme4.addEventListener('click', exibeMeme4);


function exibeMeme1(event){
    document.getElementById('meme-image').src = event.target.src;
}


function exibeMeme2(event){
    document.getElementById('meme-image').src = event.target.src;
}


function exibeMeme3(event){
    document.getElementById('meme-image').src = event.target.src;
}


function exibeMeme4(event){
    document.getElementById('meme-image').src = event.target.src;
}