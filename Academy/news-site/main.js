// Меню
let menu = document.querySelector('.menu');

if (menu) {
  menu.onclick = function () {
    menu.classList.toggle('menu-open');
    menu.classList.toggle('menu-close');
  };
}


// Раскладка статей
let rowViewButton = document.querySelector('.row-view');

if (rowViewButton) {
  let tileViewButton = document.querySelector('.tile-view');
  let newsList = document.querySelector('.news-list');

  rowViewButton.onclick = function () {
    rowViewButton.classList.add('view-checked');
    tileViewButton.classList.remove('view-checked');
    newsList.classList.remove('list-tiles-view');
  };

  tileViewButton.onclick = function () {
    rowViewButton.classList.remove('view-checked');
    tileViewButton.classList.add('view-checked');
    newsList.classList.add('list-tiles-view');
  };
}


// Кукис! Ом-ном-ном...
let cookies = document.querySelector('.cookies-agreement');

if (cookies) {
  let cookiesButton = document.querySelector('.button');

  cookiesButton.onclick = function () {
    cookies.classList.add('cookies-agreement-closed');
  };
}


// Переключение темы
let themeButton = document.querySelector('.theme-button');

if (themeButton) {
  let page = document.querySelector('.page');

  themeButton.onclick = function () {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
  };
}

// форма
let form = document.querySelector('.subscription');

if (form) {
  let message = document.querySelector('.subscription-message');
  let email = document.querySelector('.subscription-email');

  form.onsubmit = function (evt) {
    // Инструкция ниже отменяет отправку данных
    evt.preventDefault();
    message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
  };
}

// лайк
let heart = document.querySelector('.heart');

if (heart) {
  let likesNumber = document.querySelector('.likes-number');
  const toggle = document.querySelector('[aria-pressed]');

  heart.onclick = function () {
    if (heart.classList.contains('added')) {
      likesNumber.textContent--;
    } else {
      likesNumber.textContent++;
    }

    heart.classList.toggle('added');
  };

  toggle.addEventListener('click', (e) => {
    let pressed = e.target.getAttribute('aria-pressed') === 'true';
    e.target.setAttribute('aria-pressed', String(!pressed));
  });
}

// комментарии
let commentForm = document.querySelector('.comment-form');
if (commentForm) {
  let commentList = document.querySelector('.comment-list');
  let commentField = document.querySelector('.comment-field');

  commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
  };
}


