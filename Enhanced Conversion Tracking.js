// Track form submissions
document.addEventListener('submit', function(event) {
  if (event.target.id === 'contact-form') {
    gtag('event', 'form_submit', {
      'form_name': 'contact_form',
      'page_title': document.title
    });
  }
});

// Track project view engagement
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectName = this.querySelector('h3').textContent;
      gtag('event', 'project_view', {
        'project_name': projectName
      });
    });
  });
});