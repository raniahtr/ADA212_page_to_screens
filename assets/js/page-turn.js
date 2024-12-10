$(document).ready(function() {
    // Navigation Toggle
    $('.nav-toggle').click(function() {
        $('.nav-content').toggleClass('active');
    });

    // Page Turn Animation
    function turnPage(direction) {
        const currentPage = $('.current-page');
        const nextPage = $('.next-page');
        
        if (direction === 'next' && $('.next-page').data('href')) {
            currentPage.addClass('turning');
            
            setTimeout(() => {
                window.location.href = $('.next-page').data('href');
            }, 400);
        } else if (direction === 'prev' && $('.prev-page').data('href')) {
            nextPage.addClass('turning');
            
            setTimeout(() => {
                window.location.href = $('.prev-page').data('href');
            }, 400);
        }
    }

    // Navigation Handlers
    $('.next-page').click(() => turnPage('next'));
    $('.prev-page').click(() => turnPage('prev'));

    // Keyboard Navigation
    $(document).keydown(function(e) {
        if (e.keyCode === 37) { // Left arrow
            turnPage('prev');
        } else if (e.keyCode === 39) { // Right arrow
            turnPage('next');
        }
    });

    // Preload Next Page Content
    function preloadNextPage() {
        const nextPageUrl = $('.next-page').data('href');
        if (nextPageUrl) {
            $.get(nextPageUrl, function(data) {
                const content = $(data).find('.page-content').html();
                $('.next-page').html(content);
            });
        }
    }

    // Initialize
    preloadNextPage();

    // Disable buttons if no next/previous page
    if (!$('.next-page').data('href')) {
        $('.next-page').prop('disabled', true);
    }
    if (!$('.prev-page').data('href')) {
        $('.prev-page').prop('disabled', true);
    }
});