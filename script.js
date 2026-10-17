document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark Mode implementation)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  
  // Системийн болон өмнө сонгосон горимыг шалгах
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeText.textContent = 'Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeText.textContent = 'Dark Mode';
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme === 'light') {
      newTheme = 'dark';
      themeText.textContent = 'Light Mode';
    } else {
      themeText.textContent = 'Dark Mode';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // 2. Flip Toggle Button Handler (Мобайл дээр болон товчлуур дарахад)
  const flipButtons = document.querySelectorAll('.btn-flip');

  flipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardInner = button.closest('.card-inner');
      if (cardInner) {
        cardInner.classList.toggle('is-flipped');
      }
    });
  });
});