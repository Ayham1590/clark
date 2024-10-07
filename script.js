document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('kingVideo');
    video.muted = false; // Unmute the video

    // If the user is on a mobile device, handle autoplay differently
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        video.play();
    }
});

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Event listener for the next button
document.querySelector('.next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Move to the next item, loop to start if at end
    updateCarousel();
});

// Event listener for the previous button
document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move to previous item, loop to end if at start
    updateCarousel();
});

// Function to update the carousel position
function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * (100 / 3);  // Adjust slide width based on 3 items per slide
    carousel.style.transform = `translateX(${offset}%)`;
}

