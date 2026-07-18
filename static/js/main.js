document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const openBtn = document.querySelector('.header__mob');
  const closeBtn = document.querySelector('.sidebar__close');
  const underlay = document.querySelector('.sidebar__underlay');

  if (!sidebar || !openBtn) return;

  const openSidebar = () => {
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    sidebar.classList.remove('active');
    document.body.style.overflow = '';
  };

  const MOBILE_WIDTH = 900;

 const handleResize = () => {
    if (window.innerWidth >= MOBILE_WIDTH) {
      closeSidebar();
    }
  };



  const checkScreen = () => {
    if (window.innerWidth >= MOBILE_WIDTH) {
      closeSidebar();
    }
  };

  window.addEventListener('resize', checkScreen);
  window.addEventListener('orientationchange', checkScreen);

  openBtn.addEventListener('click', openSidebar);

  closeBtn?.addEventListener('click', closeSidebar);
  underlay?.addEventListener('click', closeSidebar);

  sidebar.querySelectorAll('.sidebar__menu a').forEach((link) => {
    link.addEventListener('click', closeSidebar);
  });
});
