// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function calculatorBtns() {
  const container = document.querySelector('.calculator');
  if (!container) {
    return null
  }
  const calculatorBtns = document.querySelectorAll('.calculator__btn');

  calculatorBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      calculatorBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}
calculatorBtns();

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.roadmap__btn');
  const tabContents = document.querySelectorAll('.roadmap__content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс active у всех кнопок и контентов
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем класс active только той кнопке, на которую кликнули, и соответствующему контенту
      button.classList.add('active');
      const tabContentId = button.getAttribute('data-roadmap-btn');
      const activeTabContent = document.querySelector(`[data-roadmap-content="${tabContentId}"]`);
      activeTabContent.classList.add('active');
    });
  });
});



AOS.init();



/*    куки    */

document.addEventListener("DOMContentLoaded", function () {
  const cookies = document.querySelector('.cookies');
  const acceptBtn = document.querySelector('.cookies__btn');

  acceptBtn.addEventListener('click', function () {
    // Set cookie to expire in 30 days
    const date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "cookieAccepted=true;" + expires + ";path=/";

    // Hide the cookies notification
    cookies.style.display = 'none';
  });

  // Check if the cookie is already set
  if (document.cookie.includes('cookieAccepted=true')) {
    cookies.style.display = 'none';
  } else {
    // Show the cookies notification if the cookie is not set
    cookies.style.display = 'block';
  }
});