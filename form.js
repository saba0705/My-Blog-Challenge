// Access toggle switch HTML element
let themeSwitcher = document.querySelector('#theme-switcher');
let container = document.querySelector('.dark'); // Corrected class name

// Light theme state
let isDark = true;

// Listen for click event on the toggle switch
themeSwitcher.addEventListener('click', function() {
    // If the mode is dark, apply light background
    if (isDark) {
        document.body.style.backgroundColor = '#f4f4f4'; // Light background color
        isDark = !isDark;
    } else {
        document.body.style.backgroundColor = '#243447'; // Dark background color
        isDark = !isDark;
    }
});