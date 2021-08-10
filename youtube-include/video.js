// найти все видео на странице
function findVideos() {
  // найти все видео
  let videos = document.querySelectorAll('.video');
  // запустить цикл подготовки к показу видео
  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}
// цикл подготовки к показу видео (загрузка необходимых для показа на странице элементов - картинки, иконки и видео файлы на ютубе)
function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL(media);
  // отслеживание клика по видео. При клике выполняем программу ниже
  video.addEventListener('click', () => {
    // создаём внутри элемента(тега) iframe + добавляем к нему необходимые атрибуты
    let iframe = createIframe(id);
    // удаляем ссылку, в которую обёрнуто изображение видео ролика
    link.remove();
    // удаялется кнопка, что бы не мешала просмотру видео
    button.remove();
    // добавляем на страницу созданный ранее iframe
    video.appendChild(iframe);
  });

  // у ссылок в найденных элементах "видео на странице" удаляем атрибут href
  link.removeAttribute('href');
  // добавляем класс к кнопке запуска просмотра видео, для того что бы кнопка показалась на странице
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
