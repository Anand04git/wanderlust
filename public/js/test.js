document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.querySelector('.home-title');
    const infoElement = document.querySelector('.info');
    const buttonsElement = document.querySelector('.buttons');
    
    // Add class to trigger moveAndShrink animation after a delay (adjust as needed)
    setTimeout(() => {
        titleElement.classList.add('move');
        infoElement.classList.remove('hidden');
        buttonsElement.classList.remove('hidden');
    }, 5000); // Delay in milliseconds after initial animations
});
