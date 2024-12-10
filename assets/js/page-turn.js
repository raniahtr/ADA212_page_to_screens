document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        '/introduction.html', 
        '/origins.html', 
        '/path-to-adaptation.html', 
        '/grand-premiere.html', 
        '/global-reception.html', 
        '/budget-investment.html', 
        '/plot-twist.html'
    ];

    let currentPageIndex = 0;
    const pageWrapper = document.querySelector('.page-wrapper');
    const rightPage = document.querySelector('.right-page');
    const leftPage = document.querySelector('.left-page');

    // Find current page index
    const currentPath = window.location.pathname;
    currentPageIndex = pages.findIndex(page => page === currentPath);
    if (currentPageIndex === -1) currentPageIndex = 0;

    function navigateToPage(direction) {
        let nextIndex;
        let pageToTurn;
        
        if (direction === 'next' && currentPageIndex < pages.length - 1) {
            nextIndex = currentPageIndex + 1;
            pageToTurn = rightPage;
        } else if (direction === 'prev' && currentPageIndex > 0) {
            nextIndex = currentPageIndex - 1;
            pageToTurn = leftPage;
        } else {
            return; // Don't navigate if at the end or beginning
        }

        // Add turning animation
        pageToTurn.classList.add('turning');

        // Wait for animation to complete before navigating
        setTimeout(() => {
            window.location.href = pages[nextIndex];
        }, 500); // Half of the CSS transition time
    }

    // Add click events
    rightPage.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('next');
    });

    leftPage.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('prev');
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navigateToPage('next');
        } else if (e.key === 'ArrowLeft') {
            navigateToPage('prev');
        }
    });

    // Add hover effects
    rightPage.addEventListener('mouseover', () => {
        if (currentPageIndex < pages.length - 1) {
            rightPage.style.transform = 'rotateY(-15deg)';
        }
    });

    rightPage.addEventListener('mouseout', () => {
        rightPage.style.transform = 'rotateY(0)';
    });

    leftPage.addEventListener('mouseover', () => {
        if (currentPageIndex > 0) {
            leftPage.style.transform = 'rotateY(15deg)';
        }
    });

    leftPage.addEventListener('mouseout', () => {
        leftPage.style.transform = 'rotateY(0)';
    });

    // Add visual indicators for navigation availability
    if (currentPageIndex === 0) {
        leftPage.style.cursor = 'not-allowed';
    }
    if (currentPageIndex === pages.length - 1) {
        rightPage.style.cursor = 'not-allowed';
    }
});