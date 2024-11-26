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

  // Scroll For Section
  $(document).on(
    "click",
    ".nav-list-header li a, .links-footer li a",
    function (e) {
      $("html, body").animate(
        {
          scrollTop: $("#" + $(this).data("value")).offset().top - 80,
        },
        50
      );
      e.preventDefault();
      if ($(window).width() < 990) {
        $(".handle").toggleClass("closed");
        $(".list-head").toggleClass("!translate-x-[0%]");
        $(".overlay").toggleClass("translate-x-[-100%]");
        $("body").toggleClass("!overflow-hidden");
      }
    }
  );

  // Click Open Nav Mobile
  $(document).on("click", ".click-nav, .overlay", function () {
    $(".handle").toggleClass("closed");
    $(".list-head").toggleClass("!translate-x-[0%]");
    $(".overlay").toggleClass("translate-x-[-100%]");
    $("body").toggleClass("!overflow-hidden");
  });

  // Click Open Nav Mobile
  $(document).on("click", ".icon-eye", function () {
    $(this).toggleClass("icon-eye-off");
    var input = document.getElementById('inputPassword');
    if (input.type === "password") {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  // Slider Features
  $(".sliderFeatures").owlCarousel({
    loop: false,
    margin: 20,
    center: false,
    autoplay: false,
    touchDrag: true,
    mouseDrag: true,
    smartSpeed: 1000,
    pagination: false,
    nav: true,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Slider What Said
  $(".sliderWhatSaid").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    // autoWidth:true,
    autoplay: false,
    touchDrag: true,
    mouseDrag: true,
    smartSpeed: 1000,
    pagination: false,
    nav: true,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
