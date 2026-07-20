document.addEventListener('DOMContentLoaded', function () {
  // Создаём контейнер для лайтбокса
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="close-btn">&times;</span>
    <img src="" alt="Увеличенное изображение">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close-btn');

  // Открытие по клику на любое изображение внутри .list-element
  document.querySelectorAll('.list-element img').forEach(img => {
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt || 'Увеличенное изображение';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // запрещаем прокрутку
    });
  });

  // Закрытие по клику на фон (сам оверлей)
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Закрытие по кнопке закрытия
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  // Закрытие по клавише ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});