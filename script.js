
const botonAgregar = document.getElementById("agregarNombre");
const nombreInput = document.getElementById("nombreInput");
const listaNombres = document.getElementById("listaNombres");
const botonReiniciar = document.getElementById("reiniciar");
const botonStart = document.getElementById("start");
const elementosElegidos = document.getElementById("elementosElegidos");
const botonBorrarTodo = document.getElementById("borrarTodo");


const nombres = [];


const elementosElegidosLista = [];


botonAgregar.addEventListener("click", function () {
    const nombre = nombreInput.value;


    if (nombre.trim() !== "" && !nombres.includes(nombre)) {

        nombres.push(nombre);


        nombreInput.value = "";


        mostrarNombres();
    } else if (nombres.includes(nombre)) {
        alert("El nombre ya existe en la lista.");
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
});


botonReiniciar.addEventListener("click", function () {

    elementosElegidosLista.forEach(function (elemento) {
        nombres.push(elemento);
    });
    elementosElegidosLista.length = 0;

    mostrarNombres();
    mostrarElementosElegidos();
});

botonStart.addEventListener("click", function () {
    if (nombres.length > 0) {
        const nombreAleatorioIndex = Math.floor(Math.random() * nombres.length);
        const nombreAleatorioElegido = nombres[nombreAleatorioIndex];

        elementosElegidosLista.push(nombreAleatorioElegido);
        mostrarElementosElegidos();

        nombres.splice(nombreAleatorioIndex, 1);

        mostrarNombres();
    } else {
        alert("La lista de nombres está vacía.");
    }
});

botonBorrarTodo.addEventListener("click", function () {
    nombres.length = 0;
    elementosElegidosLista.length = 0;

    mostrarNombres();
    mostrarElementosElegidos();
});

function mostrarNombres() {
    listaNombres.innerHTML = "";

    nombres.forEach(function (nombre) {
        const listItem = document.createElement("li");
        listItem.textContent = nombre;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "eliminar";
        deleteButton.addEventListener("click", function () {
            const nombreIndex = nombres.indexOf(nombre);
            nombres.splice(nombreIndex, 1);
            mostrarNombres(); // Actualizar la lista
        });

        listItem.appendChild(deleteButton);
        listaNombres.appendChild(listItem);
    });
}




function mostrarElementosElegidos() {
    elementosElegidos.innerHTML = "";

    elementosElegidosLista.forEach(function (elemento) {
        const listItem = document.createElement("li");
        listItem.textContent = elemento;
        elementosElegidos.appendChild(listItem);
    });
}