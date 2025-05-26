const sidebar = document.getElementById('sidebar');
const hoverZone = document.getElementById('hover-zone');
const mainContent = document.getElementById('main-content');
const sidebarLinks = sidebar.querySelectorAll('a');

// Show sidebar when mouse enters the edge zone
hoverZone.addEventListener('mouseenter', () => {
  sidebar.classList.remove('hidden');
});

// Hide sidebar when mouse leaves the sidebar area
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.add('hidden');
});

// Sidebar navigation logic
const pages = {
  home: `<h1>Auto-Hiding Sidebar</h1><p>Welcome to the home page. Use the sidebar to navigate.</p>`,
  about: `<h1>About</h1><p>This is a modern, responsive sidebar demo. Built for your project.</p>`,
  contact: `<h1>Contact</h1><form style="max-width:400px"><label>Name<br><input type="text" placeholder="Your Name" required></label><br><label>Email<br><input type="email" placeholder="you@email.com" required></label><br><label>Message<br><textarea rows="4" placeholder="Your message" required></textarea></label><br><button type="submit">Send</button></form>`
};

sidebarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const page = link.getAttribute('data-page');
    mainContent.innerHTML = pages[page] || pages.home;
  });
});

// Adapt content margin when sidebar is hidden
const updateContentMargin = () => {
  if (sidebar.classList.contains('hidden')) {
    mainContent.style.marginLeft = '40px';
  } else {
    mainContent.style.marginLeft = '240px';
  }
};
sidebar.addEventListener('transitionend', updateContentMargin);
updateContentMargin();

// Responsive: update margin on resize
window.addEventListener('resize', updateContentMargin);
