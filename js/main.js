// Settings
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

// Search
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

