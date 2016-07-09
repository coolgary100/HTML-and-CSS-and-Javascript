var main = function() {};
    $('.article').click(function() {
        $('.article').removeClass('current'); /*removes the current class*/
        $('.description').hide(); /*Makes it so after a click it hides everything else*/
        $(this).addClass('current'); /*adds the current class which shades current article gray*/
        $(this).children('.description').show(); /*Allows you to search through elements nested under the article element*/
    });
    $(document).keypress(function(event) {
        if(event.which === 111) {
            $('.current').children('.description').toggle();
        }
        else if(event.which === 110) {
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();

            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
        
$(document).ready(main);