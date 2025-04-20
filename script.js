// ====================
// Vanta.js Background Effect
// ====================
const vantaEffect = VANTA.NET({
  el: "#background",          // Element where the effect is applied
  mouseControls: true,        // Enable mouse interactions
  touchControls: true,        // Enable touch interactions
  backgroundColor: 0x000011,   // Background color (hex)
  color: 0xff00cc,            // Primary effect color (cyberpunk pink)
  points: 12.0,               // Number of points in the network
  maxDistance: 22.0,          // Maximum distance for connections between points
  spacing: 18.0,              // Spacing between points
  scale: 1.0,                 // General scale
  scaleMobile: 1.0            // Scale on mobile devices
});

// ====================
// Typed.js Text Animation
// ====================
const typed = new Typed("#typed", {
  strings: ["Designer + DEVELOPER", "Tech Wizard", " Crafting Solutions with Code & Curiosity "],
  typeSpeed: 50,        // Typing speed in milliseconds per character
  backSpeed: 30,        // Backspacing speed in milliseconds per character
  backDelay: 1500,      // Delay before backspacing starts (in milliseconds)
  loop: true            // Loop the animation continuously
});

// ====================
// Mobile Menu Toggle
// ====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navbar nav ul");

// Toggle the mobile menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close the mobile menu if clicking outside of it (and if it’s currently open)
document.addEventListener("click", (event) => {
  if (
    !hamburger.contains(event.target) &&
    !navLinks.contains(event.target) &&
    navLinks.classList.contains("show")
  ) {
    navLinks.classList.remove("show");
  }
});

// Ensure the mobile menu is hidden on window resize when above mobile breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
  }
});

// ====================
// AOS (Animate On Scroll) Initialization
// ====================
AOS.init({
  duration: 1000,  // Duration of each AOS animation in milliseconds
  once: true       // Whether each animation should happen only once while scrolling down
});


/*
Note on the Technical Skills Section:
For the Technical Skills section, you now have an HTML layout that places an image at the center (inside the .spider container) 
and distributes the skill pills around it like a spider web. The hover animations are handled via CSS transitions. Hence,
no additional JavaScript is necessary for that section.
*/
// window.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.getElementById("connectorCanvas");
//   const ctx = canvas.getContext("2d");

//   function resizeCanvas() {
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;
//   }

//   function drawConnections() {
//     resizeCanvas();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     const centerBox = document.getElementById("centerNode").getBoundingClientRect();
//     const centerX = centerBox.left + centerBox.width / 2;
//     const centerY = centerBox.top + centerBox.height / 2;

//     document.querySelectorAll(".skill-pill").forEach(pill => {
//       const rect = pill.getBoundingClientRect();
//       const x = rect.left + rect.width / 2;
//       const y = rect.top + rect.height / 2;

//       ctx.beginPath();
//       ctx.moveTo(centerX, centerY);
//       ctx.lineTo(x, y);
//       ctx.strokeStyle = "#ffffff90";
//       ctx.lineWidth = 1.5;
//       ctx.stroke();
//     });
//   }

//   drawConnections();
//   window.addEventListener("resize", drawConnections);
//   window.addEventListener("scroll", drawConnections);
// });
///About MEE
// document.addEventListener('DOMContentLoaded', function() {
//   // Get all tab buttons and pane elements
//   const tabButtons = document.querySelectorAll('.tab-buttons .tab-btn');
//   const tabPanes = document.querySelectorAll('.tab-pane');

//   // Ensure summary is the default active pane (already marked in HTML)
//   // Loop over each tab button
//   tabButtons.forEach(btn => {
//     btn.addEventListener('click', function() {
//       // Remove the active class from all buttons and panes
//       tabButtons.forEach(b => b.classList.remove('active'));
//       tabPanes.forEach(pane => pane.classList.remove('active'));

//       // Mark the clicked button as active
//       this.classList.add('active');

//       // Get the target tab from the "data-tab" attribute
//       const targetTab = this.getAttribute('data-tab');

//       // Activate the corresponding pane by id
//       const activePane = document.getElementById(targetTab);
//       if(activePane) {
//         activePane.classList.add('active');
//       }
//     });
//   });
// });

  function switchTab(tabId) {
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");

    contents.forEach(c => c.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(tabId).style.display = "block";
    event.target.classList.add("active");
  }

