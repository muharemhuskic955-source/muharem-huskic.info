// Defer non-critical JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize non-critical features after DOM is ready
  initializeNonCriticalFeatures();
});

// Optimize for Cumulative Layout Shift (CLS)
function setImgDimensions() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.width || !img.height) {
      // Set dimensions programmatically if not specified
      img.style.width = 'auto';
      img.style.height = 'auto';
    }
  });
}

// Debounced scroll handler for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}