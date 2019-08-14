//Скрипт будет работать после того как документ загрузится
$(document).ready(function () {
    //--------------------ФИЛЬТР ФОТОК!!!!!--------------------
    //при нажатии на кнопку с filter="wd"
    $('.button[filter="wd"]').click(function () {
        //если атрибут val = off то производим действия
        if($(this).attr('val')=='off') {
            //У всех кнопок, которые есть ставим значение 'off'
            $('.button[filter]').attr('val', 'off');
            //По кнопке, на которую нажали ставим значение 'on'
            $(this).attr('val', 'on');
            //скрываем все дивы у .portfolio_img
            $('.portfolio_img > div').hide(400);
            //показываем дивы у которых filter='wd'
            $('.portfolio_img > div[filter="wd"]').show(400);

            // У всех кнопок удаляем класс, если он был
            $('.button[filter]').removeClass('focused');
            //Если нажата кнопка добавляем ей класс 'focused'
            $(this).addClass('focused');
        }
    });

    $('.button[filter="ud"]').click(function () {
        //если атрибут val = off то производим действия
        if($(this).attr('val')=='off') {
            //У всех кнопок, которые есть ставим значение 'off'
            $('.button[filter]').attr('val', 'off');
            //По кнопке, на которую нажали ставим значение 'on'
            $(this).attr('val', 'on');
            //скрываем все дивы у .portfolio_img
            $('.portfolio_img > div').hide(400);
            //показываем дивы у которых filter='wd'
            $('.portfolio_img > div[filter="ud"]').show(400)

            // У всех кнопок удаляем класс, если он был
            $('.button[filter]').removeClass('focused');
            //Если нажата кнопка добавляем ей класс 'focused'
            $(this).addClass('focused');
        }
    });

    $('.button[filter="moc"]').click(function () {
        //если атрибут val = off то производим действия
        if($(this).attr('val')=='off') {
            //У всех кнопок, которые есть ставим значение 'off'
            $('.button[filter]').attr('val', 'off');
            //По кнопке, на которую нажали ставим значение 'on'
            $(this).attr('val', 'on');
            //скрываем все дивы у .portfolio_img
            $('.portfolio_img > div').hide(400);
            //показываем дивы у которых filter='wd'
            $('.portfolio_img > div[filter="moc"]').show(400)

            // У всех кнопок удаляем класс, если он был
            $('.button[filter]').removeClass('focused');
            //Если нажата кнопка добавляем ей класс 'focused'
            $(this).addClass('focused');
        }
    });

    $('.button[filter="all"]').click(function () {
        //если атрибут val = off то производим действия
        if($(this).attr('val')=='off') {
            //У всех кнопок, которые есть ставим значение 'off'
            $('.button[filter]').attr('val', 'off');
            //По кнопке, на которую нажали ставим значение 'on'
            $(this).attr('val', 'on');
            //показываем дивы у которых filter='wd'
            $('.portfolio_img > div').show(400)

            // У всех кнопок удаляем класс, если он был
            $('.button[filter]').removeClass('focused');
            //Если нажата кнопка добавляем ей класс 'focused'
            $(this).addClass('focused');
        }
    })

//-------------------ОПТИМИЗИРОВАТЬ ЭТОТ КОД: itdoctor 1:56:57 (СВЕРХУ, ЭТО ФИЛЬТР!!!)


//  ----------------------------------СЛАЙДЕР СЛАЙДЕР ---------------------

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        //у точек будет такой класс, чтоб мы его меняли
        dotsClass: 'team__list_dots-style',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

// ------------------------------МЕНЮ МЕНЮ ----------------------------------------
    $('ul.menu a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 650);
        // -----------------нажатая ссылка подсвечивается-------
        $('ul.menu a[href^="#"]').css({'color':'#212121'});
        $(this).css({'color':'#004bee'});
        //-------------------------------------------------
        return false;
    });
// --------------------- КНОПОЧКА ПРОКРУТКИ ВВЕРХ----------------------------------
    //-------появление при скорлле-----------
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
            $('.toTop').fadeIn();
        else
            $('.toTop').fadeOut()
    });
    //-------сам скролл-----------
    $('.toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800)
    })
//-------------------ВЫПАДАЮЩЕЕ МЕНЮ ДЛЯ МОБИЛКИ--------------------------------------------------
    $('.menu-icon').click(function () {
        $('nav').slideToggle(500)
        $('nav ul').css({
            'display':'flex', 'flex-direction':'column'
        });
        $('.menu__item+.menu__item').css({
            'margin-left':'unset'
        });
        $('.logo-bar').css({
            'margin-bottom': '15px'
        });
        if($('.menu-icon').html()=='<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"</i>')
        }
        else{
            $(this).html('<i class="fas fa-bars"></i>')
        }
    })
});