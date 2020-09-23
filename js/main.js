toggleNavOverlay();

/* On Scroll */
window.onscroll = function (e) {  
    toggleNavOverlay();
} 

function toggleNavOverlay () {
    /* Nav bar overlay -- Calculate distance from nav to top of window and toggle the overlay if that distance is 0 */
    let scrollTop     = $(window).scrollTop(),
    elementOffset     = $('nav').offset().top,
    distance          = (elementOffset - scrollTop);

    if (distance == 0) {
        $("nav").addClass("overlay");
    } else {
        $("nav").removeClass("overlay");
    }
}


/* Magic Underline - https://css-tricks.com/jquery-magicline-navigation/ */
let width_offset = 15;
$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("nav ul");
    
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width() - width_offset*2)
        .css("left", $(".current_page_item a").position().left + width_offset)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("nav ul li a").hover(function() {
        $el = $(this);

        leftPos = $el.position().left + width_offset;
        newWidth = $el.parent().width() - width_offset*2;

        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
});

$(window).resize(function () {
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current_page_item").width() - width_offset*2)
        .css("left", $(".current_page_item a").position().left + width_offset)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
});