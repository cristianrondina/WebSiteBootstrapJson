document.addEventListener('DOMContentLoaded', () => {
  const glossaryList = document.getElementById('glossary-list');

  // Carica il file JSON
  fetch('json/glossario.json')
  // Assicurati che il percorso sia corretto
    .then(response => {
      console.log('Risposta ricevuta dal server:', response);  // Debug
      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Dati JSON ricevuti:', data);  // Debug
      // Popola la lista con i dati JSON
      if (data.length === 0) {
        glossaryList.innerHTML = '<li class="list-group-item">Nessun termine disponibile.</li>';
      } else {
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.innerHTML = `<strong>${item.termine}:</strong> ${item.definizione}`;
          glossaryList.appendChild(listItem);
        });
      }
    })
    .catch(error => {
      console.error('Errore durante il caricamento del glossario:', error);
      glossaryList.innerHTML = '<li class="list-group-item text-danger">Errore nel caricamento del glossario.</li>';
    });
});
