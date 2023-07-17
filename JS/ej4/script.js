window.onload = function () {
    let divsNow = document.querySelectorAll(".now");

    setInterval(function () {
        divsNow.forEach(function(div){
        let fechaActual = new Date();
        div.innerHTML = fechaActual;
        div.style.backgroundColor = "red";
    })}, 1000);
}