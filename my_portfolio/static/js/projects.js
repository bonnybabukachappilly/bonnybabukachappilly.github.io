document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselExampleIndicators");

    function disableCarousel() {
        let screenWidth = window.innerWidth;

        if (screenWidth <= 767) {
            // Remove 'carousel-item' class to stop sliding behavior
            document.querySelectorAll(".carousel-item").forEach(item => {
                item.classList.remove("carousel-item");
            });

            // Completely remove Bootstrap carousel instance
            let bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.dispose(); // Stop auto sliding
            }
        }
    }

    disableCarousel(); // Run on page load
    window.addEventListener("resize", disableCarousel); // Run on resize
});
