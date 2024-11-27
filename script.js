document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    animatedElements.forEach((element) => observer.observe(element));
  });

  

  const scrollButton = document.querySelector(".button");

  // Mostra ou esconde o botão com base no scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.opacity = 1; // Aparece
    } else {
      scrollButton.style.opacity = 0; // Esconde
    }
  });

  // Adiciona a funcionalidade de "voltar ao topo"
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });