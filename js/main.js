$(document).ready(function () {
    // настройки для слайдера портфолио
    const owlConfig = {
        items: 1,
        loop: true,
        smartSpeed: 600,
        margin: 15,
        stagePadding: 40,
        // чтобы соседние карточки немного отображались
        responsive: {
            480: {
                items: 2,
                stagePadding: 30
            },
            575: {
                items: 3
            }
        }
    }

    $('.portfolio-content').owlCarousel(owlConfig);

    if (window.innerWidth >= 768) {
        $('.portfolio-content').trigger('destroy.owl.carousel');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            $('.portfolio-content').trigger('destroy.owl.carousel');
            $('.portfolio-content').classList.remove('owl.carousel');
        }
        else {
            $('.portfolio-content').owlCarousel(owlConfig);
            $('.portfolio-content').classList.add('owl.carousel');
        }
    });

    // header-slider
    $(".header-slider").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 600,
        // autoplay: true,
        // autoplayTimeout: 4000,
        // autoplayHoverPause: true, 
        margin: 5
    });

    $('.slider-next').click(function () {
        $(".header-slider").trigger('next.owl.carousel');
    });

    $('.slider-prev').click(function () {
        $(".header-slider").trigger('prev.owl.carousel');
    });

    // fancybox
    Fancybox.bind("[data-fancybox]", {
        Thumbs: false,
        // отключение миниатюры
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },
        // Настройки панели инструментов удаляем
    });

    // animate
    var show = true;
    var countbox = ".animated-number";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.num').css('opacity', '1');
            $('.num').spincrement({
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });
});
