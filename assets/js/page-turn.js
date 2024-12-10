document.addEventListener('DOMContentLoaded', () => {
    const pageWrapper = document.querySelector('.page-wrapper');
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Current page index (to track navigation)
    let currentPageIndex = 0;
    const pages = [
        '/introduction.html', 
        '/origins.html', 
        '/path-to-adaptation.html', 
        '/grand-premiere.html', 
        '/global-reception.html', 
        '/budget-investment.html', 
        '/plot-twist.html'
    ];

    // Page turn function
    function turnPage(direction) {
        if (direction === 'next' && currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            window.location.href = pages[currentPageIndex];
        } else if (direction === 'prev' && currentPageIndex > 0) {
            currentPageIndex--;
            window.location.href = pages[currentPageIndex];
        }
    }

    // Add click events to pages for navigation
    rightPage.addEventListener('click', () => {
        turnPage('next');
    });

    leftPage.addEventListener('click', () => {
        turnPage('prev');
    });

    // Optional: Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            turnPage('next');
        } else if (event.key === 'ArrowLeft') {
            turnPage('prev');
        }
    });

    // Highlight current page in navigation
    navLinks.forEach((link, index) => {
        if (link.getAttribute('href') === window.location.pathname) {
            currentPageIndex = index;
            link.classList.add('active');
        }
    });
});