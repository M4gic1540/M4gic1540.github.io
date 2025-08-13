// Inicializar animaciones de scroll con AOS
document.addEventListener("DOMContentLoaded", () => {
  // Configuración de AOS
  AOS.init({
    duration: 800, // Duración de la animación
    offset: 100,   // Distancia desde el viewport antes de iniciar
    once: true,    // Animar solo una vez
    easing: "ease-out-cubic"
  });

  // Animación hover personalizada para botones
  const buttons = document.querySelectorAll("a.bg-indigo-500, a.bg-green-500, a.bg-white, a.border-indigo-400");

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      btn.style.transition = "all 0.6s ease";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "none";
    });
  });
});
