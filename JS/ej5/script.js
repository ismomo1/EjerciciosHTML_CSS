window.onload = function () {
    let divContenido = document.getElementById("contenido");
    divContenido.style.backgroundColor = "yellow";
    divContenido.innerHTML = "Introduce el número de segundos:"
}

let divContenido = document.getElementById("contenido");
let activar = document.getElementById("activar");
let parar = document.getElementById("parar");
let posponer = document.getElementById("posponer");

let audio = document.getElementById("pitido");

let contador = parseInt(document.getElementById("tiempo").value);

function setAlarma() {
    contador = parseInt(document.getElementById("tiempo").value);
    activar.style.visibility = "hidden"; 
    parar.style.visibility = "visible";
    let intervalo = setInterval(function () {
        if (contador > 0) {
            divContenido.innerHTML = contador--;
        } else if (contador == 0) {
            divContenido.innerHTML = "Alarma sonando!!!!!"
            contador--;
            parar.style.visibility = "visible";
            posponer.style.visibility = "visible";
            audio.play();
            clearInterval(intervalo);
        } else {
            clearInterval(intervalo);
        }
    }, 1000);
}

function stopAlarma() {
    document.getElementById("tiempo").value = 0;
    contador = -1;
    divContenido.innerHTML = "Alarma detenida..."
    parar.style.visibility = "hidden";
    posponer.style.visibility = "hidden";
    activar.style.visibility = "visible";
    audio.pause();
    audio.currentTime = 0;
}

function posponerAlarma() {
    document.getElementById("tiempo").value = 5;
    divContenido.innerHTML = "Posponiendo alarma...";
    parar.style.visibility = "hidden";
    posponer.style.visibility = "hidden";
    activar.style.visibility = "visible";
    audio.pause();
    audio.currentTime = 0;
    setAlarma();
}

