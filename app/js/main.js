$(function(){
    $('.slider__about').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1500,
        infinite:false,
        variableWidth:true,
        centerMode:true
    });

    $('.slider__mobile-partners').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:false,
        // slidesToShow:1,
        // slidesToScroll:1,
        // speed:1500,
        // infinite:false,
        // centerMode:true
    });

    $('.slider__blog-mobile').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1500,
        centerPadding: 0,
        infinite:false,
        centerMode:true
    });

    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:4,
        slidesToScroll:3,
        speed:1000,
        infinite:false,
        variableWidth:true,
        responsive:[
            {
                breakpoint:1100,
                settings: {
                    slidesToShow:3,
                }  
            },
            {
                breakpoint:816,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint:596,
                settings: {
                    arrows:false,
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                }   
            }
        ]
    });

    $('.header__burger').click(function(event) {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    }); 

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
});

  