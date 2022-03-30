$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    selectedAttraction: 0.01,
    friction: 0.15,
    imagesLoaded: true,
    lazyLoad: true,
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
    console.log(heightScroll);
    if (heightScroll > 150) {
        $('.header').addClass('active');
        // transform: translateY(0px);
        // $('.header').translateY = 'transform: translateY(0px)';
        // this.setTimeout(function () {
        //     document.querySelector('.header').classList.add('active-v2');
        // }, 700)
    } else {
        $('.header').removeClass('active')
        // document.querySelector('.header').classList.remove('active-v2');
    }
})