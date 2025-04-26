document.addEventListener("DOMContentLoaded", () => {
  // Alert when form is submitted
  const form = document.querySelector("form[action*='formspree']");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you for your message! We’ll get back to you soon.");
    });
  }

  // Fetch and load destinations
  const loadDestinations = (filter = '') => {
    fetch('destinations.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('destinationsContainer');
        container.innerHTML = '';

        const filtered = data.filter(destination => 
          destination.city.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach(destination => {
          const div = document.createElement('div');
          div.classList.add('destination');
          div.innerHTML = `
            <img src="${destination.image}" alt="${destination.city}">
            <p>${destination.city} - ${destination.description}</p>
          `;
          container.appendChild(div);
        });
      })
      .catch(error => console.error('Error loading destinations:', error));
  };

  loadDestinations();

  // Search functionality
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', () => {
    loadDestinations(searchInput.value);
  });
});
