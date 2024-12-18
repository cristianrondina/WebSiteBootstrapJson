document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');
  
    toggler.addEventListener('click', function () {
      navbarNav.classList.toggle('show');
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data
    fetch('tcp-udpData.json')
      .then(response => response.json())
      .then(data => {
        const contentSection = document.getElementById('tcp-udp-content');
        
        // Title and introduction
        contentSection.innerHTML = `
          <h1 class="text-center mb-4">${data.introduction.title}</h1>
          <p class="lead text-center">${data.introduction.description}</p>
        `;
  
        // TCP vs UDP Comparison Table
        const comparisonTable = document.createElement('table');
        comparisonTable.classList.add('table', 'table-bordered');
        comparisonTable.innerHTML = `
          <thead>
            <tr>
              <th>Caratteristica</th>
              <th>TCP</th>
              <th>UDP</th>
            </tr>
          </thead>
          <tbody>
            ${data.comparison.map(row => `
              <tr>
                <td>${row.characteristic}</td>
                <td>${row.tcp}</td>
                <td>${row.udp}</td>
              </tr>
            `).join('')}
          </tbody>
        `;
        contentSection.appendChild(comparisonTable);
  
        // Detailed Comparison of TCP and UDP
        const detailedComparisonSection = document.createElement('section');
        detailedComparisonSection.classList.add('tcp-udp-comparison', 'py-4');
        detailedComparisonSection.innerHTML = `
          <h2 class="text-center mb-4">${data.detailed_comparison.title}</h2>
          <p>${data.detailed_comparison.description}</p>
          ${data.detailed_comparison.items.map(item => `
            <h4>${item.protocol}</h4>
            <ul>
              ${item.details.map(detail => `
                <li><strong>${detail.title}:</strong> ${detail.description}</li>
              `).join('')}
            </ul>
          `).join('')}
        `;
        contentSection.appendChild(detailedComparisonSection);
  
        // Conclusion Section
        const conclusionSection = document.createElement('section');
        conclusionSection.classList.add('text-center', 'summary', 'py-4');
        conclusionSection.innerHTML = `
          <h2>Conclusioni</h2>
          <p>${data.conclusion}</p>
        `;
        contentSection.appendChild(conclusionSection);
      })
      .catch(error => {
        console.error('Error loading the JSON data:', error);
      });
  });
  