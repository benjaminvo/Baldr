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
