document.addEventListener("DOMContentLoaded", function () {
    // === 1. ENQUIRY FORM VALIDATION BRAIN ===
    const form = document.getElementById("enquiryForm");
    const errorDisplay = document.getElementById("error-message");

    if (form && errorDisplay) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
            const emailValue = document.getElementById("email").value.trim();
            const messageValue = document.getElementById("message").value.trim();
            
            if (emailValue === "" || messageValue === "") {
                errorDisplay.style.color = "#ff3333";
                errorDisplay.textContent = "❌ Error: Please fill in all fields.";
                return;
            }
            
            errorDisplay.style.color = "#2ecc71";
            errorDisplay.textContent = "🎉 Success! Enquiry sent.";
            form.reset(); 
        });
    }

    // === 2. BRINGING WEBSITE IMAGES TO LIFE ===
    // Find all images inside your gallery sections
    const galleryImages = document.querySelectorAll('.home-gallery img, .about-gallery img');

    galleryImages.forEach(img => {
        // Initial smooth transition setup via styling
        img.style.transition = "transform 0.4s ease, filter 0.4s ease, opacity 0.6s ease";
        img.style.cursor = "pointer";

        // Add an interactive pop effect when mouse hovers over the image
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.05)"; // Zooms in slightly
            img.style.filter = "brightness(1.1)"; // Brightens the colors
        });

        // Reset image back to normal when mouse leaves
        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
            img.style.filter = "brightness(1)";
        });
    });
});