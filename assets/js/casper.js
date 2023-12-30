/* Mobile menu burger toggle */
(function () {
    const navigation = document.querySelector('.gh-navigation');
    const burger = navigation.querySelector('.gh-burger');
    if (!burger) return;

    burger.addEventListener('click', function () {
        if (!navigation.classList.contains('is-open')) {
            navigation.classList.add('is-open');
        } else {
            navigation.classList.remove('is-open');
        }
    });
})();

/* Add lightbox to gallery images */
(function () {
    lightbox(
        '.kg-image-card > .kg-image[width][height], .kg-gallery-image > img'
    );
})();

/* Responsive video in post content */
(function () {
    const sources = [
        '.gh-content iframe[src*="youtube.com"]',
        '.gh-content iframe[src*="youtube-nocookie.com"]',
        '.gh-content iframe[src*="player.vimeo.com"]',
        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
        '.gh-content object',
        '.gh-content embed',
    ];
    reframe(document.querySelectorAll(sources.join(',')));
})();

/* Turn the main nav into dropdown menu when there are more than 5 menu items */
(function () {
    dropdown();
})();

/* Infinite scroll pagination */
(function () {
    if (!document.body.classList.contains('home-template') && !document.body.classList.contains('post-template')) {
        pagination();
    }
})();


/* Scroll to top button js */

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // Scroll to the top when the button is clicked
        scrollToTopBtn.addEventListener("click", function () {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
    });
})();

/* Copy to clipboard btn */
(function () {
    const copyButton = document.getElementById('copy-button');
    const copyMessage = document.getElementById('copy-message');

    copyButton.addEventListener('click', () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                copyMessage.textContent = 'Link copied!';
                copyMessage.style.display = 'block';
                setTimeout(() => {
                    copyMessage.style.display = 'none';
                }, 1000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                copyMessage.textContent = 'Failed to copy link :(';
                copyMessage.style.display = 'block';
            });
    });
})();
