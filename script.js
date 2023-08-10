const door = document.querySelector('#door');
const open = document.querySelector("#open");

function abrir(){
    door.src = "img/Aberta.jpg"
}

function fechar(){
    door.src = "img/Fechada.jpg"
}

function AbreFecha(){
    if (open.textContent == "Abrir"){
        abrir();
        open.textContent = "Fechar";
    } else {
        fechar();
        open.textContent = "Abrir"
    }
}

open.addEventListener( "click", AbreFecha );
