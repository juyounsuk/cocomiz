$(function(){
    $('.main_slide_wrap').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrow:true
    });

    $('.depth > li').hover(function(){
        $(this).find('ul').stop().fadeIn()
     },function(){
       $(this).find('ul').stop().fadeOut()
     }); 
    
});
$(function(){
    var now_center = 2;

    $('.arrow').eq(0).click(function(){
        now_center--;
        md_pick_move();
        
    });

    $('.arrow').eq(1).click(function(){
        now_center++;
        md_pick_move();
    });

    function md_pick_move(){
        if(now_center>4){
            now_center = 0;
        }
        if(now_center<0){
            now_center=4;
        }
        $('.goods').removeAttr('style').removeClass('center').eq(now_center).addClass('center');
        var g1 = makeLoop(Number(now_center)-2);
        var g2 =  makeLoop(Number(now_center)-1);
        var g3 =  makeLoop(Number(now_center)+1);
        var g4 =  makeLoop(Number(now_center)+2);

        $('.goods').eq(g1).css({left:-450});
        $('.goods').eq(g2).css({left:-250});
        $('.goods').eq(g3).css({right:-250,left:'auto'});
        $('.goods').eq(g4).css({right:-450,left:'auto'});
    }

    function makeLoop(num){
        if(num==-2){
            return 3;
        }
        if(num==-1){
            return 4;
        }

        if(num==5){
            return 0;
        }
        if(num==6){
            return 1;
        }
        return num;
    }
});

$(function(){
    $('.com_info>a').click(function(){
        $(this).find('p').stop().fadeIn()
     },function(){
       $(this).find('p').stop().fadeOut()
     });
});
