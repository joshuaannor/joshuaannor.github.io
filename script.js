// Dark mode toggle
const toggleBtn = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

function setTheme(theme) {
  if (theme === 'light') {
    htmlEl.classList.remove('dark');
    toggleBtn.textContent = '🌞';
  } else {
    htmlEl.classList.add('dark');
    toggleBtn.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = htmlEl.classList.contains('dark') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Loading screen
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
});

// Typed effect
const typed = new Typed('#typed', {
  strings: ['SCADA', 'Python', 'DevOps', 'Cybersecurity'],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});
