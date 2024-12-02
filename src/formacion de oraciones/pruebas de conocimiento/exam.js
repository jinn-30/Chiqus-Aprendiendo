let storyQuestions = []; // Variable global para almacenar las preguntas
let countCorrect = 0; // Variable global para contar las respuestas correctas
const windowModal = document.getElementById('window-modal');
const closeModal = document.getElementById('close');
const textModal = document.getElementById('text');

async function loadQuestions() {
    try {
        // Cargar preguntas
        const questionsResponse = await fetch('content/preguntas.json');
        const questions = await questionsResponse.json();

        // Filtrar solo las preguntas que tienen contenido
        storyQuestions = questions.filter(question => question.question !== "");
        
        showAllQuestions();
    } catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

// Función para mostrar todas las preguntas
function showAllQuestions() {
    const questionsContainer = document.querySelector('.questions-container');
    
    // Limpiar contenedor antes de agregar preguntas
    questionsContainer.innerHTML = '';
    
    const question = document.createElement('h3');
    question.textContent = "Responde las preguntas correctamente";
    question.className = 'question'
    questionsContainer.appendChild(question)
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
    const totalQuestions = storyQuestions.length;
    
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
        countCorrect++;
    } else {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
    }

    // Verificar si se han respondido todas las preguntas
    const answeredQuestions = document.querySelectorAll('.option-btn:disabled').length / 3;
    
    if (answeredQuestions === totalQuestions) {
        // Calcular calificación
        const grade = Math.round((countCorrect / totalQuestions) * 5);
        
        // Condición para mensajes diferentes
        if (countCorrect <= 3) {
            textModal.textContent = `Necesitas mejorar. Has obtenido una calificación de: ${grade}.0 ¡Sigue practicando!`;
        } else {
            textModal.textContent = `Felicidades, has obtenido una calificación de: ${grade}.0`;
        }
        
        windowModal.style.display = "flex";
        windowModal.showModal();
    }
}
closeModal.addEventListener('click', ()=>{
    windowModal.close();
    windowModal.style.display = "none";
})
// Función para mezclar array (barajar respuestas)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Cargar los datos cuando la página se carga
window.onload = loadQuestions;