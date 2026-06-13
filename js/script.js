document.addEventListener("DOMContentLoaded", function () {

    // === TARGET SELECTORS FOR IMAGES ===
    const graphicsLinks = document.querySelectorAll(".graphics-link");
    const lightboxModal = document.getElementById("graphicsModal");
    const modalTargetImg = document.getElementById("modalTargetImg");
    const lightboxClose = document.querySelector(".lightbox-close");

    // ==========================================================================
    // IMAGE LIGHTBOX CLICK POPUP ENGINE
    // ==========================================================================
    if (graphicsLinks.length > 0 && lightboxModal && modalTargetImg) {

        graphicsLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                // Completely stops the page from flashing or snapping back to home view
                event.preventDefault();
                event.stopPropagation();

                // Fetch the unique image file path from your card
                const targetedGraphicUrl = this.getAttribute("data-img");

                // Inject the image source right into the popup modal frame
                modalTargetImg.src = targetedGraphicUrl;

                // Activate the visibility class styles to show the overlay box
                lightboxModal.classList.add("active");
            });
        });

        // Click the 'X' button layout to safely hide the overlay
        if (lightboxClose) {
            lightboxClose.addEventListener("click", function (event) {
                event.preventDefault();
                lightboxModal.classList.remove("active");
            });
        }

        // Close the popup dynamically if you click anywhere on the dark backdrop boundary spaces
        lightboxModal.addEventListener("click", function (event) {
            if (event.target === lightboxModal) {
                lightboxModal.classList.remove("active");
            }
        });
    }
});

// ==========================================================================
// 3. MOBILE HAMBURGER DROPDOWN DRAW NAVIGATION ENGINE
// ==========================================================================
const navToggleBtn = document.getElementById("navToggleBtn");
const navMenu = document.getElementById("navMenu");
const navMenuLinks = document.querySelectorAll(".nav-menu a");

if (navToggleBtn && navMenu) {
    // Toggle open state on click
    navToggleBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        navMenu.classList.toggle("open");

        // Switch menu icon to 'X' when open
        const menuIcon = navToggleBtn.querySelector("i");
        if (navMenu.classList.contains("open")) {
            menuIcon.className = "fa-solid fa-xmark";
        } else {
            menuIcon.className = "fa-solid fa-bars";
        }
    });

    // Hide dropdown panel automatically when a navigation section link is selected
    navMenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("open");
            navToggleBtn.querySelector("i").className = "fa-solid fa-bars";
        });
    });

    // Hide menu automatically if the user clicks anywhere outside on the blank layout body
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && event.target !== navToggleBtn) {
            navMenu.classList.remove("open");
            navToggleBtn.querySelector("i").className = "fa-solid fa-bars";
        }
    });
}