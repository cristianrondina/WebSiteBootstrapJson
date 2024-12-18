document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');
  
    toggler.addEventListener('click', function () {
      navbarNav.classList.toggle('show');
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data
    fetch('socketData.json')
      .then(response => response.json())
      .then(data => {
        // Display the socket overview
        const socketContent = document.getElementById('socket-content');
        
        const overviewSection = document.createElement('section');
        overviewSection.classList.add('socket-overview', 'py-4');
        overviewSection.innerHTML = `
          <h2 class="text-center mb-4">${data.socket_overview.title}</h2>
          <p>${data.socket_overview.description}</p>
        `;
        socketContent.appendChild(overviewSection);
  
        // Display the socket types
        const typesSection = document.createElement('section');
        typesSection.classList.add('socket-types', 'py-4');
        typesSection.innerHTML = `
          <h3>I Tipi di Socket</h3>
          <ul>
            ${data.socket_types.map(type => `
              <li><strong>${type.name}</strong>: ${type.description}</li>
            `).join('')}
          </ul>
        `;
        socketContent.appendChild(typesSection);
  
        // Display the socket communication steps
        const commSection = document.createElement('section');
        commSection.classList.add('socket-communication', 'py-4');
        commSection.innerHTML = `
          <h3>${data.socket_communication.title}</h3>
          <ul>
            ${data.socket_communication.steps.map(step => `
              <li><strong>${step.title}</strong>: ${step.description}</li>
            `).join('')}
          </ul>
        `;
        socketContent.appendChild(commSection);
  
        // Display the socket uses
        const usesSection = document.createElement('section');
        usesSection.classList.add('socket-uses', 'py-4');
        usesSection.innerHTML = `
          <h3>Usi Comuni dei Socket</h3>
          <ul>
            ${data.socket_uses.map(use => `
              <li><strong>${use.title}</strong>: ${use.description}</li>
            `).join('')}
          </ul>
        `;
        socketContent.appendChild(usesSection);
      })
      .catch(error => {
        console.error('Error loading the JSON data:', error);
      });
  });
  