function untoggleDropdown() {
    $(".dropdown-active .nav-item-active").toggle();
} 

function toggleSettings() {
    $(".dropdown_search").css('display', 'none');
    $(".nav-item-active_search").css('display', 'none');
    
    $(".dropdown_settings").toggle().addClass('dropdown-active');
    $(".nav-item-active_settings").toggle();
}

function toggleUser() {    
    $(".dropdown_user").toggle();
    $(".nav-item-active_user").toggle();
}

function toggleSearch() {
    $(".dropdown_settings").css('display', 'none');
    $(".nav-item-active_settings").css('display', 'none');
    
    $(".dropdown_search").toggle();
    $(".nav-item-active_search").toggle();
}
