window.onload = function () {
    let divContenido = document.getElementById("contenido");
    divContenido.style.backgroundColor = "red";

    setInterval(function () {
        let fechaActual = new Date();
        divContenido.innerHTML = fechaActual;
    }, 1000);
}