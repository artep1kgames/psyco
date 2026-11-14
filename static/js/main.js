document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const openBtn = document.querySelector('.header__mob');
  const closeBtn = document.querySelector('.sidebar__close');
  const underlay = document.querySelector('.sidebar__underlay');
  const desktop = window.matchMedia('(min-width: 1200px)');
  const pageRegions = document.querySelectorAll('header, main, footer');

  if (!sidebar || !openBtn || !closeBtn) return;

  let previousOverflow = '';

  const closeSidebar = ({ restoreFocus = true } = {}) => {
    if (sidebar.hidden) return;
    sidebar.classList.remove('active');
    sidebar.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
    pageRegions.forEach((region) => { region.inert = false; });
    document.body.style.overflow = previousOverflow;
    if (restoreFocus) openBtn.focus();
  };

  openBtn.addEventListener('click', () => {
    if (desktop.matches) return;
    previousOverflow = document.body.style.overflow;
    sidebar.hidden = false;
    sidebar.classList.add('active');
    openBtn.setAttribute('aria-expanded', 'true');
    pageRegions.forEach((region) => { region.inert = true; });
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  });

  closeBtn.addEventListener('click', () => closeSidebar());
  underlay?.addEventListener('click', () => closeSidebar());
  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeSidebar());
  });

  document.addEventListener('keydown', (event) => {
    if (sidebar.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSidebar();
    }
    if (event.key !== 'Tab') return;
    const controls = [...sidebar.querySelectorAll('a[href], button:not([disabled])')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktop.addEventListener('change', () => {
    if (desktop.matches) closeSidebar({ restoreFocus: false });
  });
});
