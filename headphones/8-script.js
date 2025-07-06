document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const Nav = document.querySelector('.nav');

    if (hamburgerIcon && Nav) {
        hamburgerIcon.addEventListener('click', () => {
            // Toggle the 'is-open' class on the navigation menu
            Nav.classList.toggle('is-open');
            // Toggle the 'is-active' class on the hamburger icon for animation (e.g., turning into an X)
            hamburgerIcon.classList.toggle('is-active');
        });

        // Optional: Close the menu when a navigation link is clicked
        const navLinks = document.querySelectorAll('.main-nav .Links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                Nav.classList.remove('is-open');
                hamburgerIcon.classList.remove('is-active');
            });
        });
    }
});