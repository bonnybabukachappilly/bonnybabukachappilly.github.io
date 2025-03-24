document.addEventListener("DOMContentLoaded", function () {
    console.log("Experience JavaScript loaded!"); // Check if this appears in browser console

    const entries = document.querySelectorAll(".experience-entry");
    console.log("Total experience entries found:", entries.length); // Debugging

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    entries.forEach((entry) => observer.observe(entry));
});
