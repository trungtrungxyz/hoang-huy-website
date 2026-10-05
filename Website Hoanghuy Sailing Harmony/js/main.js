// ABOUT IMAGE SLIDER
let currentAboutSlide = 0;
const aboutSlides = document.querySelectorAll('.about-slide');
const aboutDots = document.querySelectorAll('.about-dot');
const totalAboutSlides = aboutSlides.length;
let aboutSlideInterval;

function showAboutSlide(index) {
    // Reset tất cả
    aboutSlides.forEach(slide => slide.classList.remove('active'));
    aboutDots.forEach(dot => dot.classList.remove('active'));
    
    // Xử lý vòng lặp
    if (index >= totalAboutSlides) currentAboutSlide = 0;
    else if (index < 0) currentAboutSlide = totalAboutSlides - 1;
    else currentAboutSlide = index;
    
    // Hiển thị slide hiện tại
    aboutSlides[currentAboutSlide].classList.add('active');
    aboutDots[currentAboutSlide].classList.add('active');
}

function goToAboutSlide(index) {
    showAboutSlide(index);
    resetAboutInterval();
}

function startAboutInterval() {
    aboutSlideInterval = setInterval(() => {
        showAboutSlide(currentAboutSlide + 1);
    }, 4000); // Tự động chuyển mỗi 4 giây
}

function resetAboutInterval() {
    clearInterval(aboutSlideInterval);
    startAboutInterval();
}

// Khởi chạy slider
if (aboutSlides.length > 0) {
    startAboutInterval();
}