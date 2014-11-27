function untoggleDropdown() {
    $(".dropdown-active .nav-arrow").toggle();
} 

function toggleSettings() {
    $(".dropdown_search").css('display', 'none');
    $(".nav-arrow_search").css('display', 'none');
    
    $(".dropdown_settings").toggle().addClass('dropdown-active');
    $(".nav-arrow_settings").toggle();
}

function toggleUser() {    
    $(".dropdown_user").toggle();
    $(".nav-arrow_user").toggle();
}

function toggleSearch() {
    $(".dropdown_settings").css('display', 'none');
    $(".nav-arrow_settings").css('display', 'none');
    
    $(".dropdown_search").toggle();
    $(".nav-arrow_search").toggle();
}
