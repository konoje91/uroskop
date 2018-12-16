$(document).ready(function(){
    var speed = 1000;

    $(".comments-link").on("click", function() {
        if($("#comments").length) scrollToID("#comments", speed);
    });
});

function scrollToID(id, speed) {
    var offSet = 70;
    var obj = $(id).offset();
    var targetOffset = obj.top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
}