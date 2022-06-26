function isInternetExplorer() {
  return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}

if (isInternetExplorer() === false) {
  console.log('Отлично, используется современный браузер!');
} else {
  alert('Поддержка браузера IE прекращена разработчиком. Пожалуйста, установите современный браузер');
}
