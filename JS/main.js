// Accesing the DOM. 
const toggleButton = document.getElementById('toggle-button');

// Listening every time someone clicks the toggleButton.
toggleButton.addEventListener('change',activateDarkMode);

// Function to activate de dark mode by adding the 'dark' class
// to the body tag when the input is activated.
function activateDarkMode() {
    document.body.classList.toggle('dark');
};