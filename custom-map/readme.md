# Подключение Яндекс карты на сайт

Для правильной работы скрипта необходимо зарегистрироваться в (кабинете разработчика) [https://developer.tech.yandex.ru/services/]
и получить ключ, который будем использовать при подключении яндекс карты на сайт.

    <script src="https://api-maps.yandex.ru/2.1/?apikey=тутБудетВашКлюч&amp;lang=ru_RU"></script>

## Как создать блок с картой на сайте

1. Создать в разметке блок с идентификатором. Например вот так:

        <div id="map" class="map"></div>

2. Добавить css-стили с параметрами высоты и ширины для контейнера с картой:

        .map {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 10;
        }
3. В JS-файле инициализировать DOM-элемент с нашей картой:

        let center = [47.268013, 39.682116];
        
        function init() {
        let map = new ymaps.Map("map", {
          center: center, // ваши данные
          zoom: 12
          });
          }

          ymaps.ready(init);

    - В переменную center сохраняем координаты с центром карты, который можно узнать на (стороннем сервисе) [https://snipp.ru/tools/address-coord]
    - В параметр zoom передаём значение исходного масштаба карты.

## Как скрыть управляющие элементы карты

Используем CSS стили:

      /** dealer-detail */
      [class*="copyrights-pane"] {
        display: none !important;
      }

и параметры в JS:

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

## Как сделать карту чёрно-белой

Используем css-стили для карты:

      [class*="ground-pane"] {
        filter: grayscale(1);
      }

## Как добавлять маркеры на карту

### Стандартные маркеры

Пишем в JS-файле:

1. Объявляем переменную, в которую сохраняем маркер.
2. В качестве базового параметра задаём ему координаты
3. Добавляем маркер на нашу карту

        let placemarkDemo = new ymaps.Placemark([47.225466, 39.739299], {}, {
          });

        map.geoObjects.add(placemarkDemo);

### Кастомные маркеры

Отличие от добавления стандартных маркетов лишь в параметрах для метки:

    let placemarkDemo = new ymaps.Placemark([47.225466, 39.739299], {}, {
        iconLayout: 'default#image', /*  шаблон иконки */
        iconImageHref: '../img/map/balun.svg', /*  путь до нашей иконки  */
        iconImageSize: [64, 64], /* размеры картинки  */
        iconImageOffset: [-15, -15] /* отступ от центра  */
      });

## Как создавать балуны для карты - подсказки, которые показываются при клике по гео-метке

### Добавление стандартных балунов

Данные балуна добавляются в параметрах гео-метки.

      let placemarkDemo = new ymaps.Placemark([47.225466, 39.739299], {
      balloonContentHeader: "Название балуна",
      balloonContentBody: "Краткое описание балуна",
      balloonContentFooter: "Подвал балуна"
    }, {
      iconLayout: 'default#image', /*  шаблон иконки */
      iconImageHref: '../img/map/balun-2.svg', /*  путь до нашей иконки  */
      iconImageSize: [64, 64], /* размеры картинки  */
    });

### Добавление кастомных балунов

1. Создадим переменную
2. продублируем в неё все наши параметры из стандартного балуна
3. удалим все стандартные параметры балуна и добавим кастомный параметр
4. В кастомный параметр передадим html-разметку с любыми данными на своё усмотрение.

Готово:

    let placemarkDemo2 = new ymaps.Placemark([47.225566, 39.739399], {
        balloonContent: `
        <div class="custom-baloon">
            <h2 class="custom-baloon__title">Заголовок</h2>
            <p class="custom-baloon__text">Какое то произвольное описание</p>
            <hr class="custom-baloon__border">
            <ul class="custom-baloon__list">
              <li class="custom-baloon__list-item">Телефон: <a href="tel:89180890880">8(918) 089-08-80</a></li>
              <li class="custom-baloon__list-item">"Электропочта": <a href="mailto:roninyurka@mail.ru">roninyurka@mail.ru</a></li>
            </ul>
        </div>
        `,
      }, {
        iconLayout: 'default#image',
        /*  шаблон иконки */
        iconImageHref: '../img/map/balun-2.svg',
        /*  путь до нашей иконки  */
        iconImageSize: [64, 64],
        /* размеры картинки  */
      });

К кастомному балуну можно применять свои стили без каких либо сложностей, или использовать микроразметку.
  
### Как разместить на карту раскрытый балун (что бы он показывался сразу же при загрузке карты)

Для этого необходимо применить метод .open:

    map.geoObjects.add(placemarkDemo2);
    placemarkDemo2.balloon.open();

---
;) ENJOY, BRO!
