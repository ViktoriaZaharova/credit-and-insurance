$('.stages-work-slider').slick({
    slideToShow: 1,
    infinite: false,
    fade: true,
    appendArrows: '.stages-work-slider__nav',
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my btn btn-blue"><span>Назад</span></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my btn btn-blue"><span>дальше</span></button>'
});

$('.articles-slider').slick({
    slideToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my2"><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.292894 7.2929C-0.0976296 7.68342 -0.0976295 8.31658 0.292894 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.538409 6.65685 0.928934L0.292894 7.2929ZM25 7L1 7L1 9L25 9L25 7Z" fill="#004AAD"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my2"><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9L24 9V7L0 7L0 9Z" fill="#004AAD"/>\n' +
        '</svg>\n</button>'
});

$('input[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.close-mobile-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});

//плавный скролл
$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            heightHeader = $('header').height(),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - heightHeader}, 500);
    });
});
//плавный скролл end

// fixed header
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// load more
$('.load-more').on('click', function (e) {
    e.preventDefault();
    $('.article-box-row:hidden').slice(0, 3).slideDown();

    var onBlock = $('.article-box-row:hidden').length;
    if(onBlock <= 0) {
        $('.load-more').hide();
    }
});


// активная ссылка меню
$('.nav-menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location === link) {
        $(this).addClass('current');
    }
});
// end

// Инициализация карты
function init () {
    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [45.019137, 38.997789],
        zoom: 16
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [45.019137, 38.997789] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/location-map.svg',  // картинка иконки
            iconImageSize: [32, 42],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

ymaps.ready(init);