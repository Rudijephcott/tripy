document.addEventListener("keyup", function (e) {
  if (e.keyCode === 71) {
    document.querySelector(".grid-overlay").classList.toggle("show");
  }
});

$(document).ready(function () {
  $(".nav-bar a").click(function (event) {
    let targetElement = $(this.hash);
    if (targetElement.length) {
      event.preventDefault();
      let targetCalc = targetElement.offset().top - 125;
      $("html, body").animate(
        {
          scrollTop: targetCalc,
        },
        1000
      );
      if ($(".mobile-menu-link a").hasClass("active")) {
        $(".mobile-menu-link a").removeClass("active");
        $(".nav-items-container").removeClass("show");
        $(".register-container").removeClass("show");
      }
    }
  });

  $(".mobile-menu-link a").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".nav-items-container").removeClass("show");
      $(".register-container").removeClass("show");
    } else {
      $(this).addClass("active");
      $(".nav-items-container").addClass("show");
      $(".register-container").addClass("show");
    }

    return false;
  });

  var $carousel = $(".carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: false,
  });

  // previous wrapped
  $(".carousel-arrows .previous").on("click", function () {
    $carousel.flickity("previous", true);
  });

  // next wrapped
  $(".carousel-arrows .next").on("click", function () {
    $carousel.flickity("next", true);
  });

  // variable for highest height
  let maxHeight = 0;

  // defining what im looping through, which in this case is .each .slide inside of .carousel
  $(".carousel .slide-content.match-height").each(function () {
    // this is referring to the slide in question thats being looped through
    let thisHeight = $(this).outerHeight(true);
    // simple if loop
    if (thisHeight > maxHeight) {
      maxHeight = thisHeight;
    }
    console.log(maxHeight);
  });
  $(".carousel .slide-content.match-height").css({ height: maxHeight + "px" });
});

// (function() {

//     const target = document.querySelector(".target");
//     const links = document.querySelectorAll(".nav-items a");

//     function mouseenterFunc() {
//       if (!this.parentNode.classList.contains("active")) {
//         for (let i = 0; i < links.length; i++) {
//           if (links[i].parentNode.classList.contains("active")) {
//             links[i].parentNode.classList.remove("active");
//           }
//           links[i].style.opacity = "0.25";
//         }

//         this.parentNode.classList.add("active");
//         this.style.opacity = "1";

//         const width = this.getBoundingClientRect().width;
//         const height = this.getBoundingClientRect().height;
//         const left = this.getBoundingClientRect().left + window.pageXOffset;
//         const top = this.getBoundingClientRect().top + window.pageYOffset;

//         target.style.width = `${width}px`;
//         target.style.height = `${height}px`;
//         target.style.left = `${left}px`;
//         target.style.top = `${top}px`
//         target.style.transform = "none";
//       }
//     }

//     for (let i = 0; i < links.length; i++) {
//       links[i].addEventListener("click", (e) => e.preventDefault());
//       links[i].addEventListener("mouseenter", mouseenterFunc);
//     }

//     function resizeFunc() {
//       const active = document.querySelector(".mynav li.active");

//       if (active) {
//         const left = active.getBoundingClientRect().left + window.pageXOffset;
//         const top = active.getBoundingClientRect().top + window.pageYOffset;

//         target.style.left = `${left}px`;
//         target.style.top = `${top}px`;
//       }
//     }

//     window.addEventListener("resize", resizeFunc);

//   })();
