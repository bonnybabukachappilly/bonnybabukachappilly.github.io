document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            let icon = this.querySelector("i");
            if (this.getAttribute("aria-expanded") === "true") {
                icon.classList.replace("bi-chevron-down", "bi-chevron-up"); // Expand
            } else {
                icon.classList.replace("bi-chevron-up", "bi-chevron-down"); // Collapse
            }
        });
    });
});
