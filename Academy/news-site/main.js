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

// комментарии первый вариант
let commentForm = document.querySelector('.comment-form');
let charCounter = document.querySelector('.char-counter');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let submitButton = document.querySelector('.submit-button');

if (commentForm && !charCounter) {

    commentForm.onsubmit = function (evt) {
        evt.preventDefault();

        let newComment = document.createElement('li');
        newComment.classList.add('user-comment');
        newComment.textContent = commentField.value;
        commentField.value = '';
        commentList.append(newComment);
        charCounter.textContent = 0;
    }
} else if (commentForm && charCounter) {

    commentForm.onsubmit = function (evt) {
        evt.preventDefault();

        let newComment = document.createElement('li');
        newComment.classList.add('user-comment');
        newComment.textContent = commentField.value;
        commentField.value = '';
        commentList.append(newComment);
        charCounter.textContent = 0;
    };

    commentField.oninput = function () {
        charCounter.textContent = commentField.value.length;

        if (commentField.value.length > 142) {
            commentForm.classList.add('warning');
            submitButton.disabled = true;
        } else {
            commentForm.classList.remove('warning');
            submitButton.disabled = false;
        }
    };
}

// подсказки
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let closeButton = document.querySelector('.close-button');
let tooltip = document.querySelector('.tooltip');
let tooltipText = document.querySelector('.tooltip-text');
if (closeButton) {

    closeButton.onclick = function () {
        tooltip.classList.remove('opened');
    };

  for (let tooltipButton of tooltipButtons) {
    tooltipButton.onclick = function () {
      tooltipText.textContent = tooltipButton.dataset.tooltipText;
      tooltip.classList.add('opened');
    };
  }
}

// кнопка прокрутки страницы наверх
let upButton = document.querySelector('.up-button');
if (upButton) {
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      upButton.classList.add('shown');
    } else {
      upButton.classList.remove('shown');
    }
  };


  upButton.onclick = function () {
    window.scrollTo(0, 0);
  };
}

// фильтр анонсов статей
let articles = document.querySelectorAll('.new-block');
let filter = document.querySelector('.filter');
if (filter) {
  filter.onchange = function () {
    for (let article of articles) {
      if (article.dataset.category !== filter.value && filter.value !== 'all') {
        article.classList.add('hidden');
      } else {
        article.classList.remove('hidden');
      }
    }
  };
}

// оценить сайт
let websiteScores = document.querySelectorAll('.review');
if (websiteScores) {
  let submitButton = document.querySelector('.submit-button');
  let errorMessage = document.querySelector('.error');


  for (let websiteScore of websiteScores) {
    websiteScore.onchange = function () {

      if (websiteScore.dataset.evaluation == 'bad') {
        submitButton.disabled = true;
        errorMessage.classList.add('shown');
        // то блокируем кнопку
        // и добавляем элементу errorMessage класс

      } else {
        submitButton.disabled = false;
        errorMessage.classList.remove('shown');
        // разблокировать кнопку
        // и удаляем у элемента errorMessage класс
      }

    };
  }
}

// стилизация лонгрида
let longread = document.querySelector('.longread');
if (longread) {
  let colorSetting = document.querySelector('.color-setting');
  let sizeSetting = document.querySelector('.size-setting');
  let pixels = document.querySelector('.pixels');
  let backgroundSetting = document.querySelector('.background-setting');

  colorSetting.onchange = function () {
    longread.style.color = colorSetting.value;
  };

  sizeSetting.oninput = function () {
    pixels.textContent = sizeSetting.value;
    longread.style.fontSize = sizeSetting.value + 'px';
  };

  backgroundSetting.onchange = function () {
    longread.style.backgroundColor = backgroundSetting.value;
  };

}

// Форма регистрации
let password = document.querySelector('.password');
if (password) {
  let showPassword = document.querySelector('.show-password');
  let securityBar = document.querySelector('.security-bar');

  showPassword.onchange = function () {
    if (showPassword.checked) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  };

  password.oninput = function () {
    let passLength = password.value.length;
    securityBar.style.width = passLength * 10 + '%';
    if (passLength <= 5) {
      securityBar.style.backgroundColor = 'red';
    } else if (passLength > 5 && passLength < 10) {
      securityBar.style.backgroundColor = 'gold';
    } else {
      securityBar.style.backgroundColor = 'green';
    }

  };
}


