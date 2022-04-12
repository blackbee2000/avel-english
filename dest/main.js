AOS.init();
//-----------------------------------loading-------------------------------------------------
setTimeout(function(){
  $('.loading').addClass('disable-loading');
},3000)
//-----------------------------------cursor--------------------------------------------------
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.screenY - 95) + "px; left:" + e.screenX + "px;"
  );
});
function hoverElement() {
  var cursor1 = $(".cursor");
  var logo = $(".logo");
  var menu = $("header .container .menu li");
  var sub = $(".title-sub");
  var title = $(".title");
  var content = $(".content");
  var title_course = $(".course__title");
  var button = $(".button");
  var paragraphAbout = $(".aboutUs .paragraph");
  var image = $(".image-slider");
  var swipe = $(".cursor .swipe");
  var prenex = $(".course__control");
  //logo
  logo.mouseover(function () {
    cursor1.addClass("hover-logo");
  });
  logo.mouseout(function () {
    cursor1.removeClass("hover-logo");
  });
  //menu-header
  menu.mouseover(function () {
    cursor1.addClass("hover-menu");
  });
  menu.mouseout(function () {
    cursor1.removeClass("hover-menu");
  });
  //title
  title.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  title.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //sub
  sub.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  sub.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //content
  content.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  content.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //title-course
  title_course.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  title_course.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //button
  button.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  button.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //prenext Course
  prenex.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  prenex.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //about Us
  paragraphAbout.mouseover(function () {
    cursor1.addClass("hover-element");
  });
  paragraphAbout.mouseout(function () {
    cursor1.removeClass("hover-element");
  });
  //image
  image.mouseover(function () {
    cursor1.addClass("hover-image");
    swipe.addClass("active-swipe");
  });
  image.mouseout(function () {
    cursor1.removeClass("hover-image");
    swipe.removeClass("active-swipe");
  });
}
hoverElement();
//----------------------------------Click menu header ---------------------------------------------
$('.nav-menu-span').on('click', function () {
  $('.menu-hidden').toggleClass('active-menu-hidden')

});
$('.menu-hidden ul li a').on('click', function () {
  $('.menu-hidden').removeClass('active-menu-hidden')
})
$('.button-close').on('click', function () {
  $('.menu-hidden').removeClass('active-menu-hidden')

})
// -----------------------------------------------------registerbutton-------------------------------------------------------------

$(".registerButton").on("click", function () {
  $(".popup").addClass("activePopup");
  $(".shadow").addClass("activePopup");
});
$(".shadow").on("click", function () {
  $(".popup").removeClass("activePopup");
  $(".shadow").removeClass("activePopup");
});
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    // <DO YOUR WORK HERE>
    $(".popup").removeClass("activePopup");
    $(".shadow").removeClass("activePopup");
  }
});
//----------------------------------------------------------------------------------------
$(".studySettle .carousel").flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  imagesLoaded: true,
  lazyLoad: 2,
  prevNextButtons: true,
  pageDots: false,
  on: {
    ready: function (index) { },
    change: function (index) {
      let content = $(".studySettle .content-study .paragraph-text");
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
      let aboutContent = $(".aboutUs .content-about .paragraph");
      aboutContent.eq(index).addClass("active--Aboutus");
      aboutContent.eq(index).siblings().removeClass("active--Aboutus");
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
  on: {
    ready: function (index) {
      let dotted = $(".flickity-page-dots");
      // console.log("thai duy linh", dotted);
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

      //Active slider
      let activeSlider = $(".slider__card_content-left--item");
      activeSlider.eq(index).addClass("active--Slider");
      activeSlider.eq(index).siblings().removeClass("active--Slider");
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
  var menuSpan = $('header .nav-menu-span');
  if (heightScroll > 10) {
    header.addClass("active");
  } else {
    header.removeClass("active");
  }

  if (heightScroll / this.window.innerHeight >= 0.99) {
    menu.addClass("blackMenu");
    menuSpan.addClass("black-nav");
  } else {
    menu.removeClass("blackMenu");
    menuSpan.removeClass("black-nav");
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
    $("header .container .menu li a").removeClass("active-menu");
    $("header .container .menu .aboutUsMenu").addClass("active-menu");
  } else if (heightScroll <= this.window.innerHeight * 7) {
    $("header .container .menu li a").removeClass("active-menu");
    $("header .container .menu .feedbackMenu").addClass("active-menu");
  } else {
    $("header .container .menu li a").removeClass("active-menu");
    $("header .container .menu .contactMenu").addClass("active-menu");
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
      let contentCourse = $(".course__item_content-item");
      contentCourse.eq(index).addClass("active--Course");
      contentCourse.eq(index).siblings().removeClass("active--Course");
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
          { scrollTop: $('.slider').offset().top },
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
      if ($(this).text() === "Feedback") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".feedback").offset().top },
          "5000"
        );
      }
      if ($(this).text() === "Contact") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".contact").offset().top },
          "5000"
        );
      }
      if ($(this).text() === "Feedback") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".feedback").offset().top },
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
