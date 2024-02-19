

document.addEventListener("DOMContentLoaded", function() {
    // Adjust the timeout to match the duration of your GIF animation
    setTimeout(function() {
        // Hide the preloader
        document.getElementById("preloader").style.display = 'none';

        // Dynamically add the 'fade-in' class to the main content
        document.querySelector('main').classList.add('fade-in');
        
        // Optionally, make sure the main content is visible
        document.querySelector('main').style.display = 'block';
    }, 10000); // Example: 5000 milliseconds = 5 seconds for the GIF to complete
});
