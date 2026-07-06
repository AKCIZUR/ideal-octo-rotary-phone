(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');

  const savedTheme = localStorage.getItem('theme');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (preferredDark ? 'dark' : 'light');
  root.dataset.theme = theme;
  if (themeToggle) themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
  });

  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    if (mobilePanel) mobilePanel.hidden = expanded;
  });
})();
