import '../node_modules/shabnam-font/dist/font-face.css';
import '../node_modules/animate.css/source/animate.css';
import './scss/main.scss';
import './css/main.css';
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav') as HTMLDivElement;
if (hamburger !== null && nav !== null) {
  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('is-active');
    if (isActive) {
      nav.classList.remove('hidden');
      nav.classList.add('animated', 'bounceInDown');
    } else {
      nav.classList.add('animated', 'bounceOutUp');
    }
  });
  nav.addEventListener('animationend', () => {
    nav.className = '';
    if (!hamburger.classList.contains('is-active')) {
      nav.classList.add('hidden');
    }
  });
}

const lazyImages = [...document.querySelectorAll('img.lazy')];

const lazyImageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target as HTMLImageElement;
      lazyImage.src = lazyImage.dataset.src || '';
      lazyImage.srcset = lazyImage.dataset.srcset || '';
      lazyImage.classList.remove('lazy');
      lazyImageObserver.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach((lazyImage) => {
  lazyImageObserver.observe(lazyImage);
});
// animation cross
const searchIcon = document.querySelector<SVGElement>('.search-icon');
if (searchIcon !== null) {
  const toggleSearch = () => {
    const searchInput = document.querySelector<HTMLInputElement>('#search');
    if (searchInput !== null) {
      searchInput.classList.toggle('w-0');
      searchInput.classList.toggle('w-48');
    }
    searchIcon.querySelectorAll('*').forEach((entry) => {
      entry.classList.toggle(entry.classList[0] + '--cross');
    });
  };
  searchIcon.addEventListener('click', toggleSearch);
}
