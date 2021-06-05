$(document).ready(function () {


    /*top_btn*/
    $('.scroll_top').click(function () {

        $('#fp-nav li').eq(0).find('a').addClass('home');

        $('.home').trigger('click');
    });

    /*hamburger_btn*/
    var button_click = 0;
    $('#ham_btn').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('on');


        $('#ham_menu').toggleClass('visibility');
        button_click++;

        if (0 == button_click % 2) {
            $('#fp-nav').css({
                top: 50 + '%',
            });
            $.fn.fullpage.setAllowScrolling(true);

            $.fn.fullpage.setKeyboardScrolling(true);

            $('header').animate({
                zIndex: 99
            }, 200);

            /*  $('#ham_btn').css({
                  backgroundColor:'transparent'
              });*/
            $('#lang').css({
                color: 'black'
            });

            $('#wrap').css({
                position:'relative',
                overflowY: 'visible'
            });



        } else {
            $('#fp-nav').css({
                top: -50 + "%",
            });

            $.fn.fullpage.setAllowScrolling(false);

            $.fn.fullpage.setKeyboardScrolling(false);

            $('header').animate({
                zIndex: -1
            }, 200);

            $('#lang').css({
                color: 'white'
            });

            $('#wrap').css({
                position:'fixed',
                overflowY: 'hidden'
            });
            $('.mo_menu').removeClass('menu_click');
        }
    }); /* hamburgur end*/




    /*top_menu*/
    $('section').each(function (index) {
        $(this).attr('data-index2', index);
    });

    $('.top_menu>li').each(function (index) {
        $(this).attr('data-index2', index);
    }).click(function () {
        top_menu_click = $(this).attr('data-index2');


        $('.hamburger_btn').trigger('click');
    });


    $('#lang span').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('on');

        $('.lang_box').toggleClass('visible');

    });

    $('.fp-viewing-firstPage header').hover(function () {}, function () {
        $('.lang_box.visible').removeClass('visible');
    });

    $('.lang_box>a').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        click_lang = $(this).attr('data-index');

        $('.lang_box>a').removeClass('color_active');
        $('.lang_box>a').eq(click_lang).addClass('color_active');


        $('#lang>span').removeClass('active_lang');
        $('#lang>span').eq(click_lang).addClass('active_lang');
    });

    $('#lang span').each(function (index) {
        $(this).attr('data-index', index);
    });


    var j = 0;
    var k = 0;
    $('.mo_btn').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {

        ham_sub_menu_click = $(this).attr('data-index');
        /* j++;
          $('.mo_menu[data-index='+ham_sub_menu_click+']').addClass('menu_click');
         console.log(ham_sub_menu_click);
         $('.mo_menu[data-index!='+ham_sub_menu_click+']').removeClass('menu_click');*/


        /*if(j%2 == 0){
          
              $('.mo_menu').eq(ham_sub_menu_click).removeClass('menu_click');
              $('.mo_menu').eq(ham_sub_menu_click).addClass('menu_click');
        }else if(j%2 == 1){
            $('.mo_menu').removeClass('menu_click');   
              $('.mo_menu').eq(ham_sub_menu_click).addClass('menu_click');
           
              
    
        }*/
    });

    $('.mo_menu').each(function (index) {
        $(this).attr('data-index', index);
    });

    function mo_btn_ctr(indexNum, className) {
        $(className).on('click', function (event) {
            event.preventDefault();

            $('.mo_menu').eq(indexNum).toggleClass('menu_click');
            $('.mo_btn i').eq(indexNum).toggleClass('active_i');
                
        });
    }

    mo_btn_ctr(0, '.menu1 .mo_btn');
    mo_btn_ctr(1, '.menu2 .mo_btn');
    mo_btn_ctr(2, '.menu3 .mo_btn');
    mo_btn_ctr(3, '.menu4 .mo_btn');
    mo_btn_ctr(4, '.menu5 .mo_btn');




}); /*end*/
