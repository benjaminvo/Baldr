// TOOLTIPS
// Enable tooltips on nav items
$('.nav-item').tooltip(
    { delay: {"show": 800, "hide": 100} }
);

// HEADER
$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {  
        $("body").addClass("header-inactive");
        //$("body").removeClass("dropdown-active"); // Remove dropdown class  
    }
    else {
        $("body").removeClass("header-inactive");
    }
});

// DROPDOWN - Add overflow hidden class to body, when mouse is inside a dropdown
$('.dropdown')
    .mouseenter(function() {
        $("body").addClass("overflow-hidden");
    })
    .mouseleave(function() {
        $("body").removeClass("overflow-hidden");
    }
);

// Makes dropdown inactive when clicking outside of it
$('.main-content').click(function() {
    if ( $("body").hasClass("dropdown-active") && $(".dropdown_settings:visible") ) {
        $(".nav-item-active").trigger('click');
    }
});

// DROPDOWN - DASHBOARD
$('.nav-item_dashboard').click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass('nav-item-active');
    
    // Disable/Enable tooltip and give body classes
    if ( !$(this).hasClass("nav-item-active") ) {
        // Disable tooltip
        $(this).tooltip('disable');
        
        // Active dropdown class
        $("body").addClass("dropdown-active");
        // Overflow hidden class, so body does not scroll
        $("body").addClass("overflow-hidden");
    } else {
        $(this).tooltip('enable');
        $("body").removeClass("dropdown-active");
        $("body").removeClass("overflow-hidden");
    }

    // Toggle active class for nav item
    $(this).toggleClass("nav-item-active");
 
    // Untoggle the other dropdowns
    $(".dropdown_settings").hide();
    $(".dropdown_toc").hide();
    $(".dropdown_search").hide();

    // Toggle dropdown and arrow
    $(".dropdown_dashboard").toggle();
    
    // Keeps header big, when dropdown is open
    $("body").removeClass("header-inactive");
});

// DROPDOWN - TABLE OF CONTENTS
$(".nav-item_toc").click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass("nav-item-active");

    // Disable/Enable tooltip and give body classes
    if ( !$(this).hasClass("nav-item-active") ) {
        // Disable tooltip
        $(this).tooltip('disable');
        
        // Active dropdown class
        $("body").addClass("dropdown-active");
        // Overflow hidden class, so body does not scroll
        $("body").addClass("overflow-hidden");
    } else {
        $(this).tooltip('enable');
        $("body").removeClass("dropdown-active");
        $("body").removeClass("overflow-hidden");
    }
    
    // Toggle active class for nav item
    $(this).toggleClass("nav-item-active");
    
    // Untoggle the other dropdowns
    $(".dropdown_settings").hide();
    $(".dropdown_dashboard").hide();
    $(".dropdown_search").hide();
    
    // Toggle dropdown and arrow
    $(".dropdown_toc").toggle();
    $(".nav-arrow_toc").toggle();
    
    // Keeps header big, when dropdown is open
    $("body").removeClass("header-inactive");
    
});

// DROPDOWN - SETTINGS
$(".nav-item_settings").click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass("nav-item-active");

    // Disable/Enable tooltip and give body classes
    if ( !$(this).hasClass("nav-item-active") ) {
        // Disable tooltip
        $(this).tooltip('disable');
        
        // Active dropdown class
        $("body").addClass("dropdown-active");
        // Overflow hidden class, so body does not scroll
        $("body").addClass("overflow-hidden");
    } else {
        $(this).tooltip('enable');
        $("body").removeClass("dropdown-active");
        $("body").removeClass("overflow-hidden");
    }
    
    // Toggle active class for nav item
    $(this).toggleClass("nav-item-active");
    
    // Untoggle the other dropdowns
    $(".dropdown_dashboard").hide();
    $(".dropdown_toc").hide();
    $(".dropdown_search").hide();
    
    // Toggle dropdown and arrow
    $(".dropdown_settings").toggle();
    $(".nav-arrow_settings").toggle();
    
    // Keeps header big, when dropdown is open
    $("body").removeClass("header-inactive");
});

// DROPDOWN - SEARCH
$('.nav-item_search').click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass('nav-item-active');
    
    // Disable/Enable tooltip and give body classes
    if ( !$(this).hasClass("nav-item-active") ) {
        // Disable tooltip
        $(this).tooltip('disable');
        
        // Active dropdown class
        $("body").addClass("dropdown-active");
        // Overflow hidden class, so body does not scroll
        $("body").addClass("overflow-hidden");
    } else {
        $(this).tooltip('enable');
        $("body").removeClass("dropdown-active");
        $("body").removeClass("overflow-hidden");
    }

    // Toggle active class for nav item
    $(this).toggleClass("nav-item-active");
 
    // Untoggle the other dropdowns
    $(".dropdown_settings").hide();
    $(".dropdown_toc").hide();
    $(".dropdown_dashboard").hide();

    // Toggle dropdown and arrow
    $(".dropdown_search").toggle();
    $(".nav-arrow_search").toggle();
    
    // Keeps header big, when dropdown is open
    $("body").removeClass("header-inactive");
    
    // Blur search input field
    $(".form-control").focus();
});

// DROPDOWN - SETTINGS - BUTTONS

// Dark/light mode
$('.btn-dark').click(function() {
    $('body').addClass('dark-mode');
    $('.dropdown_settings').hide();
    $(".nav-arrow_settings").hide();
    $("body").removeClass("dropdown-active");
    $('.nav-item').removeClass('nav-item-active');
});

$('.btn-light').click(function() {
    $('body').removeClass('dark-mode');
    $('.dropdown_settings').hide();
    $(".nav-arrow_settings").hide();
    $("body").removeClass("dropdown-active");
    $('.nav-item').removeClass('nav-item-active');
});

// Font sizes
$('.btn-reading-small').click(function() {
    $('main').removeClass('large-reading'); 
    $('main').removeClass('medium-reading');
    resetReadingValue();
});

$('.btn-reading-medium').click(function() {
    $('main').removeClass('large-reading'); 
    $('main').addClass('medium-reading');
    resetReadingValue();
});

$('.btn-reading-large').click(function() {
    $('main').removeClass('medium-reading'); 
    $('main').addClass('large-reading');
    resetReadingValue();
});


// READING INDICATOR

// Variables
var winHeight = $(window).height(), 
    docHeight = $(document).height(),
    progressBar = $('.reading-position-indicator'),
    readingTime = $('.reading-time'),
    max, value, valueProcent;

// Functions
function setMaxScroll() {
    max = docHeight - winHeight;
    progressBar.attr('max', max);
}

function setReadingValue() {
    value = $(window).scrollTop();
    progressBar.attr('value', value);
}

function resetReadingValue() {
    winHeight = $(window).height(),
    docHeight = $(document).height();

    setMaxScroll();
    setReadingValue();
}

// Set the maximum scrollable area
setMaxScroll();

// Scroll scripts for reading indicator
$(document).on('scroll', function(){
    
    // Set reading value from scroll position
    setReadingValue();
    
    // Calculate the current value in procent
    valueProcent = (value/max)*100;
    
    // Display remaining reading time 
    if  (valueProcent < 10) {
        readingTime.html("10 min");
    } else if 
        (valueProcent > 10 && valueProcent < 20) {
        readingTime.html("9 min");
    } else if 
        (valueProcent > 20 && valueProcent < 30) {
        readingTime.html("8 min");
    } else if 
        (valueProcent > 30 && valueProcent < 40) {
        readingTime.html("7 min");
    } else if 
        (valueProcent > 40 && valueProcent < 50) {
        readingTime.html("6 min");
    } else if 
        (valueProcent > 50 && valueProcent < 60) {
        readingTime.html("5 min");
    } else if 
        (valueProcent > 60 && valueProcent < 70) {
        readingTime.html("4 min");
    } else if 
        (valueProcent > 70 && valueProcent < 80) {
        readingTime.html("3 min");
    } else if 
        (valueProcent > 80 && valueProcent < 90) {
        readingTime.html("2 min");
    } else if 
        (valueProcent > 90 && valueProcent < 100) {
        readingTime.html("1 min");
    } else {
        readingTime.html("0 min");
    }
});

// Recalculate reading value when user resizes window
$(window).on('resize', function() {
    resetReadingValue();
});

// Toggles collaborator's notes on and off
$(".toggle-notes").click(function() {
    $('.collaborator-notes').toggleClass("visible");
    $('.collaborator-main-content').toggleClass("visible");
    $('.own-notes').toggleClass("not-visible");
    $('.dropdown_settings').hide();
    $(".nav-arrow_settings").hide();
    $("body").removeClass("dropdown-active");
    $('.nav-item').removeClass('nav-item-active');
    $('.collaborators img').toggleClass("collaborator-on");
});

// Clicking on search shows the search results
$(".btn-search").click(function() {
    $('.search-results').css('display', 'block');
    $('.search-results-pensum').css('display', 'block'); // burde kunne undlades, men virker dog ikke hvis man fjerne den?
    $('.form-control').val('experience');
});

// Clicking a result from search list adds class search-result-active and hides dropdown and header becomes inactive
$('.search-result-sentence').click(function() {
    $('.search-result-text').css('color', '#58b957');
    $('.search-result-text').css('background-color', '#f6f6f6');
    $('.search-result-text').delay(2000).queue(function() {
                $('.search-result-text').css('color', '#000'); 
                $('.search-result-text').css('background-color', 'transparent');
    });
    $('.dropdown_search').hide();
    $(".nav-arrow_search").hide();
    $("body").removeClass("dropdown-active");
    $('.nav-item').removeClass('nav-item-active');
});

// Let user submit search form by pressing enter
$('form').each(function() {
    $(this).find('input').keypress(function(e) {
        // Enter pressed?
        if(e.which == 10 || e.which == 13) {

            $(".btn-search").trigger('click');
            e.preventDefault();
        }
    });
});

// Hide search results if search input is empty
$('.form-control').keyup(function() {
    if( $(this).val().length === 0 ) {
        $(".search-results").hide();
    }
});

// TABLE OF CONTENTS

// Update table of contents text on scroll
$(document).scroll(function() {
    var cutoff = $(window).scrollTop();
    
    $('.toc-element').each(function(){
        if($(this).offset().top + $(this).height() > cutoff){
            var headline = $(this).text();
            
            // Replace chapter title in header with visible headline
            $('.chapter-current').text(headline);
            return false; // stops the iteration after the first one on screen
        }
    });
});

// Anchor scroll with fixed header offset
// Source: https://gist.github.com/HoundstoothSTL/5510082
// Added .not('.panel-title a') in the beginning to make script not target panel-header links
(function($) {

  $('a[href*=#]:not([href=#])').not('.panel-title a').click(function() 
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {

      var target = $(this.hash),
      headerHeight = $(".header-content").height() + 80; // Get fixed header height

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 500);
        return false;
      }
    }
  });
})(jQuery);