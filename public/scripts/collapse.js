const hamburger = $(".hamburger");
const navBar = $(".nav-container");
const closeIcon = $(".close-icon");

hamburger.on('click', () => {
    closeIcon.addClass('expanded');
    navBar.addClass('expanded');
    hamburger.addClass('hidden');
})

closeIcon.on('click', () => {
    closeIcon.removeClass('expanded');
    navBar.removeClass('expanded');
    hamburger.removeClass('hidden');
})