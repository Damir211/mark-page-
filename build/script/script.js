//Для кнопки меню
$('.button-menu').on('click',function(){
	$('.link-menu').slideToggle();
});
$('.down').on('click',function(event) {
        event.preventDefault();
        var siz = $('#bot').offset().top;
        $('html').animate({scrollTop: siz}, 1000);
})