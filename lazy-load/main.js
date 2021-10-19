// Ленивая загрузка изображений при скроле страницы

// ищем на странице элементы под наши условия - картинки с нужными атрибутами
const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
// сохраняем в константу видимую высоту экрана на устройстве посетителя сайта БЕЗ СКРОЛОВ
const windowHeight = document.documentElement.clientHeight;

// Собираем в массив данные о положении всех найденных изображений на странице. Положение относительна верхнего края экрана устройства
// пустой массив
let lazyImagesPositions = [];
// Проверяем, есть ли на странице нужные нам элементы
if (lazyImages.length > 0) {
  // если есть - пробегаем по массиву
  lazyImages.forEach(img => {
    // Проверяем заполнены ли требуемые нам атрибуты srcили srcset
    if (img.dataset.src || img.dataset.srcset) {
      // У тех элеметов, которые имеют заполненные атрибуты - определяем положение относительно верхнего края экрана
      lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
      // Все положения найденных элементов собираются в массив
      lazyScrollCheck();
    }
  });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
    lazyScrollCheck();
  }
}

// Функция проверки положения окна посетителя (проверяем, дошёл ли посетитель до скрытых картинок)
function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex(
    item => pageYOffset > item - windowHeight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute('data-src');
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
      lazyImages[imgIndex].removeAttribute('data-srcset');
    }
    delete lazyImagesPositions[imgIndex];
  }
}
