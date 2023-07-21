let divContenido = document.getElementById("contenido");
const contenedorImagenes = [
    "https://w7.pngwing.com/pngs/734/505/png-transparent-yao-ming-face.png",
    "https://hips.hearstapps.com/hmg-prod/images/spiderman-meme-1630319444.jpg?resize=980:*",
    "https://static.wikia.nocookie.net/memeaventuras/images/8/80/Fry1.png/revision/latest?cb=20140608213534&path-prefix=es",
    "https://i.imgur.com/K0KPgis.jpg",
    "https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn"
]
let posEliminar = document.getElementById("eliminarPosicion");

window.onload = function () {
    divContenido = document.getElementById("contenido");
    divContenido.style.backgroundColor = "red";
}

function añadirImagen() {
    let imagen = document.createElement("img");
    imagen.height = 200;
    if (divContenido.childElementCount < 5) {
        imagen.src = contenedorImagenes[divContenido.childElementCount];
        divContenido.appendChild(imagen);
    }
    posEliminar.setAttribute("min", 1);
    posEliminar.setAttribute("max", divContenido.childElementCount);
}

function eliminarImagen() {
    let posicion = parseInt(posEliminar.value);
    let eliminarImagen = divContenido.children[posicion - 1];
    divContenido.removeChild(eliminarImagen);
    if (divContenido.children.length == 0) {
        posEliminar.setAttribute("min", 0);
    }
    posEliminar.setAttribute("max", divContenido.childElementCount);
}