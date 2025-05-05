document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const progressBar = document.querySelector('.progress-bar');
    
    let currentSlide = 0;
    
    // Update progress bar
    function updateProgress() {
        const progress = (currentSlide / (slides.length - 1)) * 100;
        progressBar.style.width = progress + '%';
    }
    
    // Show slide function
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.zIndex = '-1';
        });
        
        // Set current slide index
        if (n < 0) {
            currentSlide = 0;
        } else if (n >= slides.length) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }
        
        // Show current slide
        slides[currentSlide].classList.add('active');
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].style.zIndex = '1';
        
        // Update progress bar
        updateProgress();
        
        // Debug info
        console.log('Showing slide ' + currentSlide + ' of ' + slides.length);
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
        }
    });
    
    // Touch navigation
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left, go next
            showSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, go previous
            showSlide(currentSlide - 1);
        }
    }
    
    // Initialize all slides with proper styles
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
            slide.style.opacity = '1';
            slide.style.zIndex = '1';
        } else {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.zIndex = '-1';
        }
    });
    
    // Initialize progress bar
    updateProgress();
    
    // Animation effects for elements on slide change
    function animateElements() {
        const currentElements = slides[currentSlide].querySelectorAll('h1, h2, p, ul, ol, .content-box');
        currentElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // Add animation when slides change
    const observerConfig = { attributes: true, attributeFilter: ['class'] };
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && 
                mutation.attributeName === 'class' && 
                mutation.target.classList.contains('active')) {
                animateElements();
            }
        });
    });
    
    slides.forEach(slide => {
        observer.observe(slide, observerConfig);
    });
    
    // Initialize first slide animations
    setTimeout(animateElements, 500);
});
