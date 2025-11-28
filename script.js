document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Navbar click - show section
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Hide all sections
            sections.forEach(sec => sec.classList.remove("active"));

            // Show target section
            const target = this.getAttribute("data-section");
            document.getElementById(target).classList.add("active");

            // Close mobile menu
            navMenu.classList.remove("active");
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Form submit alert (demo)
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("ধন্যবাদ! আপনার তথ্য গ্রহণ করা হয়েছে। আমরা শীঘ্রই যোগাযোগ করবো।");
            this.reset();
        });
    });
});