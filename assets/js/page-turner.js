document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item');
    const content = document.querySelector('.page-content');
    let isAnimating = false;

    // Get current page index
    function getCurrentPageIndex() {
        const currentPath = window.location.pathname;
        return Array.from(navLinks).findIndex(link => 
            link.getAttribute('href') === currentPath || 
            link.getAttribute('href') === currentPath.split('/').pop()
        );
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (isAnimating) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            const href = this.href;
            
            // Determine direction based on navigation
            const currentIndex = getCurrentPageIndex();
            const clickedIndex = Array.from(navLinks).indexOf(this);
            const goingForward = clickedIndex > currentIndex;
            
            // Add appropriate animation class
            isAnimating = true;
            content.classList.add(goingForward ? 'page-exit' : 'page-exit-reverse');

            // Wait for animation to complete
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
});