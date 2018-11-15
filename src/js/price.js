$(document).ready(function(){
    $(".js-button-show-order").click(function(){
        if ($(this).hasClass('rotate')) {
            $(this).removeClass('rotate');
        } else {
            $(this).addClass('rotate');
        }
        $(this).parent().siblings('.order-description-content').slideToggle("slow");
    });
});