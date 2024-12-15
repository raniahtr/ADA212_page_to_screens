document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item');
    const content = document.querySelector('.page-content');
    let isAnimating = false;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (isAnimating) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            const href = this.href;
            
            // Create shadow element
            const shadow = document.createElement('div');
            shadow.className = 'page-shadow';
            content.appendChild(shadow);

            // Start page turn animation
            isAnimating = true;
            content.classList.add('page-exit');

            // Wait for animation to complete
            setTimeout(() => {
                // Load new page content
                window.location.href = href;
            }, 400);
        });
    });

    // Handle page load animation
    if (performance.navigation.type === performance.navigation.TYPE_BACK_FORWARD) {
        content.classList.add('page-enter');
        setTimeout(() => {
            content.classList.remove('page-enter');
        }, 800);
    }
});