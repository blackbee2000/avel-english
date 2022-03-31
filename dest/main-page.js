$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    // selectedAttraction: 0.01,
    // friction: 0.15,
    imagesLoaded: true,
    lazyLoad: 2,
    on: {
        ready: function (index) {

        },
        change: function (index) {
            let content = $('.paragraph-text');
            console.log(content);
            content.eq(index).addClass('active-content');
            content.eq(index).siblings('p').removeClass('active-content');
        }
    }
});
var $carousel = $('.carousel').flickity();
var flkty = $carousel.data('flickity');
var $imgs = $('.carousel-cell .image img');
console.log($imgs);
$carousel.on('scroll.flickity', function (event, progress) {
    flkty.slides.forEach(function (slide, i) {
        var img = $imgs[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        img.style.transform = 'translateX( ' + x + 'px)';
    });
});

//scroll header
window.addEventListener('scroll', function () {
    var heightScroll = document.documentElement.scrollTop;
    var header = $('.header');
    var menu = $('header .container .menu li a');
    if (heightScroll > 100) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
    console.log('====================================');
    console.log((heightScroll / this.window.innerHeight));
    console.log('====================================');
    if (heightScroll / this.window.innerHeight >= 0.99) {
        menu.addClass('backMenu');
    } else {
        menu.removeClass('backMenu');
    }
})