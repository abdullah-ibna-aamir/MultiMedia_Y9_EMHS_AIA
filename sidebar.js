document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const hoverZone = document.getElementById('hover-zone');
  const mainContent = document.getElementById('main-content');

  function showSidebar() {
    sidebar.classList.remove('hidden');
    if (mainContent) mainContent.classList.add('sidebar-visible');
  }
  function hideSidebar() {
    sidebar.classList.add('hidden');
    if (mainContent) mainContent.classList.remove('sidebar-visible');
  }

  if (hoverZone && sidebar) {
    hoverZone.addEventListener('mouseenter', showSidebar);
    sidebar.addEventListener('mouseleave', hideSidebar);
    hideSidebar(); // On page load, sidebar is hidden
  }

  // Animate timeline dots (if present)
  document.querySelectorAll('.dot').forEach((d,i)=>d.animate([
    {transform:'translateY(0)'},{transform:'translateY(-7px)'},{transform:'translateY(0)'}
  ],{duration:1600+i*100,iterations:Infinity,direction:'alternate',easing:'ease-in-out'}));
});