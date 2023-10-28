// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

fetch('static/publications/conferences.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('conferencesList');

    data.items.forEach(item => {
      const listItem = document.createElement('li');
      const itemLink = document.createElement('a');
      const linkButton = document.createElement('div');
      
      itemLink.href = item.link;
      itemLink.target = "_blank";
      itemLink.style.textDecoration = "none";
      linkButton.classList.add("link-button");
      linkButton.textContent = "Link";

      itemLink.appendChild(linkButton);
      listItem.appendChild(itemLink);

      const paperInfo = document.createTextNode(`${item.publication}`);
      const journalInfo = document.createElement('i');
      journalInfo.textContent = item.journal;

      listItem.appendChild(paperInfo);
      listItem.appendChild(journalInfo);

      list.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));



fetch('static/publications/journals.json')
.then(response => response.json())
.then(data => {
  const list = document.getElementById('journalsList');

  data.items.forEach(item => {
    const listItem = document.createElement('li');
    const itemLink = document.createElement('a');
    const linkButton = document.createElement('div');
    
    itemLink.href = item.link;
    itemLink.target = "_blank";
    itemLink.style.textDecoration = "none";
    linkButton.classList.add("link-button");
    linkButton.textContent = "Link";

    itemLink.appendChild(linkButton);
    listItem.appendChild(itemLink);

    const paperInfo = document.createTextNode(`${item.publication}`);
    const journalInfo = document.createElement('i');
    journalInfo.textContent = item.journal;

    listItem.appendChild(paperInfo);
    listItem.appendChild(journalInfo);

    list.appendChild(listItem);
  });
})
.catch(error => console.error('Error fetching data:', error));


fetch('static/publications/working.json')
.then(response => response.json())
.then(data => {
  const list = document.getElementById('workingList');

  data.items.forEach(item => {
    const listItem = document.createElement('li');
    const itemLink = document.createElement('a');
    const linkButton = document.createElement('div');
    
    itemLink.href = item.link;
    itemLink.target = "_blank";
    itemLink.style.textDecoration = "none";
    linkButton.classList.add("link-button");
    linkButton.textContent = "Link";

    itemLink.appendChild(linkButton);
    listItem.appendChild(itemLink);

    const paperInfo = document.createTextNode(`${item.publication}`);
    const journalInfo = document.createElement('i');
    journalInfo.textContent = item.journal;

    listItem.appendChild(paperInfo);
    listItem.appendChild(journalInfo);

    list.appendChild(listItem);
  });
})
.catch(error => console.error('Error fetching data:', error));


