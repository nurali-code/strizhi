$(document).ready(function () {
    // AOS.init({
    //     duration: 1000,
    //     offset: 100,
    // });
    /*---------------------------------------------------end*/

    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header, body').toggleClass('active');
    })

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

