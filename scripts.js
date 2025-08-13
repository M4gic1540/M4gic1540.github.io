// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener una referencia al elemento wrapper
  // document.querySelector() devuelve el primer elemento que coincide con el selector CSS especificado.
  const wrapper = document.querySelector(".wrapper");
  const toggleButton = document.getElementById("toggleWrapper");

  // Verificar si el wrapper fue encontrado
  if (wrapper) {
    console.log("Wrapper encontrado:", wrapper);

    // Ejemplo 1: Cambiar el color de fondo después de 3 segundos
    // setTimeout(() => {
    //   wrapper.style.backgroundColor = '#6a0dad'; // Un morado oscuro
    //   console.log('Color de fondo del wrapper cambiado a morado.');
    // }, 3000);

    // Ejemplo 2: Alternar una clase CSS para cambiar el tamaño y el estilo
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        // .classList.toggle() añade la clase si no está presente, y la quita si sí lo está.
        wrapper.classList.toggle("expanded");
        if (wrapper.classList.contains("expanded")) {
          console.log("Wrapper expandido.");
        } else {
          console.log("Wrapper reducido.");
        }
      });
    }

    // Puedes añadir más lógica aquí para interactuar con el wrapper
    // Por ejemplo, escuchar eventos de clic en las imágenes dentro del wrapper
    const images = wrapper.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("click", (event) => {
        alert(`¡Hiciste clic en una imagen! Fuente: ${event.target.src}`);
      });
    });
  } else {
    console.error('No se encontró el elemento con la clase "wrapper".');
  }
});
