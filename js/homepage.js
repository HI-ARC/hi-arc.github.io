$(function() {

    var mid = $(window).height() / 2;
    if ($(window).width() < 640) {
        
        $(window).scroll(function() {

            $('.portfolio-box').each(function() {
                var top = $(this).offset().top - $(window).scrollTop();

                if (top < mid && mid < top + $(this).height()) {
                    $(this).addClass('visible');
                }
                else {
                    $(this).removeClass('visible');
                }
            });

        });
        
    }
});