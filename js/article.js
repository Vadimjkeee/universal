document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar'),
        main = document.querySelector('.main'),
        comments = document.querySelector('.comments'),
        commentsItemNone = comments.querySelectorAll('.comments-block__item--dn');
    header.addEventListener('click', function(e) {
        const target = e.target;
        if (target.closest('.menu-button')) {
            header.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
        }
    });
    main.addEventListener('click', function(e) {
        const target = e.target;
        if (target.closest('.main-block__note')) {
            const img = target.closest('.main-block__note');
            if (img.classList.contains('main-block__note--active')) {
                img.src = 'img/news/Bookmark.svg';
                img.classList.remove('main-block__note--active')
            } else {
                img.src = 'img/news/Bookmark-red.svg';
                img.classList.add('main-block__note--active')
            }
        }
    });
    var articleSlider = new Swiper('.article-slider__container', {
        loop: true,
        navigation: {
            nextEl: '.article-slider__button--next',
            prevEl: '.article-slider__button--prev',
        }
    });
    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 37) {
            articleSlider.slidePrev()
        } else if (e.keyCode === 39) {
            articleSlider.slideNext()
        }
    });
    comments.addEventListener('click', function(e) {
        const target = e.target;
        if (target.closest('.comments-block__button')) {
            commentsItemNone.forEach(function(item) {
                item.classList.remove('comments-block__item--dn')
            });
            target.closest('.comments-block__button').style.display = 'none'
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