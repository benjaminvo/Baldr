// HEADER
$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {  
        $(".header").addClass("header-inactive");
        //$("body").removeClass("dropdown-active"); // Remove dropdown class  
    }
    else {
        $(".header").removeClass("header-inactive");
    }
});


// DROPDOWN - SETTINGS
$(".nav-item_settings").click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass("nav-item-active");

    // Give body a dropdown-active class - remove if user clicks on already active dropdown
    if ( !$(this).hasClass("nav-item-active") ) {
        $("body").addClass("dropdown-active");
    } else {
        $("body").removeClass("dropdown-active");
    }
    
    // Toggle active class for nav item
    $(this).toggleClass("nav-item-active");
    
    // Untoggle search dropdown
    $(".dropdown_search").hide();
    $(".nav-arrow_search").hide();
    
    // Toggle dropdown and arrow
    $(".dropdown_settings").toggle();
    $(".nav-arrow_settings").toggle();
    
    // Keeps header big, when dropdown is open
    $(".header").removeClass("header-inactive");
    
});

// DROPDOWN - SEARCH
$('.nav-item_search').click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass('nav-item-active');
    
    // Give body a dropdown-active class - remove if user clicks on already active dropdown
    if ( !$(this).hasClass("nav-item-active") ) {
        $("body").addClass("dropdown-active");
    } else {
        $("body").removeClass("dropdown-active");
    }

    // Toggle active class for nav item
    $(this).toggleClass("nav-item-active");
 
    // Untoggle settings dropdown
    $(".dropdown_settings").hide();
    $(".nav-arrow_settings").hide();    

    // Toggle dropdown and arrow
    $(".dropdown_search").toggle();
    $(".nav-arrow_search").toggle();
    
    // Keeps header big, when dropdown is open
    $(".header").removeClass("header-inactive");
    
});

// DROPDOWN - SETTINGS - BUTTONS

// Dark/light mode
$('.btn-dark').click(function() {
    $('body').addClass('dark-mode');
});

$('.btn-light').click(function() {
    $('body').removeClass('dark-mode');
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
    
    // Display remaning reading time 
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

$(".toggle-notes").click(function() {
    $('.collaborator-notes').toggle();
    $('.main-content').toggle();
});