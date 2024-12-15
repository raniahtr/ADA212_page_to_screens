document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('page-content');
  const navLinks = document.querySelectorAll('.nav-item');
  let isAnimating = false;

  // Handle navigation clicks
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          if (isAnimating) {
              e.preventDefault();
              return;
          }

          isAnimating = true;
          content.style.transform = 'rotateY(-180deg)';

          // Add page number to current content
          const pageNumber = document.createElement('div');
          pageNumber.className = 'page-number';
          pageNumber.textContent = Array.from(navLinks).indexOf(link) + 1;
          content.appendChild(pageNumber);

          // After animation, allow next navigation
          setTimeout(() => {
              isAnimating = false;
          }, 1000);
      });
  });

  // Add initial page number
  const initialPage = document.createElement('div');
  initialPage.className = 'page-number';
  initialPage.textContent = '1';
  content.appendChild(initialPage);
});