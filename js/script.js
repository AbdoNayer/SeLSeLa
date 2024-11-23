// Window Load screen

$(window).on("load", function () {
  // Loading Page
  $(".spinner")
    .delay(500)
    .fadeOut(400, function () {
      document.documentElement.style.setProperty(
        "--backRightIn",
        "translateX(100%)"
      );
      document.documentElement.style.setProperty(
        "--backLefttIn",
        "translateX(-100%)"
      );
      $(".loader").fadeOut(300);
    });
  $("body").css("overflow-y", "auto");

  // Animation Page
  AOS.init();
});

$(document).ready(function () {
  $(".fix-up").hide();
  // Scroll Fix Header
  $(window).scroll(function () {
    if ($(window).width() > 767) {
    }
    if ($(this).scrollTop() > 50) {
      $(".fix-up").show();
    } else {
      $(".fix-up").hide();
    }
  });

  // Click Scroll Up Page
  $(document).on("click", ".fix-up", function () {
    $(window).scrollTop(0);
  });

  // Click Open Nav Mobile
  $(document).on("click", ".click-nav, .overlay", function () {
    $(".handle").toggleClass("closed");
    $(".list-head").toggleClass("!translate-x-[0%]");
    $(".overlay").toggleClass("translate-x-[-100%]");
    $("body").toggleClass("overflow-hidden");
  });

  // Slider Home
  $(".sliderHome").owlCarousel({
    loop: false,
    margin: 1000,
    center: false,
    autoplay: true,
    touchDrag: false,
    mouseDrag: false,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: true,
    nav: false,
    navText: [
      '<i class="icon-arrow-left"></i>',
      '<i class="icon-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
