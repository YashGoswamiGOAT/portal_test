// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const pages = document.querySelectorAll('.page');
    const menuLinks = document.querySelectorAll('.menu a');

    const calendar = document.querySelector('.calendar');
    const daysInMonth = 31; // Example for January

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.textContent = i;
        if (i === 5 || i === 12 || i === 19) {
            day.style.color = 'red'; // Marking some days as absent
        }
        calendar.appendChild(day);
    }


    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('You liked this notification!');
        });
    });

    // Show the first page by default
    pages[0].classList.add('active');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Handle navigation
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = document.querySelector(link.getAttribute('href'));

            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));

            // Show the target page
            targetPage.classList.add('active');

            // Hide sidebar on mobile after selection
            sidebar.classList.remove('active');
        });
    });

    // Swipe detection using Hammer.js
    const hammertime = new Hammer(document.querySelector('.main-content'));

    hammertime.on('swiperight', () => {
        sidebar.classList.add('active');
    });

    hammertime.on('swipeleft', () => {
        sidebar.classList.remove('active');
    });
});
