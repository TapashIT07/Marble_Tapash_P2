
$(function(){

    $('#bars').click(function(){
        $('.menu_con ul ').toggleClass('top_80')
    })


    $('.back_to_top').click (function(){
        $('html,body').animate({scrollTop: 0},500)
    })

    $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop>500){
        $('.back_to_top').show(500);
    } else {
        $('.back_to_top').hide(500);  
    }

    })

});


