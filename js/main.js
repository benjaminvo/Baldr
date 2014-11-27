function toggleSettings() {
    // Remove active class from other nav items
    $("a").removeClass("nav-item-active");
    
    // Untoggle other dropdowns
    $(".dropdown_search").hide();
    $(".nav-arrow_search").hide();

    // Add active class to nav item
    $(".nav-item_settings").addClass("nav-item-active");
    
    // Toggle dropdown and arrow
    $(".dropdown_settings").toggle();
    $(".nav-arrow_settings").toggle();
}

function toggleSearch() {
    // Remove active class from other nav items
    $("a").removeClass("nav-item-active");
    
    // Untoggle other dropdowns
    $(".dropdown_settings").hide();
    $(".nav-arrow_settings").hide();
    
    // Add active class to a element
    $(".nav-item_search").addClass("nav-item-active");
    
    // Toggle dropdown and arrow
    $(".dropdown_search").toggle();
    $(".nav-arrow_search").toggle();
}

function toggleUser() {    
    // Toggle dropdown and arrow
    $(".dropdown_user").toggle();
    $(".nav-arrow_user").toggle();
}