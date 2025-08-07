// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '2px solid white';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing is done
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }
    type();
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Parallax effect disabled to fix overlapping issues
// function parallaxEffect() {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         const speed = scrolled * 0.5;
//         hero.style.transform = `translateY(${speed}px)`;
//     }
// }

// Particle background effect
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-list li');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100);
        }, index * 100);
    });
}

// Floating animation for project cards
function floatingAnimation() {
    const cards = document.querySelectorAll('.skill-category, .project-category, .experience-item');
    cards.forEach((card, index) => {
        card.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add particles container to hero
    const hero = document.querySelector('.hero');
    if (hero) {
        const particlesDiv = document.createElement('div');
        particlesDiv.classList.add('particles');
        hero.appendChild(particlesDiv);
        createParticles();
    }
    
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.section, .skill-category, .project-category, .experience-item');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Initialize typing effect for hero title
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    }, 1000);
    
    // Initialize floating animation
    setTimeout(() => {
        floatingAnimation();
    }, 2000);
});

// Scroll event listeners
window.addEventListener('scroll', () => {
    // parallaxEffect(); // Disabled to fix overlapping issues
    
    // Add/remove header shadow on scroll
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mouse move parallax effect for cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.skill-category, .project-category');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index % 2 === 0) ? 2 : -2;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        card.style.transition = 'transform 0.3s ease';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger skill bars animation when skills section is visible
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }
});