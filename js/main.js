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
});

// DROPDOWN - SETTINGS - BUTTONS
$('.btn-dark').click(function() {
    $('body').addClass('dark-mode');
});

$('.btn-light').click(function() {
    $('body').removeClass('dark-mode');
});

$('.btn-reading-small').click(function() {
    $('main').removeClass('large-reading'); 
    $('main').removeClass('medium-reading'); 
});

$('.btn-reading-medium').click(function() {
    $('main').removeClass('large-reading'); 
    $('main').addClass('medium-reading'); 
});

$('.btn-reading-large').click(function() {
    $('main').removeClass('medium-reading'); 
    $('main').addClass('large-reading'); 
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
});


// READING INDICATOR

//// Determine the max value: subtract the window's height from the height of the document.
//var winHeight = $(window).height(),
//  docHeight = $(document).height();
//  max = docHeight - winHeight;
//
//$('.reading-position-indicator').attr('max', max);
//
//// Calculate the value from the scroll
//var value = $(window).scrollTop();
//$('.reading-position-indicator').attr('value', value);
//
//
//$(document).on('scroll', function() {
//  value = $(window).scrollTop();
//  progressBar.attr('value', value);
//});

// Determine the max value: subtract the window's height from the height of the document.
var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('.reading-position-indicator'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

$(document).on('scroll', function(){
 value = $(window).scrollTop();
 progressBar.attr('value', value);
});
