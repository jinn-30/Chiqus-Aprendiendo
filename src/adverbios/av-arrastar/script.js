// Esperar a que el contenido esté cargado
window.addEventListener("DOMContentLoaded", () => {
    const adverbsContainer = document.getElementById("adverbsContainer");
    const dropzones = document.querySelectorAll(".dropzone");
    const validateButton = document.getElementById("validateButton");
    const resultMessage = document.getElementById("resultMessage");
  
    let totalAdverbs = 0; // Total de adverbios cargados
  
    // Cargar datos desde el archivo JSON
    fetch("content/adverbios.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item, index) => {
          // Crear tarjeta para cada adverbio
          const card = document.createElement("div");
          card.classList.add("adverb-card");
          card.setAttribute("draggable", "true");
          card.dataset.category = item.category; // Categoría esperada
          card.textContent = item.word;
          card.id = `adverb-${index}`; // Agregar un ID único a cada tarjeta
          adverbsContainer.appendChild(card);
          totalAdverbs++;
  
          // Evento para comenzar a arrastrar
          card.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", card.dataset.category);
            e.dataTransfer.setData("text/id", card.id);
            e.target.classList.add("dragging");
          });
  
          // Evento para finalizar el arrastre
          card.addEventListener("dragend", (e) => {
            e.target.classList.remove("dragging");
          });
        });
      });
  
    // Configurar las zonas de soltar
    dropzones.forEach((zone) => {
      zone.addEventListener("dragover", (e) => e.preventDefault()); // Permitir soltar
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggingCard = document.querySelector(".dragging");
  
        if (draggingCard) {
          zone.appendChild(draggingCard); // Añadir tarjeta a la zona de soltar
        }
      });
    });
  
    // Evento para validar
    validateButton.addEventListener("click", () => {
      let correctCount = 0;
      let placedCards = 0; // Total de tarjetas colocadas en zonas de soltar
  
      dropzones.forEach((zone) => {
        const cards = zone.querySelectorAll(".adverb-card");
        placedCards += cards.length;
        cards.forEach((card) => {
          if (card.dataset.category === zone.dataset.category) {
            correctCount++;
          }
        });
      });
  
      // Verificar si todos los adverbios están clasificados correctamente
      if (correctCount === totalAdverbs && placedCards === totalAdverbs) {
        resultMessage.textContent = "¡Correcto! Todos los adverbios están en su categoría.";
        resultMessage.style.color = "green";
      } else {
        resultMessage.textContent = "Algunos adverbios no están en la categoría correcta o faltan por clasificar. Inténtalo de nuevo.";
        resultMessage.style.color = "red";
      }
    });
  });
  