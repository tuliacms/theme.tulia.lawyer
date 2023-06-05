import '../sass/style.scss';

const $ = jQuery = require('jquery');
const bootstrap = require('bootstrap/dist/js/bootstrap.min.js');
import Swiper, { Navigation } from 'swiper';

$(function () {
    const swiper = new Swiper('.block-people .swiper', {
        modules: [Navigation],
        grabCursor: true,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    $('[data-parallax-image]').each(function () {
        const options = $($(this).attr('data-parallax-image'));

        $(this).parallax({
            imageSrc: options.html(),
            speed: options.attr('data-speed'),
            zIndex: options.attr('data-z-index'),
        }).addClass('parallax-ready');
    });

    const sc = new Scroller({scrollThreshold: 0});
    sc.init();
});

let Scroller = function (options) {
    this.options = options;
    this.body = null;
    this.isBeforeThreshold = false;
    this.lastScrolledPosition = 0;

    this.init = function () {
        this.body = $('body');
        this.options = $.extend({}, {
            scrollThreshold: 10,
            scrolledClassname: 'body-scrolled',
            scrolledDownClassname: 'body-scrolled-down',
            scrolledUpClassname: 'body-scrolled-up',
        }, this.options);

        let self = this;

        $(window).scroll(function () {
            self.decide();
        });

        self.decide();
    };

    this.decide = function () {
        let scrollTop = $(window).scrollTop();

        if(this.isBeforeThreshold) {
            if (scrollTop < this.options.scrollThreshold) {
                this.isBeforeThreshold = false;
                this.body.removeClass(this.options.scrolledClassname);
            }
        } else {
            if (scrollTop > this.options.scrollThreshold) {
                this.isBeforeThreshold = true;
                this.body.addClass(this.options.scrolledClassname);
            }
        }

        if (scrollTop > this.lastScrolledPosition) {
            this.body.addClass(this.options.scrolledDownClassname);
            this.body.removeClass(this.options.scrolledUpClassname);
        } else {
            this.body.removeClass(this.options.scrolledDownClassname);
            this.body.addClass(this.options.scrolledUpClassname);
        }

        this.lastScrolledPosition = scrollTop;
    };
};
