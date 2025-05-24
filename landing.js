// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});

// Mobile menu toggle (if needed)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('bg-black', 'bg-opacity-90');
  } else {
    nav.classList.remove('bg-black', 'bg-opacity-90');
  }
});


// Form submission handlers for CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Free trial started!');
    
    // Example: Show success message
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check mr-2"></i>Success!';
    btn.classList.add('bg-green-500');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('bg-green-500');
    }, 2000);
  });
});

// Add entrance animations with delays
window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('#home h1, #home p, #home .btn-primary');
  heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      el.style.transition = 'all 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 200);
  });
});