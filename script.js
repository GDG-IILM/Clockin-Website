// // // Smooth scrolling for navigation links
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //     anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         document.querySelector(this.getAttribute('href')).scrollIntoView({
// //             behavior: 'smooth'
// //         });
// //     });
// // });

// // // Animate elements on scroll
// // const observerOptions = {
// //     threshold: 0.1,
// //     rootMargin: '0px 0px -50px 0px'
// // };

// // const observer = new IntersectionObserver((entries) => {
// //     entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //             entry.target.classList.add('visible');
// //         }
// //     });
// // }, observerOptions);

// // // Observe all elements with animate-on-scroll class
// // document.querySelectorAll('.animate-on-scroll').forEach(el => {
// //     observer.observe(el);
// // });

// // // Add some interactive hover effects
// // document.querySelectorAll('.feature-card').forEach(card => {
// //     card.addEventListener('mouseenter', function() {
// //         this.style.transform = 'translateY(-10px) scale(1.02)';
// //     });
    
// //     card.addEventListener('mouseleave', function() {
// //         this.style.transform = 'translateY(-10px) scale(1)';
// //     });
// // });

// // // Parallax effect for hero section
// // window.addEventListener('scroll', () => {
// //     const scrolled = window.pageYOffset;
// //     const hero = document.querySelector('.hero');
// //     if (hero) {
// //         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
// //     }
// // });


// // mine changes

//  // Navbar scroll effect
//         window.addEventListener('scroll', () => {
//             const navbar = document.querySelector('.navbar');
//             const scrollProgress = document.querySelector('.scroll-progress');
            
//             if (window.scrollY > 50) {
//                 navbar.classList.add('scrolled');
//             } else {
//                 navbar.classList.remove('scrolled');
//             }
            
//             // Update scroll progress
//             const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//             const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//             const scrolled = (winScroll / height) * 100;
//             scrollProgress.style.width = scrolled + '%';
//         });

//         // Mobile menu toggle
//         const mobileMenu = document.querySelector('.mobile-menu');
//         const navLinks = document.querySelector('.nav-links');

//         mobileMenu.addEventListener('click', () => {
//             mobileMenu.classList.toggle('active');
//             navLinks.classList.toggle('active');
//         });

//         // Close mobile menu when clicking on a link
//         document.querySelectorAll('.nav-links a').forEach(link => {
//             link.addEventListener('click', () => {
//                 mobileMenu.classList.remove('active');
//                 navLinks.classList.remove('active');
//             });
//         });

//         // Smooth scrolling for navigation links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             });
//         });

//         // Animate elements on scroll
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -50px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                 }
//             });
//         }, observerOptions);

//         // Observe all elements with animate-on-scroll class
//         document.querySelectorAll('.animate-on-scroll').forEach(el => {
//             observer.observe(el);
//         });

//         // Enhanced hover effects for feature cards
//         document.querySelectorAll('.feature-card').forEach(card => {
//             card.addEventListener('mouseenter', function() {
//                 this.style.transform = 'translateY(-15px) scale(1.02)';
//                 this.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.2)';
//             });
           
//             card.addEventListener('mouseleave', function() {
//                 this.style.transform = 'translateY(0) scale(1)';
//                 this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
//             });
//         });

//         // Parallax effect for hero section
//         window.addEventListener('scroll', () => {
//             const scrolled = window.pageYOffset;
//             const hero = document.querySelector('.hero');
//             const floatingElements = document.querySelectorAll('.floating-qr, .floating-ticket');
            
//             if (hero) {
//                 hero.style.transform = `translateY(${scrolled * 0.3}px)`;
//             }
            
//             floatingElements.forEach((el, index) => {
//                 const speed = 0.2 + (index * 0.1);
//                 el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
//             });
//         });

//         // Add typing effect to hero title
//         function typeWriter(element, text, speed = 100) {
//             let i = 0;
//             element.innerHTML = '';
            
//             function type() {
//                 if (i < text.length) {
//                     element.innerHTML += text.charAt(i);
//                     i++;
//                     setTimeout(type, speed);
//                 }
//             }
//             type();
//         }

//         // Initialize typing effect on page load
//         window.addEventListener('load', () => {
//             const heroTitle = document.querySelector('.hero h1');
//             const originalText = heroTitle.textContent;
//             setTimeout(() => {
//                 typeWriter(heroTitle, originalText, 150);
//             }, 1000);
//         });

//         // Add glowing effect to CTA buttons
//         document.querySelectorAll('.cta-button').forEach(button => {
//             button.addEventListener('mousemove', (e) => {
//                 const rect = button.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
                
//                 button.style.setProperty('--mouse-x', x + 'px');
//                 button.style.setProperty('--mouse-y', y + 'px');
//             });
//         });

//         // Add counter animation for statistics (if needed)
//         function animateCounter(element, target, duration = 2000) {
//             let start = 0;
//             const increment = target / (duration / 16);
            
//             function updateCounter() {
//                 start += increment;
//                 if (start < target) {
//                     element.textContent = Math.floor(start);
//                     requestAnimationFrame(updateCounter);
//                 } else {
//                     element.textContent = target;
//                 }
//             }
//             updateCounter();
//         }

//         // Intersection Observer for counter animation
//         const counterObserver = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const counter = entry.target;
//                     const target = parseInt(counter.getAttribute('data-target'));
//                     animateCounter(counter, target);
//                     counterObserver.unobserve(counter);
//                 }
//             });
//         });

//         // Add loading animation
//         window.addEventListener('load', () => {
//             document.body.classList.add('loaded');
            
//             // Remove loading class after animations
//             setTimeout(() => {
//                 document.body.classList.add('animations-complete');
//             }, 2000);
//         });

//         // Add scroll-triggered animations for better performance
//         let ticking = false;
        
//         function updateAnimations() {
//             // Add your scroll-based animations here
//             ticking = false;
//         }
        
//         function requestTick() {
//             if (!ticking) {
//                 requestAnimationFrame(updateAnimations);
//                 ticking = true;
//             }
//         }
        
//         window.addEventListener('scroll', requestTick);

//         // Download App Function
//         function downloadApp() {
//             // Option 1: Direct download from your server
//             // window.location.href = 'download/Clockin.apk';
            
//             // Option 2: Google Play Store (recommended)
//             // window.open('https://play.google.com/store/apps/details?id=com.devopify.clockin', '_blank');
            
//             // Option 3: GitHub Releases
//             // window.open('https://github.com/yourusername/clockin/releases/latest/download/Clockin.apk', '_blank');
            
//             // Option 4: Show download modal with options
//             showDownloadModal();
//         }

//         function showDownloadModal() {
//             // Create modal
//             const modal = document.createElement('div');
//             modal.style.cssText = `
//                 position: fixed;
//                 top: 0;
//                 left: 0;
//                 width: 100%;
//                 height: 100%;
//                 background: rgba(0, 0, 0, 0.8);
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 z-index: 2000;
//                 animation: fadeIn 0.3s ease;
//             `;

//             const modalContent = document.createElement('div');
//             modalContent.style.cssText = `
//                 background: white;
//                 padding: 2rem;
//                 border-radius: 20px;
//                 text-align: center;
//                 max-width: 400px;
//                 width: 90%;
//                 animation: slideIn 0.3s ease;
//             `;

//             modalContent.innerHTML = `
//                 <h3 style="margin-bottom: 1rem; color: #333;">Download Clock-in</h3>
//                 <p style="margin-bottom: 2rem; color: #666;">Choose your preferred download method:</p>
                
//                 <div style="display: flex; flex-direction: column; gap: 1rem;">
//                     <button onclick="directDownload()" style="
//                         background: linear-gradient(135deg, #2c3e50, #34495e);
//                         color: white;
//                         border: none;
//                         padding: 1rem;
//                         border-radius: 10px;
//                         cursor: pointer;
//                         font-size: 1rem;
//                         transition: all 0.3s ease;
//                     ">
//                         <i class="fas fa-download"></i> Direct APK Download
//                     </button>
                    
//                     <button onclick="window.open('https://play.google.com/store', '_blank')" style="
//                         background: #4285f4;
//                         color: white;
//                         border: none;
//                         padding: 1rem;
//                         border-radius: 10px;
//                         cursor: pointer;
//                         font-size: 1rem;
//                         transition: all 0.3s ease;
//                     ">
//                         <i class="fab fa-google-play"></i> Google Play Store
//                     </button>
                    
//                     <button onclick="closeModal()" style="
//                         background: #e9ecef;
//                         color: #333;
//                         border: none;
//                         padding: 0.8rem;
//                         border-radius: 10px;
//                         cursor: pointer;
//                         font-size: 0.9rem;
//                     ">
//                         Cancel
//                     </button>
//                 </div>
//             `;

//             modal.appendChild(modalContent);
//             document.body.appendChild(modal);

//             // Add click outside to close
//             modal.addEventListener('click', (e) => {
//                 if (e.target === modal) {
//                     closeModal();
//                 }
//             });

//             // Functions for modal
//             window.directDownload = () => {
//                 // Replace with your actual APK URL
//                 const apkUrl = 'download/Clockin.apk'; // Change this to your actual APK path
                
//                 // Check if file exists, if not show error
//                 fetch(apkUrl, { method: 'HEAD' })
//                     .then(response => {
//                         if (response.ok) {
//                             window.location.href = apkUrl;
//                         } else {
//                             alert('APK file not found. Please contact support or try Google Play Store.');
//                         }
//                     })
//                     .catch(() => {
//                         alert('Download temporarily unavailable. Please try again later.');
//                     });
                
//                 closeModal();
//             };

//             window.closeModal = () => {
//                 modal.remove();
//                 delete window.directDownload;
//                 delete window.closeModal;
//             };
//         }

//         // Add CSS animations
//         const style = document.createElement('style');
//         style.textContent = `
//             @keyframes fadeIn {
//                 from { opacity: 0; }
//                 to { opacity: 1; }
//             }
//             @keyframes slideIn {
//                 from { transform: translateY(-50px); opacity: 0; }
//                 to { transform: translateY(0); opacity: 1; }
//             }
//         `;
//         document.head.appendChild(style);

//         // Add focus management for accessibility
//         document.addEventListener('keydown', (e) => {
//             if (e.key === 'Tab') {
//                 document.body.classList.add('keyboard-navigation');
//             }
//         });

//         document.addEventListener('mousedown', () => {
//             document.body.classList.remove('keyboard-navigation');
//         });