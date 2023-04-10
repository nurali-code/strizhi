$(document).ready(function () {
    AOS.init({
        duration: 1000,
        offset: 100,
    });
    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        hideModals();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 40, }, 300,)
        $($(this).attr('href')).addClass('point')
        setTimeout(() => {
            $($(this).attr('href')).removeClass('point')
        }, 1000)
    })
    /*---------------------------------------------------end*/

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {

            // $("header").addClass('fixed');
            $(".scroll-up").fadeIn(300);
        } else {
            // $("header").removeClass('fixed');
            $(".scroll-up").fadeOut(300);
        }
    });
    /*---------------------------------------------------end*/

    function hideModals() {
        $('.modal').fadeOut();
        $('.modal, body, [data-modal]').removeClass('active');
    };
    /*---------------------------------------------------end*/

    $(function () {
        function showModal(id) {
            if ($(id).hasClass('active')) {
                $(id).fadeOut(300)
                $(id).removeClass('active');
                $('body').removeClass('active');
            } else {
                $(id).addClass('active')
                $('body').addClass('active');
                $(id).fadeIn(300);
            }
        }
        $('[data-modal]').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active')
            showModal('#' + $(this).attr("data-modal"));
        });

        $('.modal-close').on('click', () => {
            hideModals();
        });

        $(document).on('click', function (e) {
            if (!(
                ($(e.target).parents('.modal-content').length) ||
                ($(e.target).parents('.open-modal').length) ||
                ($(e.target).parents('.nav').length) ||
                ($(e.target).parents('.btn-menu').length) ||
                ($(e.target).hasClass('nav')) ||
                ($(e.target).hasClass('btn-menu')) ||
                ($(e.target).hasClass('btn')) ||
                ($(e.target).hasClass('modal-content'))
            )) {
                hideModals();
            }
        });
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
            url: "../smart.php",
            data: $(this).serialize()
        }).done(function () {
            $('form .btn').removeClass('loading');
            $('form').trigger('reset');
            $('.modal').fadeOut();
            $('#modal-thanks').fadeIn();
            setTimeout(() => { hideModals() }, 6000)
        }); return false;
    });
});

