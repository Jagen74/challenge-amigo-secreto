const nombre = document.querySelector(".input-name");
const listaNombres = document.querySelector(".name-list");
const amigoSecreto = document.querySelector(".result-list");
let nombres = [];

function agregarAmigo() {
    if (!nombre.value) {
        alert("Ingresa un Nombre por favor.")
    } else {
        console.log(nombre.value);
        nombres.push(nombre.value);
        const item = document.createElement("li");
        item.textContent = nombre.value;
        listaNombres.appendChild(item);
        nombre.value = "";
    }
}

function sortearAmigo() {
    if (!nombres.length) {
        alert("Ingresa los Nombres primero por favor.")
        amigoSecreto.innerHTML = "";
    } else {
        let numRandom = Math.floor(Math.random() * nombres.length);
        console.log(numRandom);
        console.log(nombres[numRandom])

        const item = document.createElement("li");
        item.style.whiteSpace = "pre-line";
        item.textContent = "El amigo secreto es: \n" + nombres[numRandom];
        amigoSecreto.appendChild(item);
    }

    nombres = [];
    nombre.value = "";
    listaNombres.innerHTML = "";
}

//* Capitalizar Nombre ingresado
nombre.addEventListener('input', function () {
    if (this.value.length) {
        const nombreCap = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        this.value = nombreCap;
    }
});