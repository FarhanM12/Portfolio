// animations.js for Skills Section

// Scroll Event for Animating the Skills Section
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills-section');
    const skillItems = document.querySelectorAll('.skill-item');

    const sectionPosition = skillsSection.getBoundingClientRect().top;

    if (sectionPosition < window.innerHeight - 100) {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200); // Staggered animation
        });
    }
});

// Intersection Observer for Skill Items Animation
const skillItems = document.querySelectorAll('.skill-item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}, {
    threshold: 0.5  // Trigger when 50% of the element is visible
});

skillItems.forEach(item => {
    observer.observe(item);
});
// JavaScript to handle dynamic percentage and trigger animation
document.querySelectorAll('.progress-circle').forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        const progress = circle.getAttribute('data-progress'); // Get the percentage from data attribute
        const progressBar = circle.querySelector('.progress-bar');
        const progressText = circle.querySelector('.progress-text');
        
        // Animate progress bar and percentage text
        progressBar.style.strokeDashoffset = (283 - (283 * progress / 100)) + 'px';
        
        // Update the percentage text
        let start = 0;
        const end = progress;
        const interval = setInterval(() => {
            if (start < end) {
                start++;
                progressText.textContent = `${start}%`;
            } else {
                clearInterval(interval);
            }
        }, 30); // Update every 30ms
    });
});
