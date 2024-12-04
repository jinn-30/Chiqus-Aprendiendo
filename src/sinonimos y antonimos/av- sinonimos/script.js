const mensaje = document.getElementById('mensaje');

document.addEventListener("DOMContentLoaded", () => {
    fetch("content/sinonimos.json")
      .then(response => response.json())
      .then(data => iniciarJuego(data));
  
      let datosRestantes = []; // Almacena las palabras que no se han usado
      let puntaje = 0; // Puntaje acumulado
      let totalPreguntas = 0; // Total de preguntas manejadas

    function iniciarJuego(data) {
      datosRestantes = [...data]; // Crear una copia de los datos para evitar modificar el original
      cargarNuevasImagenes();
    }
  
    function obtenerDatosAleatorios(cantidad) {
      const seleccionados = [];
      for (let i = 0; i < cantidad && datosRestantes.length > 0; i++) {
        const indiceAleatorio = Math.floor(Math.random() * datosRestantes.length);
        seleccionados.push(datosRestantes.splice(indiceAleatorio, 1)[0]); // Remover elemento del array
      }
      return seleccionados;
    }
  
    function cargarNuevasImagenes() {
      if (datosRestantes.length === 0) {
        // Si ya no hay palabras restantes, mostrar el puntaje final
        document.getElementById("juego").innerHTML = "<h2>¡Juego completado!</h2>";
        document.getElementById("verificar").style.display = "none";
        document.getElementById("resultado").textContent = `Puntaje final: ${puntaje}`;
        mostrarEstadisticasFinales();
        return;
      }
  
      const juegoDiv = document.getElementById("juego");
    juegoDiv.innerHTML = ""; // Limpiar el contenido del juego
    const palabrasSeleccionadas = obtenerDatosAleatorios(3);
    totalPreguntas += palabrasSeleccionadas.length; // Incrementar el total de preguntas manejadas

    palabrasSeleccionadas.forEach((item, index) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");

      const imagen = item.imagen
        ? `<img src="${item.imagen}" alt="${item.palabra}">`
        : `<div style="width:100px; height:100px; background-color:#f0f0f0; display:flex; align-items:center; justify-content:center; border:1px solid #ccc;">Sin Imagen</div>`;

      tarjeta.innerHTML = `
        ${imagen}
        <p>${item.palabra}</p>
        <input type="text" id="respuesta-${index}" placeholder="Escribe un sinónimo">
      `;

      juegoDiv.appendChild(tarjeta);
      });
  
      // Botón para verificar respuestas
      document.getElementById("verificar").onclick = () => verificarRespuestas(palabrasSeleccionadas);
    }
  
    function verificarRespuestas(data) {
      let correctas = 0;

      data.forEach((item, index) => {
        const respuestaInput = document.getElementById(`respuesta-${index}`);
        const respuesta = respuestaInput.value.trim().toLowerCase();
        const tarjeta = respuestaInput.closest(".tarjeta");
  
        if (item.sinonimos.includes(respuesta)) {
          correctas++;
          tarjeta.style.border = "2px solid green"; // Resaltar correctas con borde verde
        } else {
          tarjeta.style.border = "2px solid red"; // Resaltar incorrectas con borde rojo
          respuestaInput.value = item.sinonimos[0]; // Mostrar la respuesta correcta
        }
      });
      puntaje += correctas;
      document.getElementById("resultado").textContent = `Puntaje total: ${puntaje}`;
  
      if (correctas === data.length) {
        mensaje.textContent = `Respuestas correctas!`;
        mensaje.style.color = "#4CAF50"
        setTimeout(()=>{
            cargarNuevasImagenes();
            mensaje.textContent = ''; 
        },2000)
        
      } else {
        mensaje.textContent = `Algunas respuestas no son correctas. Intenta de nuevo.`;
        mensaje.style.color = "#f44336"
        setTimeout(()=>{
            cargarNuevasImagenes();
            mensaje.textContent = '';
        },2000)
      }
    }

    function mostrarEstadisticasFinales() {
      const juegoDiv = document.getElementById("juego");
      juegoDiv.innerHTML = `
        <h3>¡Juego completado!</h3>
        <p>Total de preguntas manejadas: ${totalPreguntas}</p>
        <p>Puntaje final: ${puntaje}</p>
      `;
      document.getElementById("verificar").style.display = "none"; // Ocultar el botón de verificar
      document.getElementById("resultado").style.display = "none";
      juegoDiv.style.flexDirection = "column";
    }
  });
  