// DROPDOWN - SETTINGS
$('.nav-item_settings').click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass('nav-item-active');
    
    // Toggle active class
    $(this).toggleClass('nav-item-active');
    
    // Untoggle search dropdown
    $(".dropdown_search").hide();
    $(".nav-arrow_search").hide();
    
    // Toggle dropdown and arrow
    $(".dropdown_settings").toggle();
    $(".nav-arrow_settings").toggle();
    
    // Keeps header big, when dropdown is open
    $(".header").removeClass("header-active-search");
    $(".header").toggleClass("header-active-settings");
    
});

// DROPDOWN - SEARCH
$('.nav-item_search').click(function() {
    
    // Remove active class from other nav items
    $('a.nav-item-active').not(this).removeClass('nav-item-active');
    
    // Toggle active class
    $(this).toggleClass('nav-item-active');
 
    // Untoggle settings dropdown
    $(".dropdown_settings").hide();
    $(".nav-arrow_settings").hide();    

    // Toggle dropdown and arrow
    $(".dropdown_search").toggle();
    $(".nav-arrow_search").toggle();
    
    // Keeps header big, when dropdown is open
    $(".header").removeClass("header-active-settings");
    $(".header").toggleClass("header-active-search");
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
    max, value;

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
    setReadingValue()
}

// Set the max scrollable area
setMaxScroll();

// Calculate reading value from scroll position
$(document).on('scroll', function(){
    setReadingValue();
});

// Recalculate reading value when user resizes window
$(window).on('resize', function() {
    resetReadingValue();
});