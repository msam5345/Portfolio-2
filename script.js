// Initialize the Typed.js animation
const typed = new Typed('.text', {
    strings: ["Social Influencer", "Web Designer", "Frontend developer", "UI/UX Enthusiast"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

// Grab sections and nav links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let navbarLinks = document.querySelector('.navbar');
let menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click',() =>{
    navbarLinks.classList.toggle('active')
})

// Add scroll event listener
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if scroll position is within the section
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Properly construct the selector string with template literals
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                
                // Ensure the element exists before trying to add the class
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};



