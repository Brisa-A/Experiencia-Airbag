const preguntas = [
    {
        pregunta: "¿Cómo se llaman los tres hermanos de Airbag?",
        respuestas: [
            "Patricio, Guido y Gastón",
            "Patricio, Juan y Gastón",
            "Guido, Lucas y Patricio",
            "Gastón, Martín y Guido"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué instrumento toca principalmente Patricio Sardelli?",
        respuestas: [
            "Batería",
            "Guitarra",
            "Teclado",
            "Saxofón"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué instrumento toca principalmente Guido Sardelli?",
        respuestas: [
            "Batería",
            "Bajo",
            "Guitarra",
            "Teclado"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué instrumento toca principalmente Gastón Sardelli?",
        respuestas: [
            "Bajo",
            "Guitarra",
            "Batería",
            "Teclado"
        ],
        correcta: 0
    }
];


let preguntaActual = 0;
let puntaje = 0;

const botonComenzar = document.getElementById("comenzar-quiz");
const contenedorPregunta = document.getElementById("quiz-pregunta");
const introduccionQuiz = document.querySelector(".quiz-intro");


botonComenzar.addEventListener("click", comenzarQuiz);

/*
function comenzarQuiz() {

    preguntaActual = 0;
    puntaje = 0;

    // Ocultar la presentación
    introduccionQuiz.style.display = "none";

    // Mostrar las preguntas
  contenedorPregunta.style.display = "flex";
contenedorPregunta.style.flexDirection = "column";

    // Mostrar la primera pregunta
    mostrarPregunta();
}*/
function comenzarQuiz() {

    preguntaActual = 0;
    puntaje = 0;

    // Mostrar las preguntas
    contenedorPregunta.style.display = "flex";

    // Mostrar la primera pregunta
    mostrarPregunta();
}

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];
    const progreso = ((preguntaActual + 1) / preguntas.length) * 100;

document.getElementById("barra-progreso").style.width =
    `${progreso}%`;

    document.getElementById("numero-pregunta").textContent =
        `Pregunta ${String(preguntaActual + 1).padStart(2, "0")}`;

    document.getElementById("texto-pregunta").textContent =
        pregunta.pregunta;

    const respuestas = document.querySelectorAll(".respuesta");

    /*respuestas.forEach((boton, indice) => {

        boton.textContent = pregunta.respuestas[indice];

        boton.onclick = () => comprobarRespuesta(indice);

        boton.style.pointerEvents = "auto";
        boton.style.opacity = "1";
    });*/
    respuestas.forEach((boton, indice) => {

    boton.textContent = pregunta.respuestas[indice];

    boton.classList.remove("correcta");
    boton.classList.remove("incorrecta");

    boton.onclick = () => comprobarRespuesta(indice);

    boton.style.pointerEvents = "auto";
    boton.style.opacity = "1";
});
}


/*function comprobarRespuesta(indice) {

    const pregunta = preguntas[preguntaActual];

    if (indice === pregunta.correcta) {
        puntaje++;
    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {

        setTimeout(() => {
            mostrarPregunta();
        }, 500);

    } else {

        mostrarResultado();
    }
} */

    function comprobarRespuesta(indice) {

    const pregunta = preguntas[preguntaActual];
    const botones = document.querySelectorAll(".respuesta");

    botones.forEach(boton => {
        boton.style.pointerEvents = "none";
    });

    if (indice === pregunta.correcta) {

        botones[indice].classList.add("correcta");
        puntaje++;

    } else {

        botones[indice].classList.add("incorrecta");
        botones[pregunta.correcta].classList.add("correcta");

    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {

        setTimeout(() => {
            mostrarPregunta();
        }, 1000);

    } else {

        setTimeout(() => {
            mostrarResultado();
        }, 1000);
    }
}


/*function mostrarResultado() {

    contenedorPregunta.innerHTML = `
        <span>RESULTADO</span>

        <h3>
            Terminaste el desafío.
        </h3>

        <p>
            Respondiste correctamente
            ${puntaje} de ${preguntas.length} preguntas.
        </p>

        <button id="reiniciar-juego">
            Jugar nuevamente
        </button>
    `;

    document
        .getElementById("reiniciar-juego")
        .addEventListener("click", () => {
            location.reload();
        });

}*/

function mostrarResultado() {

    let mensaje;

    if (puntaje === preguntas.length) {
        mensaje = "Conocés el universo Airbag de memoria.";
    } else if (puntaje === 3) {
        mensaje = "Muy cerca. Se nota que sos fan.";
    } else if (puntaje === 2) {
        mensaje = "Hay que volver a escuchar algunos clásicos.";
    } else {
        mensaje = "El viaje recién comienza.";
    }

    contenedorPregunta.innerHTML = `
        <div class="resultado">

            <span>TU RESULTADO</span>

            <div class="puntaje">
                ${puntaje}<small>/${preguntas.length}</small>
            </div>

            <h3>
                ${mensaje}
            </h3>

            <p>
                Gracias por participar del Airbag Quiz.
            </p>

            <button id="reiniciar-quiz">
                Volver a jugar
            </button>

        </div>
    `;

    document
        .getElementById("reiniciar-quiz")
        .addEventListener("click", () => {
            location.reload();
        });
}

const formulario = document.getElementById("form-experiencia");
const experienciasPublicadas = document.getElementById("experiencias-publicadas");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const cancion = document.getElementById("cancion").value;
    const mensaje = document.getElementById("mensaje").value;

    /*const nuevaExperiencia = document.createElement("div");

    nuevaExperiencia.classList.add("experiencia-card");

    nuevaExperiencia.innerHTML = `
        <span>${nombre}</span>

        <h4>Una historia que queda</h4>

        <p class="cancion">
            Canción favorita: ${cancion}
        </p>

        <p>
            ${mensaje}
        </p>
    `;

    experienciasPublicadas.appendChild(nuevaExperiencia);

    formulario.reset();*/
    const nuevaExperiencia = document.createElement("div");
nuevaExperiencia.classList.add("experiencia-card");

const nombreElemento = document.createElement("span");
nombreElemento.textContent = nombre;

const tituloElemento = document.createElement("h4");
tituloElemento.textContent = "Una historia que queda";

const cancionElemento = document.createElement("p");
cancionElemento.classList.add("cancion");
cancionElemento.textContent = `Canción favorita: ${cancion}`;

const mensajeElemento = document.createElement("p");
mensajeElemento.textContent = mensaje;

nuevaExperiencia.appendChild(nombreElemento);
nuevaExperiencia.appendChild(tituloElemento);
nuevaExperiencia.appendChild(cancionElemento);
nuevaExperiencia.appendChild(mensajeElemento);

experienciasPublicadas.appendChild(nuevaExperiencia);

formulario.reset();
});

// Menú mobile

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("menu-abierto");
});
// Cerrar menú al seleccionar una sección

const enlacesMenu = document.querySelectorAll("nav a");

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("menu-abierto");
    });
});
