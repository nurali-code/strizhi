$(document).ready(function () {
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header, body').toggleClass('active');
    })

    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 40, }, 300,)
    })
    /*---------------------------------------------------end*/
    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        swipeToSlide: true,
        centerMode: true,
        slidesToScroll: 1,
        variableWidth: true,
    });

    $('.pricing-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
        ]
    });

    /*---------------------------------------------------end*/

    function hideModals() {
        $('.modal').fadeOut();
        $('.modal, body').removeClass('active');
    };
    $(function () {
        function showModal(id) {
            $('body').addClass('active');
            $(id).addClass('active').fadeIn(300);
        }

        $('[data-modal]').on('click', function (e) {
            e.preventDefault();
            showModal('#' + $(this).attr("data-modal"));
        });

        $('.modal-close').on('click', () => {
            hideModals();
        });

        $(document).on('click', function (e) {
            if (!(
                ($(e.target).parents('.modal-content').length) ||
                ($(e.target).parents('.nav').length) ||
                ($(e.target).parents('.btn-menu').length) ||
                ($(e.target).hasClass('btn')) ||
                ($(e.target).hasClass('modal-content'))
            )) {
                hideModals();
            }
        });
    });

    /*---------------------------------------------------end*/

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $(".scroll-up").fadeIn(300);
        } else {
            $(".scroll-up").fadeOut(300);
        }
    });
    /*---------------------------------------------------end*/

    $('input[type="tel"]').inputmask({ "mask": "8-999-999-99-99" });

    /*---------------------------------------------------end*/
    $('.dropdown-btn').click(function () {
        $(this).next('.dropdown-content').slideDown();
        $(this).remove();
    });
    /*---------------------------------------------------end*/

    $("form").submit(function () {
        $('form .btn').addClass('loading');
        $.ajax({
            type: "post",
            method: 'post',
            url: "../sendmail.php",
            data: $(this).serialize()
        }).done(function () {
            $('form .btn').removeClass('loading');
            $('form').trigger('reset');
            alert('Спасибо за заявку. Ожидайте с вами свяжется специалист!');
        }); return false;
    });
});

