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

    // Find current page index
    const currentPath = window.location.pathname;
    let currentPageIndex = pages.findIndex(page => page === currentPath);
    if (currentPageIndex === -1) currentPageIndex = 0;

    const rightPage = document.querySelector('.right-page');
    const leftPage = document.querySelector('.left-page');

    function navigateToPage(direction) {
        let nextIndex;
        const currentPage = direction === 'next' ? rightPage : leftPage;

        if (direction === 'next' && currentPageIndex < pages.length - 1) {
            nextIndex = currentPageIndex + 1;
            currentPage.classList.add('is-turning');
            
            setTimeout(() => {
                window.location.href = pages[nextIndex];
            }, 500);
        } 
        else if (direction === 'prev' && currentPageIndex > 0) {
            nextIndex = currentPageIndex - 1;
            currentPage.classList.add('is-turning');
            
            setTimeout(() => {
                window.location.href = pages[nextIndex];
            }, 500);
        }
    }

    // Add click events
    rightPage.addEventListener('click', () => navigateToPage('next'));
    leftPage.addEventListener('click', () => navigateToPage('prev'));

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navigateToPage('next');
        } else if (e.key === 'ArrowLeft') {
            navigateToPage('prev');
        }
    });

    // Add hover effect
    rightPage.addEventListener('mouseover', () => {
        if (currentPageIndex < pages.length - 1) {
            rightPage.style.transform = 'rotateY(-10deg)';
        }
    });

    rightPage.addEventListener('mouseout', () => {
        if (!rightPage.classList.contains('is-turning')) {
            rightPage.style.transform = 'rotateY(0)';
        }
    });

    leftPage.addEventListener('mouseover', () => {
        if (currentPageIndex > 0) {
            leftPage.style.transform = 'rotateY(10deg)';
        }
    });

    leftPage.addEventListener('mouseout', () => {
        if (!leftPage.classList.contains('is-turning')) {
            leftPage.style.transform = 'rotateY(0)';
        }
    });
});