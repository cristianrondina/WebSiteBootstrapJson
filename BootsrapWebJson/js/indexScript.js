document.addEventListener('DOMContentLoaded', function() {
  // Gestire il toggle del menu mobile
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Caricamento del JSON
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Hero Section dinamica
      const heroSection = document.querySelector('.hero-section .container');
      heroSection.innerHTML = `
        <h1 class="display-4">${data.heroSection.title}</h1>
        <p class="lead">${data.heroSection.description}</p>
        <hr class="my-4 bg-light">
        <a href="${data.heroSection.ctaLink}" class="btn btn-light btn-lg">${data.heroSection.ctaText}</a>
      `;

      // Generazione delle Card
      const cardContainer = document.querySelector('.row');
      cardContainer.innerHTML = ''; // Pulisco il contenuto preesistente
      data.cards.forEach(card => {
        cardContainer.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card h-100 bg-image shadow-1-strong">
              <div class="card-body">
                <h5 class="card-title text-black">${card.title}</h5>
                <p class="card-text text-black">${card.description}</p>
                <a href="${card.link}" class="btn btn-primary">${card.buttonText}</a>
              </div>
            </div>
          </div>
        `;
      });

      // Footer dinamico
      const footer = document.querySelector('footer');
      footer.innerHTML = `<p>&copy; 2024 Socket Web | ${data.footer.text}</p>`;
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
});
