const door = document.querySelector('#door');
const open = document.querySelector("#open");

function isBroken(){
    return door.src.indexOf ('Quebrada') > -1
}

function Abrir(){
    if( !isBroken() ){
        door.src = "img/Aberta.jpg"
    }
}

function Fechar(){
    if( !isBroken() ){
        door.src = "img/Fechada.jpg"
    }
}

function Broken(){
    door.src = "img/Quebrada.jpg"
}

function AbreFecha(){
    if (open.textContent == "Abrir"){
        Abrir();
        open.textContent = "Fechar";
    } else {
        Fechar();
        open.textContent = "Abrir"
    }
}

open.addEventListener( "click", AbreFecha)
door.addEventListener( "dblclick", Broken );
