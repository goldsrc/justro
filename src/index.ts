import './css/main.css';
import './scss/main.scss';

const lazyImages = [...document.querySelectorAll('img.lazy')];

const lazyImageObserver = new IntersectionObserver((entries) => {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const lazyImage = entry.target as HTMLImageElement;
      lazyImage.src = lazyImage.dataset.src || '';
      lazyImage.srcset = lazyImage.dataset.srcset || '';
      lazyImage.classList.remove('lazy');
      lazyImageObserver.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach(function (lazyImage) {
  lazyImageObserver.observe(lazyImage);
});
