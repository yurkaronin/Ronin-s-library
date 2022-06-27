ymaps.ready(function () {
  let myMap = new ymaps.Map("map", {
    center: [47.268013, 39.682116],
    zoom: 12
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // myMap.controls.remove('zoomControl');
  // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  // myMap.behaviors.disable(['scrollZoom']);
  // отключаем скролл карты (опционально)

  var markers = [
    {
    id: 'placemark1',
    coord: [47.225444, 39.739285],
    title: 'ЕвроДон Центральный',
    text: 'г. Ростов-на-Дону, ул. Социалистическая, 208',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark2',
    coord: [47.134882, 39.763387],
    title: 'ЕвроДон Батайск',
    text: 'г. Батайск ул. Коммунистичекая, 182',
    footer: 'Пн-Пт: 7:30 - 19:00;<br>Сб: 08:00 - 16:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark3',
    coord: [47.283933, 39.502265],
    title: 'ЕвроДон Чалтырь 2',
    text: 'с. Чалтырь ул. Мясникяна, 90',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 08:30 - 16:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark4',
    coord: [47.228283, 39.720879],
    title: 'ЕвроДон Центр',
    text: 'г. Ростов-на-Дону, ул. М.Горького, 181',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark5',
    coord: [47.213258, 38.913266],
    title: 'ЕвроДон Таганрог',
    text: 'г. Таганрог, ул. Чехова, 159',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark6',
    coord: [47.312209, 39.681658],
    title: 'ЕвроДон Суворовский',
    text: 'г. Ростов-на-Дону, ул. Уланская, 17',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark7',
    coord: [47.211287, 39.675092],
    title: 'ЕвроДон Сокол',
    text: 'г. Ростов-на-Дону, пр. Стачки, 16',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark8',
    coord: [47.252975, 39.770484],
    title: 'ЕвроДон Сельмаш',
    text: 'г. Ростов-на-Дону, ул. Металлургическая, 107',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark9',
    coord: [47.290815, 39.71521],
    title: 'ЕвроДон Северный',
    text: 'г. Ростов-на-Дону, пр. Космонавтов, 6/1 Г.П. № 16',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark10',
    coord: [46.935353, 39.682485],
    title: 'ЕвроДон Самарское',
    text: 'с. Самарское, ул. Ленина, д 97',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark11',
    coord: [47.249115, 39.720097],
    title: 'ЕвроДон Ленина',
    text: 'г. Ростов-на-Дону, ул. Ленина, 111',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark12',
    coord: [47.225071, 39.595052],
    title: 'ЕвроДон Левенцовка',
    text: 'г. Ростов-на-Дону, ул. Ткачева, 19',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark13',
    coord: [47.22496, 39.617968],
    title: 'ЕвроДон Западный',
    text: 'Россия, Ростов-на-Дону, микрорайон Западный, улица Зорге, 2',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark14',
    coord: [47.22496, 39.617968],
    title: 'ЕвроДон Западный 2',
    text: 'г. Ростов-на-Дону, ул. 339-й Стрелковой Дивизии, 16',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark15',
    coord: [47.268013, 39.682116],
    title: 'ЕвроДон Вавилова',
    text: 'г. Ростов-на-Дону, ул. Вавилова, 57',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark16',
    coord: [447.268013, 39.682116],
    title: 'ЕвроДон Вавилова (Анализы на COVID-19)',
    text: 'г. Ростов-на-Дону, ул. Вавилова, 57',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
  {
    id: 'placemark17',
    coord: [47.235516, 39.804979],
    title: 'ЕвроДон Александровка',
    text: 'г. Ростов-на-Дону, пр. 40-летия Победы, 154',
    footer: 'Пн-Пт: 7:30 - 20:00;<br>Сб: 7:30 - 17:00;<br>Вс: 8:00 - 14:00',
    __placemark: null
  },
];



  for (var i = 0, placemark; i < markers.length; i++) {
    placemark = markers[i];

    placemark.__placemark = new ymaps.Placemark(placemark.coord, {
      balloonContentHeader: placemark.title,
      balloonContentBody: placemark.text,
      balloonContentFooter: placemark.footer,
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map/balun.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -25]
    });

    myMap.geoObjects.add(placemark.__placemark);
  }

// Для фильтрации при условии что есть параметр события. Например атрибут и т п
// можешь использовать для привязки к дата атрибуту в селекте, или просто передавай id (например для странички с отдельным филиалом )

  // var id = 'placemark1';
  // myMap.geoObjects.removeAll();
  // for (var i = 0, placemark; i < markers.length; i++) {
  //   placemark = markers[i];
  //   if (id === placemark.id) {
  //     myMap.geoObjects.add(placemark.__placemark);
  //     myMap.setCenter(placemark.coord, 19);
  //     placemark.__placemark.balloon.open();
  //     break;

  //   }
  // }



});
