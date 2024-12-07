let textos; // Para almacenar los textos del JSON
let puntos = 0; // Puntaje acumulado
let usados = []; // Índices de textos ya usados
    const textoElement = document.getElementById('texto');
    const imagenesContainer = document.getElementById('imagenes');
    const recuadro = document.getElementById('recuadro')
    const recuadros = document.querySelectorAll('.recuadro');
    const mensaje = document.getElementById('mensaje')
    const btn = document.getElementById('validar-btn');
    const puntaje = document.getElementById('puntaje')
    const container = document.getElementById('container')
    const enunciado = document.getElementById('enunciado')

fetch('content/textos.json')
    .then(response => response.json())
    .then(data => {
        textos = data;
        cargarTextoAleatorio();
    });

function cargarTextoAleatorio() {
    
    if (usados.length === textos.length) {
        finalizarJuego();
        return;
    }

    // Seleccionar un texto aleatorio que no se haya usado
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * textos.length);
    } while (usados.includes(randomIndex));

    usados.push(randomIndex); // Registrar el texto como usado
    const data = textos[randomIndex];

    textoElement.textContent = data.texto;

    // Limpiar contenedores
    imagenesContainer.innerHTML = '';
    recuadros.forEach(recuadro => recuadro.innerHTML = '');

    // Cargar imágenes desordenadas
    const imagenes = [
        { src: data.imagen1, index: 1 },
        { src: data.imagen2, index: 2 },
        { src: data.imagen3, index: 3 },
        { src: data.imagen4, index: 4 }
    ];
    const desordenadas = imagenes.sort(() => Math.random() - 0.5);

    desordenadas.forEach(imagen => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('imagen');
        imgElement.setAttribute('draggable', true);
        imgElement.dataset.index = imagen.index;

        const img = document.createElement('img');
        img.src = imagen.src;

        imgElement.appendChild(img);
        imagenesContainer.appendChild(imgElement);

        imgElement.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', imgElement.dataset.index);
        });
    });

    recuadros.forEach(recuadro => {
        recuadro.addEventListener('dragover', e => e.preventDefault());
        recuadro.addEventListener('drop', e => {
            e.preventDefault();
            const index = e.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`.imagen[data-index="${index}"]`);

            if (!recuadro.hasChildNodes()) {
                recuadro.appendChild(draggedElement);
            }
        });
    });
}

document.getElementById('validar-btn').addEventListener('click', () => {
    const recuadros = document.querySelectorAll('.recuadro');
    let isCorrect = true;

    recuadros.forEach(recuadro => {
        const child = recuadro.firstChild;
        if (!child || recuadro.dataset.index !== child.dataset.index) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        puntos++;
        console.log(puntos)
        mensaje.textContent = `¡Correcto! Has ganado un punto.`;
        mensaje.style.color = "#4CAF50"
    } else {
        mensaje.textContent = `El orden no es correcto. Intenta con el siguiente texto.`;
        mensaje.style.color = "#f44336"
    }
    setTimeout(()=>{
        cargarTextoAleatorio();
        mensaje.textContent = '';
    },2000)
});

function finalizarJuego() {
    textoElement.style.display = 'none';
    imagenesContainer.style.display = 'none';
    recuadro.style.display = 'none';
    btn.style.display = 'none';
    container.style.height = '400px'
    enunciado.style.marginBottom = '120px'
    enunciado.textContent = (`Gracias por jugar`);
    puntaje.textContent = (`¡Juego terminado! Tu puntaje total es: ${puntos}`);
}
