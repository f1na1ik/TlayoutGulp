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
        slidesToShow: 2,
        slidesToScroll: 1
    });



});