// Toggle the main menu (mobile view)
const mainMenuToggle = document.querySelector('[data-collapse-toggle="mega-menu-full"]');
const mainMenu = document.getElementById('mega-menu-full');

mainMenuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('hidden');
});

// Toggle the dropdown menu
const dropdownToggle = document.getElementById('mega-menu-full-dropdown-button');
const dropdownMenu = document.getElementById('mega-menu-full-dropdown');

dropdownToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent triggering document click event
  dropdownMenu.classList.toggle('hidden');
});

// Optional: Close the dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});