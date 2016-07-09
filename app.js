var main = function() {
    $('.icon-menu').click(function(){ /*animates the menu when u click menu*/
        $('.menu').animate ({
            left: '0px'
            }, 200);
            
            $('body').animate({
                left:'285px'
            }, 200);
    });
    $('.icon-close').click(function() { /*animates the menu when u click X*/
        $('.menu').animate ({
            left: '-285px'
        }, 200);
        
        $('body').animate({
            left: '0px'
        }, 200);
    });
};
$(document).ready(main);