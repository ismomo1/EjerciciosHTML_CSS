window.onload = function () {
    let divContenido = document.getElementById("contenido");
    divContenido.innerHTML = "Hola mundo";
    let colores = ["red", "green", "blue"];
    let cont = 0;

    setInterval(function() {
        divContenido.style.backgroundColor = colores[cont];
        cont += 1;
        if (cont >= colores.length) {
            cont = 0;
        }
    }, 1000);}