document.addEventListener('DOMContentLoaded', () => {
  // Fetching the JSON data
  fetch('osi-transport.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella risposta del server');
      }
      return response.json();
    })
    .then(data => {
      const osiLayersContainer = document.getElementById('osi-layers-details');
      data.osi_layers.forEach(layer => {
        const layerElement = document.createElement('div');
        layerElement.classList.add('osi-layer');

        const title = document.createElement('h4');
        title.textContent = `Strato ${data.osi_layers.indexOf(layer) + 1}: ${layer.name}`;

        const description = document.createElement('p');
        description.textContent = layer.description;

        layerElement.appendChild(title);
        layerElement.appendChild(description);

        osiLayersContainer.appendChild(layerElement);
      });
    })
    .catch(error => {
      console.error('Errore nel recupero dei dati:', error);
      const osiLayersContainer = document.getElementById('osi-layers-details');
      osiLayersContainer.innerHTML = '<p>Si è verificato un errore nel caricamento dei dati.</p>';
    });
});
