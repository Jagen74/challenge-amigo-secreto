(() => { // Thanks Peter lol
const nombre = document.querySelector(".input-name");
const listaNombres = document.querySelector(".name-list");
const amigoSecreto = document.querySelector(".result-list");
const btnSortear = document.querySelector(".button-draw");
let nombres = [];

function agregarAmigo() {    
    if (!nombre.value) {        
        Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Ingresa un nombre primero!",
            showConfirmButton: false,
            timer: 1600,
            heightAuto: false,   
            backdrop: 'static',
            scrollbarPadding: false           
        });        
        amigoSecreto.textContent = "";
    } else if (nombres.includes(nombre.value)){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "¡El nombre ingresado ya está en la lista!",
            showConfirmButton: false,
            timer: 1600,
            heightAuto: false,   
            backdrop: 'static',
            scrollbarPadding: false                    
        });
    } else if (amigoSecreto.hasChildNodes()){
        btnReset();
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
        btnChk();
    }    
}

function sortearAmigo() {           
    let numRandom = Math.floor(Math.random() * nombres.length);
    const item = document.createElement("li");    
    item.style.whiteSpace = "pre-line";
    item.textContent = "El amigo secreto es: \n" + nombres[numRandom];
    amigoSecreto.appendChild(item);    
    nombres = [];
    nombre.value = "";
    listaNombres.textContent = "";
    btnChk();
}

function btnReset(){
    nombres = [];
    nombre.value = "";
    listaNombres.textContent = "";
    amigoSecreto.textContent = "";
    btnChk();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Juego Reiniciado!",
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,   
        backdrop: 'static',
        scrollbarPadding: false       
    });
}

nombre.addEventListener('input', function () {
    let value = this.value;
    if (value.length > 0) {
        this.value = value.charAt(0).toUpperCase() + value.slice(1);
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        agregarAmigo();
    }
});

function btnChk () {
    if (nombres.length < 2){
        btnSortear.setAttribute('disabled', '');
    } else {
        btnSortear.removeAttribute('disabled');
    }    
}

window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.btnReset = btnReset;
window.btnChk = btnChk;

})();