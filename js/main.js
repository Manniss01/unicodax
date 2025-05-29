(function ($) {
    "use strict";

    $(function () {
        // Spinner
        const spinner = () => {
            setTimeout(() => {
                if ($('#spinner').length) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();

        // WOW.js Init
        if (typeof WOW === 'function') {
            new WOW().init();
        }

        // Combined scroll events
        $(window).scroll(function () {
            const scrollTop = $(this).scrollTop();

            // Sticky Navbar
            if (scrollTop > 300) {
                $('.sticky-top').addClass('bg-dark shadow-sm').css('top', '0px');
            } else {
                $('.sticky-top').removeClass('bg-dark shadow-sm').css('top', '-150px');
            }

            // Back to Top Button
            if (scrollTop > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        // Back to Top Click
        $('.back-to-top').click(function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        });

        // Counter Up
        if ($.fn.counterUp) {
            $('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 2000
            });
        }

        // Testimonials Carousel
        if ($.fn.owlCarousel) {
            $(".testimonial-carousel").owlCarousel({
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                dots: true,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]
            });
        }
    });

})(jQuery);
