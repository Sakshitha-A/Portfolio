VANTA.NET({
  el: "#particle-container",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xbfe6ff,
  backgroundColor: 0x000000,
  points: 10.00,
  maxDistance: 19.00,
  spacing: 16.00,
  showDots: false
});

// Function to show the "About Me" section after scrolling
function checkScroll() {
  const about = document.getElementById('about');
  const aboutPosition = about.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (aboutPosition <= windowHeight) {
    about.classList.add('visible');
  }
}

// Function to show content text after scrolling
function showContentText() {
  const contentText = document.querySelector('.content p');
  const contentPosition = contentText.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contentPosition <= windowHeight) {
    contentText.classList.add('visible');
  }
}

window.addEventListener('scroll', () => {
  checkScroll();
  showContentText();
});

// Check scroll position on page load
checkScroll();
showContentText();
