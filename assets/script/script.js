$(document).ready(function () {
    'use strict';
    /* SLIDER */

    let compte = 1;
    let max = $('.slider-element').length;
    console.log(max);
    const INTERVAL = 1000;

    function sliderAnimation(e) {
        if ($(e).hasClass('slide-right')) {
            compte++;
            if (compte > max) {
                compte = 1;
            }
        } else if ($(e).hasClass('slide-left')) {
            compte--;
            if (compte < 1) {
                compte = max;
            }
        }

        let slide_actuel = $('.slider-element-actuel');
        let slide_suivant = $('#slider-element-' + compte);

        $(slide_actuel).velocity({
                opacity: '0',
            },
            500,
            function () {
                $(slide_actuel).removeClass('slider-element-actuel')
                $(slide_actuel).addClass('slider-element-disabled')
            });
        $(slide_suivant).velocity({
                opacity: '1',
            },
            500,
            function () {
                $(slide_suivant).addClass('slider-element-actuel')
                $(slide_suivant).removeClass('slider-element-disabled')
            });
        $('.bullet-active').removeClass('bullet-active');
        $('.bullet[data-bullet="' + compte + '"]').addClass('bullet-active');

        console.log(compte);
    }

    /*Autoplay*/
/*    function move_slide() {
        interval = setInterval(function () {
            sliderAnimation();
        }, 2000);
    }
    move_slide();*/
    /*/Autoplay*/



    $(document).on('click', '.fleche-middle', function () {
        sliderAnimation(this);

    });
    $(document).on('click', '.bullet', function () {
        compte = $(this).attr('data-bullet');
        sliderAnimation();
    });

    /* NAVBAR */

    console.info('tout roule chef');
    let scroll = 0;
    $(window).on('scroll', function (e) {
        if (scroll < 110) {
            if ($(document).scrollTop() > 110 && $(document).width() > 961) {
                $('.navplaceholder').show();
                $('header>nav').css('position', 'fixed');
                $('header>nav').css('top', '-80px');
                $('header>nav').css('padding-top', '0');
                $('header>nav').css('padding-bottom', '0');
                $('header>nav').css('box-shadow', '0px 4px 2px -2px rgba(192,192,192,0.3)');
                $('header>nav').css('background-color', 'white');
                $('header>nav').velocity({
                    top: '0px'
                }, 300);
            }
        } else {
            if ($(document).scrollTop() < 110 && $(document).width() > 961) {
                $('.navplaceholder').hide();
                $('header>nav').css('position', 'relative');
                $('header>nav').css('top', '0px');
                $('header>nav').css('box-shadow', 'unset');
                $('header>nav').css('padding-top', '10');
                $('header>nav').css('padding-bottom', '10');
                $('header>nav').css('background-color', 'initial');
            }
        }
        scroll = $(document).scrollTop();
    });
});
