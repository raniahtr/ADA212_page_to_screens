document.addEventListener('DOMContentLoaded', () => {
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');
    
    // Optional page turn interactions
    leftPage.addEventListener('click', () => {
        leftPage.style.transform = 'perspective(1500px) rotateY(-30deg)';
    });
    
    rightPage.addEventListener('click', () => {
        rightPage.style.transform = 'perspective(1500px) rotateY(30deg)';
    });
});