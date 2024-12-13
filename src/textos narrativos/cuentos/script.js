let storyQuestions = [];

// Función para cargar los datos del cuento
async function loadStory() {
    try {
        // Cargar datos del cuento
        const storyResponse = await fetch('content/cuentos.json');
        const stories = await storyResponse.json();
        
        // Cargar preguntas
        const questionsResponse = await fetch('content/preguntas-cuentos.json');
        const questions = await questionsResponse.json();
        
        // Seleccionar el primer cuento (id 1)
        const story = stories.find(s => s.id === 1);
        storyQuestions = questions['1']; // Guardar las preguntas globalmente
        
        // Actualizar elementos del HTML con los datos del cuento
        document.getElementById('story-title').textContent = story.title;
        document.getElementById('story-type').textContent = story.type;
        document.getElementById('story-audio').src = story.audio;
        document.getElementById('story-content').textContent = story.text;
        document.getElementById('story-image').src = story.image;
        
        // Mostrar todas las preguntas
        showAllQuestions();
        
    } catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

// Función para mostrar todas las preguntas
function showAllQuestions() {
    const questionsContainer = document.querySelector('.questions');

    
    // Crear lista de preguntas
    const questionsList = document.createElement('div');
    questionsList.className = 'questions-list';
    
    storyQuestions.forEach((question, index) => {
        // Crear contenedor para cada pregunta
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-item';
        
        // Añadir texto de la pregunta
        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionContainer.appendChild(questionText);
        
        // Crear contenedor para las opciones
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        
        // Mezclar respuestas
        const answers = [
            { text: question.incorrect1, correct: false },
            { text: question.correct, correct: true },
            { text: question.incorrect2, correct: false }
        ];
        shuffleArray(answers);
        
        // Crear botones de opciones
        answers.forEach((answer) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = answer.text;
            optionButton.className = 'option-btn';
            
            // Añadir evento de clic
            optionButton.addEventListener('click', () => {
                checkAnswer(answer.text, question.correct, optionButton);
            });
            
            optionsContainer.appendChild(optionButton);
        });
        
        // Añadir contenedor de opciones a la pregunta
        questionContainer.appendChild(optionsContainer);
        
        // Añadir pregunta a la lista
        questionsList.appendChild(questionContainer);
    });
    
    // Añadir lista de preguntas al contenedor
    questionsContainer.appendChild(questionsList);
}

// Función para verificar la respuesta
function checkAnswer(selectedAnswer, correctAnswer, button) {
    const buttons = button.parentElement.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';
        }
    });
    
    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = 'green';
        button.style.color = 'white';
        
    } else {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        
    }
}

// Función para mezclar array (barajar respuestas)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Cargar los datos cuando la página se carga
window.onload = loadStory;