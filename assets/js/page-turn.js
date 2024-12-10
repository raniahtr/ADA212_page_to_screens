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

    // Get current page index
    const currentPage = window.location.pathname;
    const currentIndex = pages.indexOf(currentPage);

    function navigateToPage(direction) {
        let nextIndex;
        
        if (direction === 'next' && currentIndex < pages.length - 1) {
            nextIndex = currentIndex + 1;
            document.querySelector('.page.right').classList.add('turning');
            setTimeout(() => {
                window.location.href = pages[nextIndex];
            }, 300);
        } 
        else if (direction === 'prev' && currentIndex > 0) {
            nextIndex = currentIndex - 1;
            document.querySelector('.page.left').classList.add('turning');
            setTimeout(() => {
                window.location.href = pages[nextIndex];
            }, 300);
        }
    }

    // Click events
    document.querySelector('.page.right').addEventListener('click', () => {
        navigateToPage('next');
    });

    document.querySelector('.page.left').addEventListener('click', () => {
        navigateToPage('prev');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') navigateToPage('next');
        if (e.key === 'ArrowLeft') navigateToPage('prev');
    });
});