document.addEventListener("DOMContentLoaded", function () {
    const experienceContainer = document.querySelector(".experience-container");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (!experienceContainer) {
        return;
    }

    experienceContainer.addEventListener("click", function (event) {
        const clickedCard = event.target.closest(".experience-card");

        if (!clickedCard) {
            return;
        }

        if (window.innerWidth <= 1024) {
            const isActive = clickedCard.classList.contains("active");

            document.querySelectorAll(".experience-card").forEach((card) =>
                card.classList.remove("active")
            );

            if (!isActive) {
                clickedCard.classList.add("active");
            }
        }
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".experience-card") && window.innerWidth <= 1024) {
            document.querySelectorAll(".experience-card").forEach((card) =>
                card.classList.remove("active")
            );
        }
    });

    if (navbarToggler && navbarCollapse) {
        navLinks.forEach((link) => {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 1024) {
                    navbarToggler.classList.add("collapsed");
                    navbarCollapse.classList.remove("show");
                }
            });
        });
    }
});
