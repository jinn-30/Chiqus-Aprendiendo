let currentSet = 0;
let wordSets = []; // Aquí se cargarán los datos del JSON
let availableSynonyms = [];
let availableAntonyms = [];

const wordsContainer = document.querySelector('.words');
const dropzones = document.querySelectorAll('.dropzone');
const feedback = document.getElementById('feedback');
const validateBtn = document.getElementById('validateBtn');

// Función para cargar el archivo JSON
async function loadWordSets() {
  try {
    const response = await fetch('content/palabras.json'); // Asegúrate de que esta ruta sea válida
    if (!response.ok) throw new Error('Error al cargar el archivo JSON');
    wordSets = await response.json();
    availableSynonyms = [...wordSets[currentSet].sinonimos]; // Inicializa las listas disponibles
    availableAntonyms = [...wordSets[currentSet].antonimos];
    loadSet(); // Cargar el primer conjunto
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    feedback.textContent = 'Error al cargar los datos.';
    feedback.style.color = 'red';
  }
}

// Función para seleccionar aleatoriamente palabras
function selectRandomWords(array, count) {
  const selected = [];
  for (let i = 0; i < count; i++) {
    if (array.length === 0) break; // Detener si ya no hay palabras disponibles
    const randomIndex = Math.floor(Math.random() * array.length);
    selected.push(array.splice(randomIndex, 1)[0]); // Remover y agregar a seleccionados
  }
  return selected;
}

// Función para cargar un conjunto dinámico
function loadSet() {
  wordsContainer.innerHTML = '';

  // Seleccionar 4 sinónimos y 4 antónimos aleatorios
  if (availableSynonyms.length < 4) availableSynonyms = [...wordSets[currentSet].sinonimos];
  if (availableAntonyms.length < 4) availableAntonyms = [...wordSets[currentSet].antonimos];

  const selectedSynonyms = selectRandomWords(availableSynonyms, 4);
  const selectedAntonyms = selectRandomWords(availableAntonyms, 4);

  const words = [...selectedSynonyms, ...selectedAntonyms].sort(() => Math.random() - 0.5);

  words.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.setAttribute('draggable', 'true');
    wordElement.innerHTML = `<img src="${word.img}" alt="${word.text}"><span>${word.text}</span>`;
    wordsContainer.appendChild(wordElement);

    wordElement.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text', word.text);
      event.dataTransfer.setData('img', word.img);
    });
  });

  dropzones.forEach(zone => {
    zone.innerHTML = ''; // Limpiar las zonas de arrastre
  });
}

// Lógica de validación y drag & drop permanece igual

dropzones.forEach(zone => {
  zone.addEventListener('dragover', event => {
    event.preventDefault();
  });

  zone.addEventListener('drop', event => {
    event.preventDefault();
    const draggedWord = event.dataTransfer.getData('text');
    const draggedImg = event.dataTransfer.getData('img');

    // Crear el elemento arrastrado para agregarlo a la zona
    const draggedElement = document.createElement('div');
    draggedElement.classList.add('word');
    draggedElement.innerHTML = `<img src="${draggedImg}" alt="${draggedWord}"><span>${draggedWord}</span>`;
    event.target.appendChild(draggedElement);

    // Ocultar el elemento original de la lista de palabras
    const wordElement = Array.from(wordsContainer.children).find(
      el => el.querySelector('span').textContent === draggedWord
    );
    if (wordElement) {
      wordElement.style.display = 'none'; // Lo ocultamos visualmente
    }
  });
});

function checkCompletion() {
  const sinonimosWords = Array.from(document.querySelectorAll('#sinonimos .word'));
  const antonimosWords = Array.from(document.querySelectorAll('#antonimos .word'));

  // Revisar si las palabras están en las zonas correctas
  let allCorrect = true;

  sinonimosWords.forEach(word => {
    const wordText = word.querySelector('span').textContent;
    const isCorrect = wordSets[currentSet].sinonimos.some(s => s.text === wordText);
    if (isCorrect) {
      word.style.border = '2px solid green'; // Visualmente correcto
    } else {
      word.style.border = '2px solid red'; // Visualmente incorrecto
      allCorrect = false;
    }
  });

  antonimosWords.forEach(word => {
    const wordText = word.querySelector('span').textContent;
    const isCorrect = wordSets[currentSet].antonimos.some(a => a.text === wordText);
    if (isCorrect) {
      word.style.border = '2px solid green'; // Visualmente correcto
    } else {
      word.style.border = '2px solid red'; // Visualmente incorrecto
      allCorrect = false;
    }
  });

  if (allCorrect) {
    feedback.textContent = '¡Todo correcto! 🎉';
    feedback.style.color = 'green';
    setTimeout(() => {
      loadSet(); // Cargar un nuevo conjunto
      feedback.textContent = '';
    }, 1500);
  } else {
    feedback.textContent = 'Hay errores, revisa las palabras marcadas en rojo. ❌';
    feedback.style.color = 'red';
    setTimeout(() => {
      loadSet(); // Cargar un nuevo conjunto
      feedback.textContent = '';
    }, 1500);
  }
}

validateBtn.addEventListener('click', checkCompletion);

// Llama a la función para cargar los datos iniciales
loadWordSets();
