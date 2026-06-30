document.addEventListener("DOMContentLoaded", function () {
  // === 1. IMAGE LIGHTBOX CLICK VIEWPORT ZOOM POPUP ENGINE ===
  const graphicsLinks = document.querySelectorAll(".graphics-link");
  const lightboxModal = document.getElementById("graphicsModal");
  const modalTargetImg = document.getElementById("modalTargetImg");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (graphicsLinks.length > 0 && lightboxModal && modalTargetImg) {
    graphicsLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation(); // Blocks background track navigation shifts
        const targetedGraphicUrl = this.getAttribute("data-img");
        modalTargetImg.src = targetedGraphicUrl;
        lightboxModal.classList.add("active");
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", function (event) {
        event.preventDefault();
        lightboxModal.classList.remove("active");
      });
    }

    lightboxModal.addEventListener("click", function (event) {
      if (event.target === lightboxModal) {
        lightboxModal.classList.remove("active");
      }
    });
  }

  // === 2. RESPONSIVE MOBILE HAMBURGER DROPDOWN DRAW NAVIGATION ENGINE ===
  const navToggleBtn = document.getElementById("navToggleBtn");
  const navMenu = document.getElementById("navMenu");
  const navMenuLinks = document.querySelectorAll(".nav-menu a");

  if (navToggleBtn && navMenu) {
    // Handle toggling menu panel drawer open or shut state
    navToggleBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      navMenu.classList.toggle("open");

      // Change icon indicator dynamically to 'X' mark symbol when active
      const menuIcon = navToggleBtn.querySelector("i");
      if (navMenu.classList.contains("open")) {
        menuIcon.className = "fa-solid fa-xmark";
      } else {
        menuIcon.className = "fa-solid fa-bars";
      }
    });

    // Automatically slide panel away as soon as an inner anchor option link is clicked
    navMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggleBtn.querySelector("i").className = "fa-solid fa-bars";
      });
    });

    // Retract panel dropdown safely if client taps anywhere else out on the blank site layout background
    document.addEventListener("click", function (event) {
      if (!navMenu.contains(event.target) && event.target !== navToggleBtn) {
        navMenu.classList.remove("open");
        navToggleBtn.querySelector("i").className = "fa-solid fa-bars";
      }
    });
  }

  // ==========================================================================
  // GRAPHICS GALLERY DISPLAY EXPANSION ENGINE
  // ==========================================================================
  const viewAllGraphicsBtn = document.getElementById("viewAllGraphicsBtn");
  const graphicsExtraGrid = document.getElementById("graphicsExtraGrid");

  if (viewAllGraphicsBtn && graphicsExtraGrid) {
    viewAllGraphicsBtn.addEventListener("click", function (event) {
      // Stops anchor tags from jumping back to the home/top view
      event.preventDefault();

      // Toggle the visibility layout class
      graphicsExtraGrid.classList.toggle("reveal");

      // Change button labels dynamically based on current visibility state
      if (graphicsExtraGrid.classList.contains("reveal")) {
        viewAllGraphicsBtn.textContent = "Show Less Graphics";
      } else {
        viewAllGraphicsBtn.textContent = "View All Graphics";
      }
    });
  }
});
