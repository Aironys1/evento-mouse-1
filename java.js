function clicou(){
    document.getElementById("titulo").innerHTML ="Parabéns pelo seu interesse. Deixe um Ok para saber mais. "
}

function clicou2(){
    document.getElementById("h3").innerHTML ="Parabéns pelo seu interesse. Deixe um Ok para saber mais. "
}

function digitou(){
    document.getElementById("teclado").innerHTML = "Vem clicando";
    console.log("Segurando a tecla. ");
}
function digitou2(){
    document.getElementById("teclado2").innerHTML = "Clicando tecla por tecla";
    console.log("Clicando tecla por tecla");
}

function digitou(e){
    console.log(e)
}
function digitou2(e){
    console.log(e)
}





/*Escolha uma cor para o fundo*/



function azul(){
    limpar();

    document.getElementById("titulo5").classList.add('azul');
   
}

function vermelho(){
    limpar();

    document.getElementById("titulo5").classList.add('vermelho');
}

function verde(){
    limpar();
    document.getElementById("titulo5").classList.add('verde');
}
function laranja(){
    limpar();
    document.getElementById("titulo5").classList.add('laranja');
}
function amarelo(){
    limpar();
    document.getElementById("titulo5").classList.add('amarelo');
}
function roxo(){
    limpar();
    document.getElementById("titulo5").classList.add('roxo');
}
function rosa(){
    limpar();
    document.getElementById("titulo5").classList.add('rosa');
}
function preto(){
    limpar();
    document.getElementById("titulo5").classList.add('preto');
}
function branco(){
    limpar();
    document.getElementById("titulo5").classList.add('branco');
}
 



/*Removendo as cores*/
function limpar(){
    document.getElementById("titulo5").classList.remove('azul');
    document.getElementById("titulo5").classList.remove('vermelho');
    document.getElementById("titulo5").classList.remove('verde');
    document.getElementById("titulo5").classList.remove('laranja');
    document.getElementById("titulo5").classList.remove('amarelo');
    document.getElementById("titulo5").classList.remove('roxo');
    document.getElementById("titulo5").classList.remove('rosa');
    document.getElementById("titulo5").classList.remove('preto');
    document.getElementById("titulo5").classList.remove('branco');
}
