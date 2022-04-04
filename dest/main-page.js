//-----------------------------------cursor--------------------------------------------------
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.screenY - 95) + "px; left:" + (e.screenX) + "px;"
  );
});
function hoverElement() {
  var cursor1 = $('.cursor');
  var logo = $('.logo');
  var menu = $('header .container .menu li');
  var sub = $('.title-sub');
  var title = $('.title');
  var content = $('.content');
  var title_course = $('.course__title');
  var button = $('.button');
  var paragraphAbout = $('.aboutUs .paragraph')
  //logo
  logo.mouseover(function () {
    cursor1.addClass('hover-logo')
  })
  logo.mouseout(function () {
    cursor1.removeClass('hover-logo')
  })
  //menu-header
  menu.mouseover(function () {
    cursor1.addClass('hover-menu')
  })
  menu.mouseout(function () {
    cursor1.removeClass('hover-menu')
  })
  //title
  title.mouseover(function () {
    cursor1.addClass('hover-element')
  })
  title.mouseout(function () {
    cursor1.removeClass('hover-element')
  })
  //sub
  sub.mouseover(function () {
    cursor1.addClass('hover-element')
  })
  sub.mouseout(function () {
    cursor1.removeClass('hover-element')
  })
  //content
  content.mouseover(function () {
    cursor1.addClass('hover-element')
  })
  content.mouseout(function () {
    cursor1.removeClass('hover-element')
  })
  //title-course
  title_course.mouseover(function () {
    cursor1.addClass('hover-element')
  })
  title_course.mouseout(function () {
    cursor1.removeClass('hover-element')
  })
  //button
  button.mouseover(function () {
    cursor1.addClass('hover-element')
  })
  button.mouseout(function () {
    cursor1.removeClass('hover-element')
  })
  //about Us
  paragraphAbout.mouseover(function () {
    cursor1.addClass('hover-element')
  })
  paragraphAbout.mouseout(function () {
    cursor1.removeClass('hover-element')
  })
}
hoverElement();
//----------------------------------------------------------------------------------------
$(".studySettle .carousel").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: false,
  pageDots: false,
  on: {
    ready: function (index) { },
    change: function (index) {
      let content = $(".paragraph-text");
      console.log(content);
      content.eq(index).addClass("active-content");
      content.eq(index).siblings("p").removeClass("active-content");
    },
  },
});
$(".aboutUs .carousel").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: true,
  pageDots: false,
  on: {
    ready: function (index) { },
    change: function (index) {
      // let content = $('.paragraph-text');
      // console.log(content);
      // content.eq(index).addClass('active-content');
      // content.eq(index).siblings('p').removeClass('active-content');
    },
  },
});
//parallax
var $carousel = $(".carousel").flickity();
var flkty = $carousel.data("flickity");
var $imgs = $(".carousel-cell .image img");
$carousel.on("scroll.flickity", function (event, progress) {
  flkty.slides.forEach(function (slide, i) {
    var img = $imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style.transform = "translateX( " + x + "px)";
  });
});
//----------------------------------------------------Slider Banner-------------------------------------------------------
$(".slider__card_content-right--img").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  selectedAttraction: 0.01,
  friction: 0.1,
  imagesLoaded: true,
  prevNextButtons: false,
  pageDots: true,
  // autoPlay: 3000,
  on: {
    ready: function (index) {
      let dotted = $(".flickity-page-dots");
      console.log("thai duy linh", dotted);
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

//scroll header
window.addEventListener("scroll", function () {
  var heightScroll = document.documentElement.scrollTop;
  var header = $(".header");
  var menu = $("header .container .menu li a");
  if (heightScroll > 10) {
    header.addClass("active");
  } else {
    header.removeClass("active");
  }

  if (heightScroll / this.window.innerHeight >= 0.99) {
    menu.addClass("backMenu");
  } else {
    menu.removeClass("backMenu");
  }
  console.log("====================================");
  console.log($("header .container .menu li a"));
  console.log("====================================");
  if (heightScroll < this.window.innerHeight * 3 - 20) {
    $("header .container .menu li a").removeClass("active-menu");
    $("header .container .menu .homeMenu").addClass("active-menu");
  } else if (heightScroll < this.window.innerHeight * 4) {
    $("header .container .menu li a").removeClass("active-menu");
    $("header .container .menu .courseMenu").addClass("active-menu");
  } else if (heightScroll < this.window.innerHeight * 5) {
    $("header .container .menu li a").removeClass('active-menu');
    $("header .container .menu .aboutUsMenu").addClass('active-menu');
  } else if (heightScroll < this.window.innerHeight * 6) {
    $("header .container .menu li a").removeClass('active-menu');
    $("header .container .menu .feedbackMenu").addClass('active-menu');
  }
  // if(heightScroll )
});
//------------------------------------------------scroll to top ------------------------------------------------------
$(".footer_back").on("click", function () {
  $([document.documentElement, document.body]).animate(
    { scrollTop: 0 },
    "5000"
  );
});

//------------------------------------------------course--------------------------------------------------------------
$(".course__item_img").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  selectedAttraction: 0.01,
  friction: 0.1,
  imagesLoaded: true,
  prevNextButtons: false,
  pageDots: false,
  on: {
    ready: function () { },
    change: function (index) {
      //sub title
      let subTitle = $(".course__item_content-titleSub .title-sub");
      subTitle.eq(index).addClass("active--title-sub");
      subTitle.eq(index).siblings().removeClass("active--title-sub");

      //title
      let title = $(".course__item_content-title .title");
      title.eq(index).addClass("active--title");
      title.eq(index).siblings().removeClass("active--title");

      //content
      let content = $(".course__item_content-content .content");
      content.eq(index).addClass("active--content");
      content.eq(index).siblings().removeClass("active--content");

      //button
      let button = $(".course__item_content-button .button");
      button.eq(index).addClass("active--button");
      button.eq(index).siblings().removeClass("active--button");
    },
  },
});

$(".course__control_prev").on("click", function (event, progress) {
  $(".course__item_img").flickity("previous");
  $(".course__bottom_scrollBar-progressBar").css({
    width: Math.max(0, Math.min(1, progress)) * 100 + "%",
  });
});
$(".course__control_next").on("click", function (event, progress) {
  $(".course__item_img").flickity("next");
  $(".course__bottom_scrollBar-progressBar").css({
    width: Math.max(0, Math.min(1, progress)) * 100 + "%",
  });
});

//------------------------------------progress bar course ----------------------------------------
$(".course__item_img")
  .flickity()
  .on("scroll.flickity", function (event, progress) {
    $(".course__bottom_scrollBar-progressBar").css({
      width: Math.max(0, Math.min(1, progress)) * 100 + "%",
    });
  });

//-------------------------------------scroll to element ----------------------------------------
function scrollToElement() {
  $("header .container .menu li a").each(function (index) {
    $(this).click(function () {
      if ($(this).text() === "Home") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: 0 },
          "5000"
        );
      }
      if ($(this).text() === "Course") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".course").offset().top - 20 },
          "5000"
        );
      }
      if ($(this).text() === "About Us") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".aboutUs").offset().top },
          "5000"
        );
      }
      if ($(this).text() === "Contact") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".contact").offset().top },
          "5000"
        );
      }
    });
  });
}

scrollToElement();
// initPhotoSwipeFromDOM(".family__img_list");
//-----------------------------------------------------------feedback-------------------------------------------------------
$(".feedback__content_list").flickity({
  cellAlign: "center",
  wrapAround: true,
  contain: true,
  draggable: true,
  prevNextButtons: false,
  pageDots: false,
  on: {
    ready: function () { },
    change: function (index) { },
  },
});

$(".feedback__control_prev").on("click", function () {
  $(".feedback__content_list").flickity("previous");
});

$(".feedback__control_next").on("click", function () {
  $(".feedback__content_list").flickity("next");
});
