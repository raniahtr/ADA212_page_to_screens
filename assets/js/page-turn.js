document.addEventListener('DOMContentLoaded', function() {
  const contentWrapper = document.querySelector('.book-content-wrapper');
  const content = document.querySelector('.page-content');
  const navLinks = document.querySelectorAll('.nav-item');
  let isAnimating = false;
  let currentPage = 1;

  // Add page numbers
  function updatePageNumber() {
      let pageNumber = document.querySelector('.page-number');
      if (!pageNumber) {
          pageNumber = document.createElement('div');
          pageNumber.className = 'page-number';
          content.appendChild(pageNumber);
      }
      pageNumber.textContent = `${currentPage} / ${navLinks.length}`;
  }

  // Initialize progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  contentWrapper.appendChild(progressBar);

  function updateProgress() {
      const progress = (currentPage - 1) / (navLinks.length - 1) * 100;
      progressBar.style.width = `${progress}%`;
  }

  // Handle page transitions
  function transitionPage(targetPage, href) {
      if (isAnimating) return;
      isAnimating = true;

      // Update current page
      currentPage = targetPage;
      updatePageNumber();
      updateProgress();

      // Add turning class for animation
      content.classList.add('turning');

      // Create loading state
      const loadingEl = document.createElement('div');
      loadingEl.className = 'page-loading';
      loadingEl.textContent = 'Turning page...';
      contentWrapper.appendChild(loadingEl);

      // Wait for animation
      setTimeout(() => {
          window.location.href = href;
      }, 400);
  }

  // Handle navigation clicks
  navLinks.forEach((link, index) => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          if (isAnimating) return;

          const targetPage = index + 1;
          const href = this.href;

          transitionPage(targetPage, href);
      });
  });

  // Initialize page number and progress
  updatePageNumber();
  updateProgress();

  // Reset animation state when page loads
  window.addEventListener('pageshow', function() {
      isAnimating = false;
      content.classList.remove('turning');
      const loadingEl = document.querySelector('.page-loading');
      if (loadingEl) {
          loadingEl.remove();
      }
  });
});