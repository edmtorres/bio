// Load content dynamically for "About Me" and "Projects"
function loadContent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data.replace(/\n/g, '<br>');
        })
        .catch(error => console.error('Error loading the file:', error));
}

document.getElementById('read-more-about-btn').addEventListener('click', function() {
    var moreText = document.getElementById('more-about-text');
    var isExpanded = this.getAttribute('aria-expanded') === 'true';
    moreText.style.display = isExpanded ? 'none' : 'block';
    this.textContent = isExpanded ? 'Read More' : 'Read Less';
    this.setAttribute('aria-expanded', !isExpanded);
});

document.getElementById('read-more-projects-btn').addEventListener('click', function() {
    var moreProjects = document.getElementById('projects-text');
    var isExpanded = this.getAttribute('aria-expanded') === 'true';
    moreProjects.style.display = isExpanded ? 'none' : 'block';
    this.textContent = isExpanded ? 'Read More' : 'Read Less';
    this.setAttribute('aria-expanded', !isExpanded);
});

// Load the dynamic content for About and Projects sections
loadContent('about.txt', 'more-about-text');
loadContent('projects.txt', 'projects-text');
