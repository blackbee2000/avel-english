//----------------------------------------------------Slider Banner-------------------------------------------------------
$(".slider__card_content-right--img").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  selectedAttraction: 0.01,
  friction: 0.1,
  imagesLoaded: true,
  lazyLoad: true,
  prevNextButtons: false,
  on: {
    ready: function (index) {
      let dotted = $(".flickity-page-dots");
      let paging = $(".slider__card_bottom-page--dotted");
      dotted.appendTo(paging);
    },
    change: function (index) {
      let pageNumber = $(".slider__card_bottom-page--number");
      let indexPage = index + 1;
      pageNumber.text(indexPage.toString().padStart(2, 0));

      //next and prev css
      let listSlider = $(".gallery-cell");
      if (index == 0) {
        $(".slider__card_content-control--next").css({ opacity: "1" });
        $(".slider__card_content-control--prev").css({ opacity: "0.3" });
      } else if (index == listSlider.length - 1) {
        $(".slider__card_content-control--prev").css({ opacity: "1" });
        $(".slider__card_content-control--next").css({ opacity: "0.3" });
      } else {
        $(".slider__card_content-control--prev").css({ opacity: "1" });
        $(".slider__card_content-control--next").css({ opacity: "1" });
      }

      //sub title
      let subTitle = $(".slider__card_content-left--subTitle .title-sub");
      subTitle.eq(index).addClass("active--title-sub");
      subTitle.eq(index).siblings().removeClass("active--title-sub");

      //title
      let title = $(".slider__card_content-left--title .title");
      title.eq(index).addClass("active--title");
      title.eq(index).siblings().removeClass("active--title");

      //content
      let content = $(".slider__card_content-left--content .content");
      content.eq(index).addClass("active--content");
      content.eq(index).siblings().removeClass("active--content");

      //button
      let button = $(".slider__card_content-left--button .button");
      button.eq(index).addClass("active--button");
      button.eq(index).siblings().removeClass("active--button");

    },
  },
});

$(".slider__card_content-control--next").css({ opacity: "1" });

$(".slider__card_content-control--prev").on("click", function () {
  $(".slider__card_content-right--img").flickity("previous");
});

$(".slider__card_content-control--next").on("click", function () {
  $(".slider__card_content-right--img").flickity("next");
});

//

$(".carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  draggable: true,
  selectedAttraction: 0.01,
  friction: 0.15,
  imagesLoaded: true,
  lazyLoad: true,
  on: {
    ready: function (index) {},
    change: function (index) {
      let content = $(".paragraph-text");
      console.log(content);
      content.eq(index).addClass("active-content");
      content.eq(index).siblings("p").removeClass("active-content");
    },
  },
});

var $carousel = $(".carousel").flickity();
var flkty = $carousel.data("flickity");
var $imgs = $(".carousel-cell .image img");
console.log($imgs);
$carousel.on("scroll.flickity", function (event, progress) {
  flkty.slides.forEach(function (slide, i) {
    var img = $imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style.transform = "translateX( " + x + "px)";
  });
});

//scroll header
window.addEventListener("scroll", function () {
  var heightScroll = document.documentElement.scrollTop;
  console.log(heightScroll);
  if (heightScroll > 150) {
    $(".header").addClass("active");
    // transform: translateY(0px);
    // $('.header').translateY = 'transform: translateY(0px)';
    // this.setTimeout(function () {
    //     document.querySelector('.header').classList.add('active-v2');
    // }, 700)
  } else {
    $(".header").removeClass("active");
    // document.querySelector('.header').classList.remove('active-v2');
  }
});
