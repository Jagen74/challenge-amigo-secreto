const nombre = document.querySelector(".input-name");
const listaNombres = document.querySelector(".name-list");
const amigoSecreto = document.querySelector(".result-list");
let nombres = [];

function agregarAmigo() {
    if (!nombre.value) {
        alert("Ingresa un Nombre por favor.");
        amigoSecreto.textContent = "";
    } else {
        amigoSecreto.textContent = "";
        listaNombres.textContent = "";
        nombres.push(nombre.value);
        nombres.forEach(nombre => {
            const item = document.createElement('li');
            item.textContent = nombre;
            listaNombres.appendChild(item);
        });
        nombre.value = "";
    }
}

function sortearAmigo() {
    if (!nombres.length) {
        alert("Ingresa los Nombres primero por favor.");
        amigoSecreto.textContent = "";
    } else {
        let numRandom = Math.floor(Math.random() * nombres.length);
        const item = document.createElement("li");
        item.style.whiteSpace = "pre-line";
        item.textContent = "El amigo secreto es: \n" + nombres[numRandom];
        amigoSecreto.appendChild(item);
    }
    nombres = [];
    nombre.value = "";
    listaNombres.textContent = "";
}

nombre.addEventListener('input', function () {
    let value = this.value.trim();
    if (value.length > 0) {
        this.value = value.charAt(0).toUpperCase() + value.slice(1);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});