var typed = new Typed(".multiple-text", {
    strings: ["Robotics Engineer", "Electrical Engineer", "ROS Developer", "Python Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})


function toggleMenu() {
    const menu = document.querySelector(".mobile-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}