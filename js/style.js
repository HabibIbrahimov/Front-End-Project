$(document).ready(function(){

//NAVBAR
$(document).on('click', '#search', function () {
    $(this).next().toggle();
})

$(document).on('click', '#mobile-navbar-close', function () {
    $(this).parent().removeClass("active");

})
$(document).on('click', '#mobile-navbar-show', function () {
    $('.mobile-navbar').addClass("active");

})

$(document).on('click', '.mobile-navbar ul li a', function () {
    if ($(this).children('i').hasClass('fa-caret-right')) {
        $(this).children('i').removeClass('fa-caret-right').addClass('fa-sort-down')
    }
    else {
        $(this).children('i').removeClass('fa-sort-down').addClass('fa-caret-right')
    }
    $(this).parent().next().slideToggle();
})


});