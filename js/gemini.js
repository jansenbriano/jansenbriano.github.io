
        // // Mobile Menu Handling
        // const menuToggle = document.querySelector('.menu-toggle');
        // const navLinks = document.querySelector('.nav-links');

        // menuToggle.addEventListener('click', () => {
        //     navLinks.classList.toggle('active');
        // });

        // // Close menu when clicking outside
        // document.addEventListener('click', (e) => {
        //     if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        //         navLinks.classList.remove('active');
        //     }
        // });

        // // Smooth Scrolling
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function(e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });

        // // Theme Toggle
        // const themeSwitch = document.querySelector('.theme-switch input');
        // themeSwitch.addEventListener('change', () => {
        //     document.body.classList.toggle('dark-theme');
        // });

        // // Animated Counters
        // const animateCounters = () => {
        //     const counters = document.querySelectorAll('.counter');
        //     counters.forEach(counter => {
        //         const target = +counter.dataset.target;
        //         const increment = target / 100;
        //         let count = 0;
                
        //         const updateCounter = () => {
        //             if (count < target) {
        //                 count += increment;
        //                 counter.textContent = Math.ceil(count);
        //                 requestAnimationFrame(updateCounter);
        //             } else {
        //                 counter.textContent = target;
        //             }
        //         };
        //         updateCounter();
        //     });
        // };

        // // Loading Animation
        // // window.addEventListener('load', () => {
        // //     const loader = document.querySelector('.loader');
        // //     loader.style.display = 'flex';
        // //     setTimeout(() => {
        // //         loader.style.display = 'none';
        // //     }, 1000); // 1000 means 1 second (total rotation time)
        // // });

        // // Update your loading animation code to this:
        // window.addEventListener('load', () => {
        //     const loader = document.querySelector('.loader');
        //     loader.style.display = 'flex';
            
        //     setTimeout(() => {
        //         loader.style.display = 'none';
        //         document.body.classList.add('loaded');
        //         animateCounters(); // Start counter animation after loading
        //     }, 1000);
        // });