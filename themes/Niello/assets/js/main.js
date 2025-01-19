console.log('This site was generated by Hugo.');
document.addEventListener("DOMContentLoaded", () => {
    const markdownImages = document.querySelectorAll('img');
  
    markdownImages.forEach(img => {
      // Ajouter l'attribut loading="lazy"
      img.setAttribute('loading', 'lazy');
  
      // Ajouter un placeholder pour les images
      const placeholder = '/images/placeholder.jpg'; // Remplacez par le chemin de votre image placeholder
      if (!img.classList.contains('lazy-loaded')) {
        const originalSrc = img.src;
        img.src = placeholder; // Placeholder initial
        img.dataset.src = originalSrc; // Conserver l'image d'origine
        img.classList.add('lazy');
  
        // Observer pour charger l'image réelle
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = img.dataset.src;
              img.onload = () => img.classList.add('lazy-loaded');
              observer.unobserve(img);
            }
          });
        });
        observer.observe(img);
      }
    });
  });
  
  