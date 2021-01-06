!(function ($) {
  "use strict";

  // Nav Menu
  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if (hash == "#header") {
          $("#header").removeClass("header-top");
          $("section").removeClass("section-show");
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass("fad fa-bars fad fa-times");
            $(".mobile-nav-overly").fadeOut();
          }
          return;
        }

        if (!$("#header").hasClass("header-top")) {
          $("#header").addClass("header-top");
          setTimeout(function () {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
          }, 350);
        } else {
          $("section").removeClass("section-show");
          $(hash).addClass("section-show");
        }

        $("html, body").animate(
          {
            scrollTop: 0,
          },
          350
        );

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fad fa-bars fad fa-times");
          $(".mobile-nav-overly").fadeOut();
        }

        return false;
      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $("#header").addClass("header-top");
      $(".nav-menu .active, .mobile-nav .active").removeClass("active");
      $(".nav-menu, .mobile-nav")
        .find('a[href="' + initial_nav + '"]')
        .parent("li")
        .addClass("active");
      setTimeout(function () {
        $("section").removeClass("section-show");
        $(initial_nav).addClass("section-show");
      }, 350);
    }
  }

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fad fa-bars"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass("fad fa-bars fad fa-times");
      $(".mobile-nav-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fad fa-bars fad fa-times");
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var photographyIsotope = $(".photography-container").isotope({
      itemSelector: ".photography-item",
      layoutMode: "fitRows",
    });

    $("#photography-flters li").on("click", function () {
      $("#photography-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      photographyIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox({
      share: ["facebook", "twitter", "linkedin", "pinterest", "download"],
      spinner: "wave",
      spinColor: "#18d26e",
      overlayColor: "rgba(0, 0, 0, 0.6)",
      numeratio: true,
      autoplay: true,
    });
  });

  // Photography details carousel
  $(".photography-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);
