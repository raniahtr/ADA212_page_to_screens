document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item');
    const content = document.querySelector('.page-content');
    let isAnimating = false;
    
    // Create edge indicators
    const leftEdge = document.createElement('div');
    leftEdge.className = 'page-edge-left';
    const rightEdge = document.createElement('div');
    rightEdge.className = 'page-edge-right';
    
    document.querySelector('.wrapper').appendChild(leftEdge);
    document.querySelector('.wrapper').appendChild(rightEdge);

    // Get current page index
    function getCurrentPageIndex() {
        const currentPath = window.location.pathname;
        return Array.from(navLinks).findIndex(link => 
            link.getAttribute('href') === currentPath || 
            link.getAttribute('href') === currentPath.split('/').pop()
        );
    }

    // Handle page turn
    function turnPage(direction) {
        if (isAnimating) return;
        
        const currentIndex = getCurrentPageIndex();
        let nextIndex;
        
        if (direction === 'left') {
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) return;
            content.classList.add('page-turn-left');
        } else {
            nextIndex = currentIndex + 1;
            if (nextIndex >= navLinks.length) return;
            content.classList.add('page-turn-right');
        }

        isAnimating = true;
        
        setTimeout(() => {
            window.location.href = navLinks[nextIndex].href;
        }, 400);
    }

    // Add edge click handlers
    leftEdge.addEventListener('click', () => turnPage('left'));
    rightEdge.addEventListener('click', () => turnPage('right'));

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            turnPage('left');
        } else if (e.key === 'ArrowRight') {
            turnPage('right');
        }
    });

    // Handle navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (isAnimating) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            const currentIndex = getCurrentPageIndex();
            const clickedIndex = Array.from(navLinks).indexOf(this);
            
            turnPage(clickedIndex > currentIndex ? 'right' : 'left');
        });
    });
});