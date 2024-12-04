 document.addEventListener("DOMContentLoaded", () => {
    const parrafo = document.getElementById("parrafo");
    const palabras = document.getElementById("palabras");
    const mensaje = document.getElementById("mensaje");

    // Lista de oraciones con sus partes
    const oraciones = [
        [
            { texto: "La niña", tipo: "sujeto" },
            { texto: "lee", tipo: "verbo" },
            { texto: "un libro", tipo: "predicado" }
        ],
        [
            { texto: "El perro", tipo: "sujeto" },
            { texto: "corre", tipo: "verbo" },
            { texto: "en el parque", tipo: "predicado" }
        ],
        [
            { texto: "Juan", tipo: "sujeto" },
            { texto: "estudia", tipo: "verbo" },
            { texto: "matemáticas", tipo: "predicado" }
        ],
        [
            { texto: "Mi madre", tipo: "sujeto" },
            { texto: "prepara", tipo: "verbo" },
            { texto: "la comida", tipo: "predicado" }
        ],
        [
            { texto: "El sol", tipo: "sujeto" },
            { texto: "brilla", tipo: "verbo" },
            { texto: "en el cielo", tipo: "predicado" }
        ],
        [
            { texto: "El gato", tipo: "sujeto" },
            { texto: "duerme", tipo: "verbo" },
            { texto: "en el sofá", tipo: "predicado" }
        ],
        [
            { texto: "Mi amigo", tipo: "sujeto" },
            { texto: "juega", tipo: "verbo" },
            { texto: "al fútbol", tipo: "predicado" }
        ],
        [
            { texto: "Los niños", tipo: "sujeto" },
            { texto: "dibujan", tipo: "verbo" },
            { texto: "paisajes", tipo: "predicado" }
        ],
        [
            { texto: "La profesora", tipo: "sujeto" },
            { texto: "explica", tipo: "verbo" },
            { texto: "la lección", tipo: "predicado" }
        ],
        [
            { texto: "El cartero", tipo: "sujeto" },
            { texto: "entrega", tipo: "verbo" },
            { texto: "las cartas", tipo: "predicado" }
        ],
        [
            { texto: "Mi abuelo", tipo: "sujeto" },
            { texto: "cultiva", tipo: "verbo" },
            { texto: "flores", tipo: "predicado" }
        ],
        [
            { texto: "El coche", tipo: "sujeto" },
            { texto: "avanza", tipo: "verbo" },
            { texto: "por la carretera", tipo: "predicado" }
        ],
        [
            { texto: "El pájaro", tipo: "sujeto" },
            { texto: "canta", tipo: "verbo" },
            { texto: "en la rama", tipo: "predicado" }
        ],
        [
            { texto: "La lluvia", tipo: "sujeto" },
            { texto: "cae", tipo: "verbo" },
            { texto: "sobre los campos", tipo: "predicado" }
        ],
        [
            { texto: "El médico", tipo: "sujeto" },
            { texto: "atiende", tipo: "verbo" },
            { texto: "a los pacientes", tipo: "predicado" }
        ],
        [
            { texto: "Las estrellas", tipo: "sujeto" },
            { texto: "brillan", tipo: "verbo" },
            { texto: "en la noche", tipo: "predicado" }
        ],
        [
            { texto: "Los estudiantes", tipo: "sujeto" },
            { texto: "resuelven", tipo: "verbo" },
            { texto: "los ejercicios", tipo: "predicado" }
        ],
        [
            { texto: "El tren", tipo: "sujeto" },
            { texto: "llega", tipo: "verbo" },
            { texto: "a la estación", tipo: "predicado" }
        ],
        [
            { texto: "El chef", tipo: "sujeto" },
            { texto: "cocina", tipo: "verbo" },
            { texto: "un platillo delicioso", tipo: "predicado" }
        ],
        [
            { texto: "La campana", tipo: "sujeto" },
            { texto: "suena", tipo: "verbo" },
            { texto: "en la iglesia", tipo: "predicado" }
        ]
    ];

    let oracionActual = randomOracion(); // Seleccionar una oración aleatoria

    function randomOracion() {
        return oraciones[Math.floor(Math.random() * oraciones.length)];
    }

    function mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function actualizarActividad() {
        parrafo.innerHTML = oracionActual
            .map((_, index) => `<span id="blank-${index}" class="blank">____</span>`)
            .join(" ");

        const palabrasArray = oracionActual.map(palabra => ({
            texto: palabra.texto,
            tipo: palabra.tipo
        }));

        mezclarArray(palabrasArray);

        palabras.innerHTML = palabrasArray
            .map(
                palabra =>
                    `<span class="palabra ${palabra.tipo}" draggable="true" data-tipo="${palabra.tipo}">
                        ${palabra.texto}
                    </span>`
            )
            .join("");

        const palabraElems = document.querySelectorAll(".palabra");
        palabraElems.forEach(palabra => {
            palabra.addEventListener("dragstart", event => {
                event.dataTransfer.setData("text/plain", event.target.textContent);
            });
        });

        const blanks = document.querySelectorAll(".blank");
        blanks.forEach((blank, index) => {
            blank.addEventListener("dragover", event => {
                event.preventDefault();
            });

            blank.addEventListener("drop", event => {
                const texto = event.dataTransfer.getData("text/plain");
                blank.textContent = texto;
                blank.classList.remove("correcto"); // Remover la clase correcto para permitir cambios
            });
        });
    }

    function mostrarMensaje(tipo) {
        mensaje.textContent =
            tipo === "correcto"
                ? "¡Muy bien! Respuesta correcta."
                : "¡Respuesta incorrecta! Intenta de nuevo.";
        mensaje.style.color = tipo === "correcto" ? "#4CAF50" : "#f44336";

        if (tipo === "correcto") {
            setTimeout(() => {
                oracionActual = randomOracion(); // Seleccionar nueva oración
                mensaje.textContent = ""; // Limpiar el mensaje
                actualizarActividad(); // Actualizar actividad
            }, 2000); // Esperar 2 segundos antes de cambiar
        }
    }

    function validarOracion() {
        const blanks = document.querySelectorAll(".blank");
        const completado = Array.from(blanks).every((blank, index) => 
            blank.textContent.trim() === oracionActual[index].texto // Compara el texto del blank con la palabra correcta
        );

        if (completado) {
            mostrarMensaje("correcto");
        } else {
            mostrarMensaje("incorrecto");
        }
    }

    const botonValidar = document.getElementById("boton-validar");
    botonValidar.addEventListener("click", validarOracion);

    // Inicializar la actividad
    actualizarActividad();
});
