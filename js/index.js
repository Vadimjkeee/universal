document.addEventListener('DOMContentLoaded', function() {
    var lifehackSlider = new Swiper('.lifehack-container', {
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const menu = document.querySelector('.navbar'),
        navbar = [...menu.querySelectorAll('li>a[href*="#"]')];
    navbar.forEach(function(item) {
        item.addEventListener('click', e => {
            e.preventDefault();
            const blockId = item.getAttribute('href');
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    });
    const hero = document.querySelector('.hero'),
        heroTabs = hero.querySelectorAll('.hero-tabs__item'),
        heroSlids = hero.querySelectorAll('.hero-slider__item'),
        news = document.querySelector('.news'),
        header = document.querySelector('.navbar');
    header.addEventListener('click', function(e) {
        const target = e.target;
        if (target.closest('.menu-button')) {
            header.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
        }
    });
    hero.addEventListener('click', function(e) {
        const target = e.target;
        let count = 0;
        if (target.closest('.hero-tabs__item')) {
            heroTabs.forEach(function(item) {
                item.classList.remove('hero-tabs__item--active')
            });
            target.closest('.hero-tabs__item').classList.add('hero-tabs__item--active');
            heroTabs.forEach(function(item, index) {
                if (item.closest('.hero-tabs__item--active')) {
                    count = index
                }
            });
            heroSlids.forEach(function(item) {
                item.classList.remove('hero-slider__item--active')
            });
            heroSlids[count].classList.add('hero-slider__item--active')
        }
    });
    news.addEventListener('click', function(e) {
        const target = e.target;
        if (target.closest('.news-block__note')) {
            const img = target.closest('.news-block__note');
            if (img.classList.contains('news-block__note--active')) {
                img.src = 'img/news/Bookmark.svg';
                img.classList.remove('news-block__note--active')
            } else {
                img.src = 'img/news/Bookmark-red.svg';
                img.classList.add('news-block__note--active')
            }
        }
    });
    $('.form').each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                email: {
                    required: "Нам нужен ваш адрес электронной почты",
                    email: "Необходимый формат: name@domain.com"
                },
                message: {
                    minlength: "Минимальное количество символов — 100",
                    required: "Это поле обязательно к заполнению"
                }
            }
        })
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({
                    opacity: 1
                }).fadeIn('slow')
            }
        } else {
            $('#upbutton').stop(true, false).fadeOut('fast')
        }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300)
    })
});