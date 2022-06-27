// Создаём макет содержимого.

function init() {

  let map = new ymaps.Map("map", {
    center: [47.268013, 39.682116], // ваши данные
    zoom: 12
  });

  let placemarkDemo = new ymaps.Placemark([47.225466, 39.739299], {
    balloonContentHeader: "Название балуна",
    balloonContentBody: "Краткое описание балуна",
    balloonContentFooter: "Подвал балуна"
  }, {
    iconLayout: 'default#image',
    /*  шаблон иконки */
    iconImageHref: '../img/map/balun-2.svg',
    /*  путь до нашей иконки  */
    iconImageSize: [64, 64],
    /* размеры картинки  */
  });

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

  map.geoObjects.add(placemarkDemo);

  // ЕвроДон Центральный
  let placemark1 = new ymaps.Placemark([47.225444, 39.739285], {
    balloonContentHeader: "ЕвроДон Центральный",
    balloonContentBody: "г. Ростов-на-Дону, ул. Социалистическая, 208"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Батайск
  let placemark2 = new ymaps.Placemark([47.134882, 39.763387], {
    balloonContentHeader: "ЕвроДон Батайск",
    balloonContentBody: "г. Батайск ул. Коммунистичекая, 182"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Чалтырь 2
  let placemark3 = new ymaps.Placemark([47.283933, 39.502265], {
    balloonContentHeader: "ЕЕвроДон Чалтырь 2",
    balloonContentBody: "с. Чалтырь ул. Мясникяна, 90"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Центр
  let placemark4 = new ymaps.Placemark([47.228283, 39.720879], {
    balloonContentHeader: "ЕвроДон Центр",
    balloonContentBody: "г. Ростов-на-Дону, ул. М.Горького, 181"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Таганрог
  let placemark5 = new ymaps.Placemark([47.213258, 38.913266], {
    balloonContentHeader: "ЕвроДон Таганрог",
    balloonContentBody: "г. Таганрог, ул. Чехова, 159"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Суворовский
  let placemark6 = new ymaps.Placemark([47.312209, 39.681658], {
    balloonContentHeader: "ЕвроДон Суворовский",
    balloonContentBody: "г. Ростов-на-Дону, ул. Уланская, 17"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Сокол
  let placemark7 = new ymaps.Placemark([47.211287, 39.675092], {
    balloonContentHeader: "ЕвроДон Сокол",
    balloonContentBody: "г. Ростов-на-Дону, пр. Стачки, 16"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Сельмаш
  let placemark8 = new ymaps.Placemark([47.252975, 39.770484], {
    balloonContentHeader: "ЕвроДон Сельмаш",
    balloonContentBody: "г. Ростов-на-Дону, ул. Металлургическая, 107"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Северный
  let placemark9 = new ymaps.Placemark([47.290815, 39.71521], {
    balloonContentHeader: "ЕвроДон Северный",
    balloonContentBody: "г. Ростов-на-Дону, пр. Космонавтов, 6/1 Г.П. № 16"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Самарское
  let placemark10 = new ymaps.Placemark([46.935353, 39.682485], {
    balloonContentHeader: "ЕвроДон Самарское",
    balloonContentBody: "с. Самарское, ул. Ленина, д 97"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Ленина
  let placemark11 = new ymaps.Placemark([47.249115, 39.720097], {
    balloonContentHeader: "ЕвроДон Ленина",
    balloonContentBody: "г. Ростов-на-Дону, ул. Ленина, 111"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Левенцовка
  let placemark12 = new ymaps.Placemark([47.225071, 39.595052], {
    balloonContentHeader: "ЕвроДон Левенцовка",
    balloonContentBody: "г. Ростов-на-Дону, ул. Ткачева, 19"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Западный
  let placemark13 = new ymaps.Placemark([47.22496, 39.617968], {
    balloonContentHeader: "ЕвроДон Западный",
    balloonContentBody: "Россия, Ростов-на-Дону, микрорайон Западный, улица Зорге, 2"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Западный
  let placemark14 = new ymaps.Placemark([47.22496, 39.617968], {
    balloonContentHeader: "ЕвроДон Западный 2",
    balloonContentBody: "г. Ростов-на-Дону, ул. 339-й Стрелковой Дивизии, 16"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Вавилова
  let placemark15 = new ymaps.Placemark([47.268013, 39.682116], {
    balloonContentHeader: "ЕвроДон Вавилова",
    balloonContentBody: "г. Ростов-на-Дону, ул. Вавилова, 57"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Вавилова (Анализы на COVID-19)
  let placemark16 = new ymaps.Placemark([447.268013, 39.682116], {
    balloonContentHeader: "ЕвроДон Вавилова (Анализы на COVID-19)",
    balloonContentBody: "г. Ростов-на-Дону, ул. Вавилова, 57"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });
  // ЕвроДон Александровка
  let placemark17 = new ymaps.Placemark([47.235516, 39.804979], {
    balloonContentHeader: "ЕвроДон Александровка",
    balloonContentBody: "г. Ростов-на-Дону, пр. 40-летия Победы, 154"
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/balun.svg',
    iconImageSize: [64, 64],
    /* размеры картинки  */
    iconImageOffset: [-15, -15] /* отступ от центра  */
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl');
  // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']);
  // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
  map.geoObjects.add(placemark8);
  map.geoObjects.add(placemark9);
  map.geoObjects.add(placemark10);
  map.geoObjects.add(placemark11);
  map.geoObjects.add(placemark12);
  map.geoObjects.add(placemark13);
  map.geoObjects.add(placemark14);
  map.geoObjects.add(placemark15);
  map.geoObjects.add(placemark16);
  map.geoObjects.add(placemark17);

  map.geoObjects.add(placemarkDemo);
  map.geoObjects.add(placemarkDemo2);

  placemarkDemo2.balloon.open();


}

ymaps.ready(init);
