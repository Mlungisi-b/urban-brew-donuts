document.addEventListener("DOMContentLoaded", function () {
    // === 1. ENQUIRY FORM VALIDATION & ADVANCED AJAX SIMULATION ===
    const enquiryForm = document.getElementById("enquiryForm");
    const enquiryError = document.getElementById("error-message");

    if (enquiryForm && enquiryError) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            
            const emailValue = document.getElementById("email").value.trim();
            const messageValue = document.getElementById("message").value.trim();
            const submitBtn = enquiryForm.querySelector("button[type='submit']");
            
            if (emailValue === "" || messageValue === "") {
                enquiryError.style.backgroundColor = "#ffe6e6";
                enquiryError.style.color = "#cc0000";
                enquiryError.style.border = "1px solid #cc0000";
                enquiryError.innerHTML = "❌ Error: Please fill in all fields before submitting.";
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.6";
            submitBtn.textContent = "⌛ Processing Asynchronously (AJAX)...";
            
            enquiryError.style.backgroundColor = "#fcf8e3";
            enquiryError.style.color = "#8a6d3b";
            enquiryError.style.border = "1px solid #faebcc";
            enquiryError.innerHTML = "📡 Packaging data streams... Routing to regional server node.";

            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.textContent = "Submit Enquiry";
                
                enquiryError.style.backgroundColor = "#e6ffe6";
                enquiryError.style.color = "#008000";
                enquiryError.style.border = "1px solid #008000";
                enquiryError.innerHTML = `
                    <strong>🎉 Success! Enquiry Stream Transmitted.</strong><br>
                    • Assignment Node: Johannesburg Central Branch<br>
                    • Consultation Fee: <strong>Free / Complimentary</strong><br>
                    • Network Queue Status: <strong>Available (Response within 2 Hours)</strong>
                `;
                enquiryForm.reset(); 
            }, 1500); 
        });
    }

    // === 2. CONTACT FORM VALIDATION & ADVANCED AJAX SIMULATION ===
    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactFormMessage");

    if (contactForm && contactMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            
            const nameValue = document.getElementById("contactName").value.trim();
            const emailValue = document.getElementById("contactEmail").value.trim();
            const typeValue = document.getElementById("messageType").value;
            const messageValue = document.getElementById("message").value.trim();
            const submitBtn = contactForm.querySelector("button[type='submit']");
            
            contactMessage.style.display = "block"; 

            if (nameValue === "" || emailValue === "" || typeValue === "" || messageValue === "") {
                contactMessage.style.backgroundColor = "#ffe6e6";
                contactMessage.style.color = "#cc0000";
                contactMessage.style.border = "1px solid #cc0000";
                contactMessage.textContent = "❌ Please complete all fields before submitting.";
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.6";
            submitBtn.textContent = "📡 Transmitting via AJAX...";
            
            contactMessage.style.backgroundColor = "#fcf8e3";
            contactMessage.style.color = "#8a6d3b";
            contactMessage.style.border = "1px solid #faebcc";
            contactMessage.textContent = "⚡ Uploading ticket payload to Urban Brew customer relational database...";

            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.textContent = "Send Message";
                
                contactMessage.style.backgroundColor = "#e6ffe6";
                contactMessage.style.color = "#008000";
                contactMessage.style.border = "1px solid #008000";
                contactMessage.innerHTML = "✅ <strong>Thank you, " + nameValue + "!</strong> Your data has been securely processed. A unique support ticket has been opened for your " + typeValue.toLowerCase() + ". An operator will reply within 24 business hours.";
                contactForm.reset(); 
            }, 1500);
        });
    }

    // === 3. INTERACTIVE LIGHTBOX GALLERY ===
    const galleryImages = document.querySelectorAll('.home-gallery img, .about-gallery img');

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    Object.assign(lightbox.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
        cursor: 'zoom-out'
    });

    const lightboxImg = document.createElement('img');
    Object.assign(lightboxImg.style, {
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        transform: 'scale(0.9)',
        transition: 'transform 0.3s ease'
    });

    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.style.transition = "transform 0.4s ease, filter 0.4s ease";
        img.style.cursor = "zoom-in";

        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.05)";
            img.style.filter = "brightness(1.1)";
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
            img.style.filter = "brightness(1)";
        });

        img.addEventListener('click', () => {
            lightboxImg.src = img.src; 
            lightbox.style.display = 'flex'; 
            setTimeout(() => lightboxImg.style.transform = 'scale(1)', 10); 
        });
    });

    lightbox.addEventListener('click', () => {
        lightboxImg.style.transform = 'scale(0.9)'; 
        setTimeout(() => {
            lightbox.style.display = 'none'; 
        }, 200);
    });

    // === 4. PRODUCT SEARCH, FILTER & SORT ENGINE ===
    const searchBar = document.getElementById('searchBar');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceSorter = document.getElementById('priceSorter');
    const menuCategories = document.querySelectorAll('.menu-category');

    if (searchBar && categoryFilter) {
        function filterAndSortProducts() {
            const searchText = searchBar.value.toLowerCase().trim();
            const selectedCategory = categoryFilter.value;

            menuCategories.forEach(category => {
                const categoryType = category.getAttribute('data-category');
                const items = category.querySelectorAll('.menu-list li');
                let visibleItemsCount = 0;

                items.forEach(item => {
                    const itemName = item.querySelector('.item-name').textContent.toLowerCase();
                    const matchesSearch = itemName.includes(searchText);
                    
                    if (matchesSearch) {
                        item.style.display = ""; 
                        visibleItemsCount++;
                    } else {
                        item.style.display = "none"; 
                    }
                });

                const matchesCategory = (selectedCategory === "all" || categoryType === selectedCategory);

                if (matchesCategory && visibleItemsCount > 0) {
                    category.style.display = "";
                } else {
                    category.style.display = "none";
                }
            });
        }

        searchBar.addEventListener('input', filterAndSortProducts);
        categoryFilter.addEventListener('change', filterAndSortProducts);
    }

    if (priceSorter) {
        priceSorter.addEventListener('change', function () {
            const sortBy = this.value;
            if (sortBy === "default") return;

            menuCategories.forEach(category => {
                const menuList = category.querySelector('.menu-list');
                if (!menuList) return;
                
                const items = Array.from(menuList.querySelectorAll('li'));

                items.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector('.item-price').textContent.replace('R', ''));
                    const priceB = parseFloat(b.querySelector('.item-price').textContent.replace('R', ''));
                    
                    return sortBy === 'low-high' ? priceA - priceB : priceB - priceA;
                });

                items.forEach(item => menuList.appendChild(item));
            });
        });
    }
});