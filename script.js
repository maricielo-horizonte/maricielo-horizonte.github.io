const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const servicio = document.getElementById("servicio").value;

    const partesNombre = nombre.trim().split(/\s+/);

    if (nombre.trim().split(/\s+/).length < 3) {
    mensaje.textContent = "Escribe tu nombre y tus dos apellidos.";
    mensaje.style.color = "#b42318";
    return;
    }

    if (correo === "" || servicio === "") {
        mensaje.textContent = "Completa todos los campos del formulario.";
        mensaje.style.color = "#b42318";
        return;
    }

    if (formulario.checkValidity() === false) {
        formulario.reportValidity();
        return;
    }

    mensaje.textContent =
        "¡Gracias, " + nombre + "! Tu solicitud de información se registró en esta demostración.";

    mensaje.style.color = "#176b45";

    console.log("Método del formulario: POST");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Servicio elegido:", servicio);
});

// Interacción para cambiar el texto de bienvenida
const botonTexto = document.getElementById("btnTexto");
const textoBienvenida = document.getElementById("textoBienvenida");

if (botonTexto && textoBienvenida) {
    botonTexto.addEventListener("click", function () {
        if (textoBienvenida.textContent === "Bienvenido al Instituto Técnico Horizonte") {
            textoBienvenida.textContent = "¡Construye tu futuro con nosotros!";
        } else {
            textoBienvenida.textContent = "Bienvenido al Instituto Técnico Horizonte";
        }
    });
}

// Cambiar el color del título
const botonColor = document.getElementById("btnColor");
const titulo = document.querySelector("#inicio h1");

if (botonColor && titulo) {
    botonColor.addEventListener("click", function () {
        titulo.classList.toggle("titulo-alternativo");
    });
}

// Abrir y cerrar preguntas frecuentes
const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function (pregunta) {
    pregunta.addEventListener("click", function () {
        const respuesta = pregunta.nextElementSibling;

        if (respuesta.style.display === "block") {
            respuesta.style.display = "none";
        } else {
            respuesta.style.display = "block";
        }
    });
});

/* Mostrar y ocultar información de las carreras */
const botonesCarrera = document.querySelectorAll(".btn-mas");

botonesCarrera.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const carrera = boton.dataset.carrera;
        const detalle = document.getElementById("detalle-" + carrera);

        if (detalle) {
            detalle.hidden = !detalle.hidden;

            if (detalle.hidden) {
                boton.textContent = "Conocer más";
            } else {
                boton.textContent = "Mostrar menos";
            }
        }
    });
});

/* Giro de las tarjetas de ¿Por qué elegirnos? */
const tarjetasGiro = document.querySelectorAll(".tarjeta-giro");

tarjetasGiro.forEach(function (tarjeta) {
    tarjeta.addEventListener("click", function () {
        tarjeta.classList.toggle("girada");

        const girada = tarjeta.classList.contains("girada");
        tarjeta.setAttribute("aria-pressed", girada);
    });
});