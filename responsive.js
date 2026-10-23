(() => {
  const nav = document.querySelector('nav');
  const toggle = nav?.querySelector('.nav-toggle');
  const menu = nav?.querySelector('ul');

  if (nav && toggle && menu) {
    const setMenu = (open) => {
      nav.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', () => {
      setMenu(!nav.classList.contains('menu-open'));
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('click', event => {
      if (!nav.contains(event.target)) setMenu(false);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) setMenu(false);
    });
  }

  document.querySelectorAll('.proj, .port-item:not(.coming-soon)').forEach(card => {
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });
})();
