$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    selectedAttraction: 0.01,
    friction: 0.15,
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

// let currentIndex = 0;
// let sliderChild = $('.slider_child');
// let buttons = $('.flickity-prev-next-button');
// console.log(sliderChild);
// buttons.on('click', function () {
//     let sliderSelected = $('.slider_child.is-selected');
//     $('.slider_child .name').removeClass('active');
// });
// sliderChild.childNodes[3].removeClass('active');
// sliderSelected.childNodes[3].addClass('active');
