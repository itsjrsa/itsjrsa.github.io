// Smooth scrolling for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Generic publication loader
function loadPublications(endpoint, containerId) {
  fetch(endpoint)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      const list = document.getElementById(containerId);
      data.items.forEach(item => {
        const linkWrapper = document.createElement('a');
        linkWrapper.href = item.link;
        linkWrapper.target = '_blank';
        linkWrapper.className = 'publication-item-link'; // optional class for styling

        const container = document.createElement('div');
        container.className = 'publication-item';

        const title = document.createElement('p');
        title.className = 'publication-item-title';
        title.textContent = item.publication;

        const journal = document.createElement('p');
        journal.className = 'publication-item-journal';
        journal.textContent = item.journal;

        // Optional: remove individual link button if everything is clickable
        // const link = document.createElement('a');
        // link.href = item.link;
        // link.target = '_blank';
        // link.className = 'link-button';
        // link.textContent = 'Link';

        // Add elements to the publication item
        container.appendChild(title);
        container.appendChild(journal);

        // Wrap it in an anchor so the entire block is clickable
        linkWrapper.appendChild(container);
        list.appendChild(linkWrapper);
      });
    })
    .catch(error => console.error(`Failed to load ${containerId}:`, error));
}

// Load all publication sections
loadPublications('static/publications/journals.json', 'journalsList');
loadPublications('static/publications/conferences.json', 'conferencesList');
loadPublications('static/publications/working.json', 'workingList');