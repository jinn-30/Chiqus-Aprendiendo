const oraciones = [
    {
        texto: "El joven explorador decidió aventurarse en la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> desconocida. Con su mochila llena de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> esenciales y su brújula, empezó a caminar a través del bosque denso. En su camino, escuchó los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de los pájaros y observó la luz del sol filtrarse entre las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de los árboles.",
        palabrasCorrectas: ['selva', 'provisiones', 'cantos', 'ramas'],
        opciones: ['selva', 'mar', 'provisiones', 'ramas', 'cantos', 'alimentos', 'noche']
    },
    {
        texto: "Durante el festival anual en el pueblo, los habitantes se reúnen en la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> principal para celebrar con música, <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> tradicionales y muchos juegos. Las personas bailan alegremente mientras disfrutan de la comida típica y los niños corren felices con sus <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> llenos de dulces.",
        palabrasCorrectas: ['plaza', 'bailes', 'bolsillos'],
        opciones: ['plaza', 'parque', 'ciudad', 'bolsillos', 'cielo', 'juegos', 'bailes']
    },
    {
        texto: "El granjero trabaja desde el amanecer hasta el atardecer en su <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, cuidando de sus cultivos y sus <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>. Cada mañana, riega las plantas y verifica el estado de la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> para asegurarse de que todo crezca sano y fuerte. Después, alimenta a los animales y prepara <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> para vender en el mercado.",
        palabrasCorrectas: ['granja', 'animales', 'tierra', 'productos'],
        opciones: ['granja', 'productos', 'cosechas', 'animales', 'aire', 'tierra', 'herramientas']
    },
    {
        texto: "El profesor de ciencias llevó a sus alumnos al laboratorio para realizar un experimento sobre <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>. Con sus batas blancas y gafas de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, los estudiantes mezclaron varios líquidos en <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de vidrio y observaron cómo reaccionaban. Después de un rato, todos escribieron sus <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> en sus cuadernos.",
        palabrasCorrectas: ['química', 'protección', 'tubos', 'observaciones'],
        opciones: ['cuadernos', 'laboratorio', 'química', 'protección', 'observaciones', 'tubos', 'reacciones']
    },
    {
        texto: "En el invierno, los días son más <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y las noches son <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>. La gente se abriga con bufandas, guantes y gorros para protegerse del <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>. Las chimeneas comienzan a arder, y muchos prefieren quedarse en casa, disfrutando de una <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> caliente y un buen libro.",
        palabrasCorrectas: ['cortos', 'largas', 'frío', 'bebida'],
        opciones: ['largas', 'caliente', 'bebida', 'verano', 'frío', 'cortos', 'bufandas']
    },
    {
        texto: "En una lejana galaxia, los astronautas encontraron un planeta cubierto de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> cristalinas y montañas gigantes. El cielo tenía un color <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y en el aire flotaban pequeñas partículas de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>. Los científicos tomaron muestras para investigar y, al regresar a la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, analizaron los datos emocionados.",
        palabrasCorrectas: ['aguas', 'púrpura', 'polvo', 'nave'],
        opciones: ['polvo', 'aguas', 'montañas', 'púrpura', 'nave', 'galaxia', 'planetas']
    },
    {
        texto: "Los exploradores submarinos descendieron al fondo del <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, donde encontraron extrañas especies marinas y corales de colores. Uno de ellos llevó una <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> especial para iluminar el lugar y observar mejor a los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que nadaban cerca de ellos.",
        palabrasCorrectas: ['océano', 'linterna', 'peces'],
        opciones: ['linterna', 'océano', 'peces', 'animales', 'roca', 'fondo', 'alga']
    },
    {
        texto: "En el zoológico, los visitantes observan atentamente al <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> gigante, que descansa bajo la sombra de un gran árbol. Los niños están emocionados de ver a las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> alimentándose y de escuchar los rugidos de los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> en la distancia.",
        palabrasCorrectas: ['elefante', 'jirafas', 'leones'],
        opciones: ['elefante', 'leones', 'pájaros', 'jirafas', 'sombras', 'árboles']
    },
    {
        texto: "En el teatro, la función comenzó cuando las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> se apagaron y el telón se levantó. Los actores representaron una obra sobre un héroe que viaja por <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> lejanos y enfrenta desafíos para salvar su <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>.",
        palabrasCorrectas: ['luces', 'reinos', 'hogar'],
        opciones: ['actores', 'luces', 'reinos', 'hogar', 'público', 'función']
    },
    {
        texto: "Cada primavera, el jardín se llena de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de diferentes colores. Las abejas vuelan de una flor a otra recolectando <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> para llevar a la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, donde producen miel.",
        palabrasCorrectas: ['flores', 'polen', 'colmena'],
        opciones: ['flores', 'polen', 'colmena', 'abejas', 'primavera', 'miel']
    },
    {
        texto: "En el museo, los visitantes admiran una antigua <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de oro que perteneció a un faraón egipcio. Las paredes están cubiertas de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> detalladas, y los arqueólogos estudian los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> encontrados en el sitio de excavación.",
        palabrasCorrectas: ['corona', 'pinturas', 'artefactos'],
        opciones: ['corona', 'pinturas', 'artefactos', 'faraones', 'antiguo', 'detalles']
    },
    {
        texto: "El científico observó detenidamente el microscopio mientras analizaba una muestra de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> bajo alta magnificación. Sabía que, con el equipo adecuado, podría descubrir nuevos <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que cambiarían nuestra comprensión de la biología. A medida que avanzaba en su investigación, comenzó a formular teorías sobre el <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y las posibles aplicaciones en la medicina.",
        palabrasCorrectas: ['células', 'especies', 'genoma'],
        opciones: ['células', 'ciencia', 'diseños', 'especies', 'genoma', 'datos', 'muestras']
    },
    {
        texto: "La arqueóloga recorrió las antiguas ruinas de un templo olvidado, observando los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> en las paredes que aún conservaban colores vibrantes. Mientras exploraba, encontró un pequeño <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> con símbolos misteriosos. Ella pensó que podría ser la clave para descifrar la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de una civilización que había desaparecido hacía siglos.",
        palabrasCorrectas: ['frescos', 'fragmento', 'historia'],
        opciones: ['frescos', 'piedra', 'fragmento', 'historia', 'arte', 'cultura', 'reliquias']
    },
    {
        texto: "El poeta, sentado frente al mar, escribió las primeras líneas de un poema que hablaría sobre la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> del universo. En su mente, las palabras fluían como las olas que golpeaban la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de la playa, mientras pensaba en los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que nos conectan a todos, más allá de las fronteras y diferencias.",
        palabrasCorrectas: ['misterio', 'orillas', 'emociones'],
        opciones: ['misterio', 'fuerza', 'orillas', 'almas', 'emociones', 'agua', 'universo']
    },
    {
        texto: "El arquitecto presentó sus planos para el nuevo <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> cultural de la ciudad. El edificio estaría compuesto por diferentes <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y áreas interactivas para que las personas pudieran aprender y disfrutar de la historia. Además, planeaba integrar elementos naturales como el <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> para crear un espacio armonioso.",
        palabrasCorrectas: ['centro', 'espacios', 'agua', 'jardines'],
        opciones: ['centro', 'museo', 'agua', 'jardines', 'escuelas', 'calles', 'espacios']
    },
    {
        texto: "En la estación espacial, los astronautas realizaron una serie de experimentos sobre cómo afecta la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> en el crecimiento de las plantas. Se prepararon para vivir en un ambiente <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> durante varios meses, lo que les permitiría estudiar cómo la gravedad <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de la Tierra influye en los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y los cultivos.",
        palabrasCorrectas: ['gravedad', 'aislado', 'efectos', 'semillas'],
        opciones: ['gravedad', 'poca', 'aislado', 'efectos', 'espacio', 'semillas', 'cosechas']
    },
    {
        texto: "Los pintores se reunieron en el estudio para trabajar en una obra colectiva que representaría la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> cultural de la región. Usaron una paleta de colores vibrantes que reflejaban las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y la diversidad de los paisajes. Durante días, trabajaron juntos, combinando diferentes técnicas y estilos para crear una <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que impactara a quienes la vieran.",
        palabrasCorrectas: ['identidad', 'montañas', 'obra'],
        opciones: ['identidad', 'proyecto', 'montañas', 'paisaje', 'obra', 'pintura', 'familia']
    },
    {
        texto: "En su viaje al Amazonas, el biólogo observó a los animales que vivían en la selva y a las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que les servían de hogar. Estudió el comportamiento de las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que se adaptaban perfectamente a ese entorno selvático. Al regresar, escribió un libro sobre la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de este ecosistema único.",
        palabrasCorrectas: ['especies', 'aves', 'vegetación'],
        opciones: ['especies', 'flores', 'aves', 'animales', 'vegetación', 'ríos', 'bosques']
    },
    {
        texto: "El novelista, después de varios años de trabajo, terminó su última <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, un relato épico que abarcaba varias generaciones. En el libro, los personajes viajaban por mundos lejanos, enfrentándose a <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y desafíos. Al final, el autor transmitió un mensaje sobre la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> humana y la importancia de la unidad en tiempos de crisis.",
        palabrasCorrectas: ['novela', 'aventuras', 'condición'],
        opciones: ['novela', 'historias', 'aventuras', 'cosas', 'condición', 'universo', 'lucha']
    },
    {
        texto: "El director de la escuela organizó una reunión con los padres para discutir la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> académica de los estudiantes. Durante la reunión, se habló sobre las nuevas <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que se implementarían para mejorar los resultados. Además, se hizo énfasis en la importancia de la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> familiar en el proceso educativo.",
        palabrasCorrectas: ['situación', 'estrategias', 'colaboración'],
        opciones: ['situación', 'estrategias', 'trabajo', 'educación', 'colaboración', 'resultados', 'plan']
    },
    {
        texto: "El geólogo estudió el terreno en busca de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> minerales, que podrían ser la clave para la industria energética del futuro. Con su equipo de investigación, recorrió las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y montañas, analizando los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> del suelo. Finalmente, presentaron sus hallazgos a la comunidad científica.",
        palabrasCorrectas: ['nuevos', 'rocas', 'muestras'],
        opciones: ['nuevos', 'rocas', 'oro', 'muestras', 'suelos', 'minerales', 'piedras']
    },
    {
        texto: "En el laboratorio, los científicos están realizando un experimento para descubrir los efectos del <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> en el comportamiento de los animales. Utilizan diferentes <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> para medir la respuesta a varios estímulos. La investigación podría aportar valiosa información sobre cómo los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> afectan la salud mental de los seres vivos.",
        palabrasCorrectas: ['estrés', 'métodos', 'factores'],
        opciones: ['estrés', 'comportamientos', 'métodos', 'factores', 'reacciones', 'entornos', 'resultados']
    },
    {
        texto: "El arquitecto diseñó un <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que fusionaba la modernidad con la tradición. Usó materiales locales para las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, y las paredes se decoraron con <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que representaban la historia de la ciudad.",
        palabrasCorrectas: ['edificio', 'estructuras', 'murales'],
        opciones: ['edificio', 'terrazas', 'estructuras', 'flores', 'murales', 'ventanas', 'madera']
    },
    {
        texto: "La profesora de historia explicó a sus alumnos la importancia de estudiar los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> antiguos para comprender el presente. Les enseñó sobre las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que dejaron huella en las civilizaciones y cómo esas <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> nos influyen en la actualidad.",
        palabrasCorrectas: ['documentos', 'civilizaciones', 'ideas'],
        opciones: ['documentos', 'pirámides', 'civilizaciones', 'teorías', 'ideas', 'pueblos', 'eventos']
    },
    {
        texto: "El chef preparó un menú especial que incluía ingredientes <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y frescos de la región. Entre los platos se encontraba un <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> relleno con mariscos y una salsa <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que encantó a todos los comensales.",
        palabrasCorrectas: ['orgánicos', 'platillo', 'exquisita'],
        opciones: ['orgánicos', 'preparados', 'platillo', 'postre', 'exquisita', 'sabrosa', 'comida']
    },
    {
        texto: "Los ingenieros diseñaron una nueva máquina que utiliza energía <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> para reducir el consumo de recursos. La máquina es capaz de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> más rápido que las versiones anteriores y tiene un menor impacto en el medio ambiente.",
        palabrasCorrectas: ['solar', 'trabajar', 'eficiencia'],
        opciones: ['solar', 'eléctrica', 'trabajar', 'eficiencia', 'contaminar', 'rendimiento', 'energía']
    },
    {
        texto: "El grupo de artistas se reunió para crear una exposición sobre la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> humana. Utilizaron diferentes formas de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span>, desde pinturas hasta esculturas, para representar las emociones y <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de la sociedad actual.",
        palabrasCorrectas: ['condición', 'arte', 'luchas'],
        opciones: ['condición', 'moda', 'arte', 'miradas', 'luchas', 'espacio', 'sentimientos']
    },
    {
        texto: "El equipo de fútbol entrenó durante semanas para prepararse para el campeonato. Sabían que tendrían que enfrentarse a equipos de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> nivel, por lo que entrenaron técnicas de <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> y resistencia física. El día del partido, el equipo mostró una gran <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> en el campo.",
        palabrasCorrectas: ['alto', 'defensa', 'determinación'],
        opciones: ['alto', 'estrategia', 'defensa', 'concentración', 'determinación', 'fuerza', 'trabajo']
    },
    {
        texto: "Los biólogos marinos están investigando los efectos del <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> humano sobre los ecosistemas marinos. Están analizando cómo la contaminación afecta a las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de los océanos y qué medidas tomar para proteger la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> marina.",
        palabrasCorrectas: ['impacto', 'especies', 'biodiversidad'],
        opciones: ['impacto', 'habitats', 'especies', 'agua', 'biodiversidad', 'mares', 'planeta']
    },
    {
        texto: "El periodista cubrió una historia sobre la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de los derechos humanos en varios países. Hizo un <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> de entrevistas con personas afectadas y describió en su artículo las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que muchos enfrentan por luchar por su libertad.",
        palabrasCorrectas: ['violación', 'investigación', 'dificultades'],
        opciones: ['violación', 'ayuda', 'investigación', 'noticia', 'dificultades', 'libertades', 'cosas']
    },
    {
        texto: "El ecologista visitó la selva tropical para estudiar cómo los <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> locales están protegiendo el bosque. Observó cómo las comunidades están trabajando para restaurar las <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> que han sido destruidas por la deforestación y promoviendo la <span class='blanco' ondrop='drop(event)' ondragover='allowDrop(event)'></span> sostenible.",
        palabrasCorrectas: ['pueblos', 'áreas', 'preservación'],
        opciones: ['pueblos', 'árboles', 'áreas', 'regiones', 'preservación', 'ecosistema', 'métodos']
    }
];


const contenedorPalabras = document.getElementById('palabras');
const parrafo = document.getElementById('parrafo');
const mensaje = document.getElementById('mensaje');
let oracionActual;

function generarOracion() {
    oracionActual = oraciones[Math.floor(Math.random() * oraciones.length)];
    parrafo.innerHTML = oracionActual.texto;

    contenedorPalabras.innerHTML = '';
    const opcionesMezcladas = oracionActual.opciones.sort(() => 0.5 - Math.random());
    opcionesMezcladas.forEach((palabra) => {
        const span = document.createElement('span');
        span.classList.add('palabra');
        span.setAttribute('draggable', 'true');
        span.textContent = palabra;
        span.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', palabra);
        });
        contenedorPalabras.appendChild(span);
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const palabra = event.dataTransfer.getData('text');
    if (event.target.textContent === "") {
        event.target.textContent = palabra;
        document.querySelectorAll('.palabra').forEach(span => {
            if (span.textContent === palabra) span.remove();
        });
    }
}

function validarOracion() {
    const espacios = document.querySelectorAll('.blanco');
    const seleccionadas = Array.from(espacios).map(espacio => espacio.textContent.trim());

    if (JSON.stringify(seleccionadas) === JSON.stringify(oracionActual.palabrasCorrectas)) {
        mensaje.textContent = "¡Correcto! Has completado la oración.";
        mensaje.style.color = "green";
        setTimeout(() => {
            mensaje.textContent = '';
            generarOracion();  // Cambia a una nueva oración si está correcta
        }, 2000);
    } else {
        mensaje.textContent = "Inténtalo de nuevo.";
        mensaje.style.color = "red";
        setTimeout(() => {
            mensaje.textContent = '';
            // Mantén la misma oración y limpia los espacios para intentar de nuevo
            espacios.forEach(espacio => espacio.textContent = '');
            generarPalabrasDisponibles();
        }, 2000);
    }
}

// Regenera las palabras en el contenedor
function generarPalabrasDisponibles() {
    contenedorPalabras.innerHTML = '';
    const opcionesMezcladas = oracionActual.opciones.sort(() => 0.5 - Math.random());
    opcionesMezcladas.forEach((palabra) => {
        const span = document.createElement('span');
        span.classList.add('palabra');
        span.setAttribute('draggable', 'true');
        span.textContent = palabra;
        span.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', palabra);
        });
        contenedorPalabras.appendChild(span);
    });
}

window.onload = generarOracion;

