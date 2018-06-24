$(document).ready(function(){
    $(".nav-btn").click(function () {
        $("nav ul").slideToggle(400)
    })


    var $slider =$('.slider');
    var $header =$('header');
    $(window).scroll(function(){
        if($(window).scrollTop() >= $slider.height() - 100){
            $header.addClass('sticky');         
        }else{
            $header.removeClass('sticky');    
        }   
    }); 


   /* chef function */
   function reviewSlider() {
    var $sliderContainer = $('.review-slider'),
        $sliderBanner = $sliderContainer.find('.recent-slider-banner'),
        $slider = $sliderContainer.find('.recent-slider'),
        $sliderItems = $sliderBanner.find('.recent-slider-item'),
        itemsLength = $sliderItems.length,
        $nextBtn = $sliderContainer.find('.arrow.nex'),
        $prevBtn = $sliderContainer.find('.arrow.pre'),
        left = 0,
        itemMove = 0,
        clicked = false,
        itemWidth,
        itemsWidth,
        slidesToShow = 1,
        activeSlides = slidesToShow;


    
    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
  
    
    
    function fixWidth() {
        
        itemWidth = $('.review-slider .recent-slider-item').outerWidth();
        itemsWidth = itemWidth * itemsLength;
        $sliderBanner.width(itemsWidth);
    }
    fixWidth();

    function leftCalc() {
        return itemWidth * itemMove;
    }
     $(window).resize(function () {


        $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
        fixWidth();
        $sliderBanner.css('left', -leftCalc());
    });
    
    function checkStatus() {
        if (activeSlides === itemsLength) {
            $nextBtn.addClass('disabled');
        
        } else {
            
            $nextBtn.removeClass('disabled');
        }
        if (activeSlides === slidesToShow) {
            $prevBtn.addClass('disabled');
        
        } else {
            
            $prevBtn.removeClass('disabled');
        }
    }
    checkStatus();
    
    $nextBtn.click(function () {
        
        if (!clicked) {
            

            if (activeSlides !== itemsLength) {
                clicked = true;
                itemMove++;
                left = -leftCalc();
                $sliderBanner.css('left', left);
                activeSlides++;
                setTimeout(function () {
                    clicked = false;
                }, 400);
                checkStatus();
            }
            
        }
                   
    });
    
    $prevBtn.click(function () {
        
        if (!clicked) {
        
            if (activeSlides > slidesToShow) {
            
                clicked = true;
                itemMove--;
                left = -leftCalc();
                $sliderBanner.css('left', left);
                activeSlides--;
                setTimeout(function () {
                    clicked = false;
                }, 400);
                checkStatus();
        
            }
        
        }
    });
}
reviewSlider();



$(function () {
    "use strict";
    $('.shows li').on('click', function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content .quality').hide();
        $('.' + $(this).data('class')).fadeIn();
    });

   
});




function menuSlider() {
    var $sliderContainer = $('.menu-slider'),
        $sliderBanner = $sliderContainer.find('.slider-banner'),
        $slider = $sliderContainer.find('.team-slider'),
        $sliderItems = $sliderBanner.find('.slider-item'),
        itemsLength = $sliderItems.length,
        $nextBtn = $sliderContainer.find('.arrow.next'),
        $prevBtn = $sliderContainer.find('.arrow.prev'),
        left = 0,
        itemMove = 0,
        clicked = false,
        itemWidth,
        itemsWidth,
        slidesToShow = 3,
        activeSlides = slidesToShow;

    function responsiveSlides() {
        activeSlides -= slidesToShow;
    
        if ($(window).width() <= 991 && $(window).width() > 550) {
            slidesToShow = 2;

        } else if ($(window).width() <= 550) {
            slidesToShow = 1;

        } else {
            slidesToShow = 3;
        }
        activeSlides += slidesToShow;
    }
    responsiveSlides();
    
    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
  
    
    
    function fixWidth() {
        
        itemWidth = $('.menu-slider .slider-item').outerWidth();
        itemsWidth = itemWidth * itemsLength;
        $sliderBanner.width(itemsWidth);
    }
    fixWidth();

    function leftCalc() {
        return itemWidth * itemMove;
    }


    $(window).resize(function () {

        responsiveSlides();

        $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
        fixWidth();
        $sliderBanner.css('left', -leftCalc());
    });
    
    function checkStatus() {
        if (activeSlides === itemsLength) {
            $nextBtn.addClass('disableds');
        
        } else {
            
            $nextBtn.removeClass('disableds');
        }
        if (activeSlides === slidesToShow) {
            $prevBtn.addClass('disableds');
        
        } else {
            
            $prevBtn.removeClass('disableds');
        }
    }
    checkStatus();
    
    $nextBtn.click(function () {
        
        if (!clicked) {
            

            if (activeSlides !== itemsLength) {
                clicked = true;
                itemMove++;
                left = -leftCalc();
                $sliderBanner.css('left', left);
                activeSlides++;
                setTimeout(function () {
                    clicked = false;
                }, 400);
                checkStatus();
            }
            
        }
                   
    });
    
    $prevBtn.click(function () {
        
        if (!clicked) {
        
            if (activeSlides > slidesToShow) {
            
                clicked = true;
                itemMove--;
                left = -leftCalc();
                $sliderBanner.css('left', left);
                activeSlides--;
                setTimeout(function () {
                    clicked = false;
                }, 400);
                checkStatus();
        
            }
        
        }
    });
}
menuSlider();



});
       
