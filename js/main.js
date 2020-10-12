toggleNavOverlay();

/* Alert on signup for email */
$(".input-group-append").click(() => {
    alert("Added email [" + $(".form-control-sm.email").val() + "] to mailing list!");
});

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

/* Scroll Visable - https://css-tricks.com/slide-in-as-you-scroll-down-boxes/ */
(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
    
})(jQuery);

var win = $(window);
var allMods = $(".slidable");

// Already visible slidables
allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
});

win.scroll(function(event) {
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in"); 
        } 
    });
});

/* Magic Underline - https://css-tricks.com/jquery-magicline-navigation/ */
let width_offset = 10; // Shrinks the line's width by this amount

// Initialize Jquery function
$(function() {

    // Get the positional info for the nav's ul
    var $el, leftPos, newWidth,
        $mainNav = $("nav ul");
    
        // Add a new element to the nav's ul (the magic line)
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    
    // Position the line under the current page item after applying the width_offset
    $magicLine
        .width($(".current_page_item").width() - width_offset*2)
        .css("left", $(".current_page_item a").position().left + width_offset)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
    
    // On hovering over a list element, moves the line to underneath the selected item
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

// Resets the line's position on window resize
$(window).resize(function () {
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current_page_item").width() - width_offset*2)
        .css("left", $(".current_page_item a").position().left + width_offset)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
});