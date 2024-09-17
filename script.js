const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
function Cursormove(){
    document.addEventListener('DOMContentLoaded', function () {
        const cursor = document.getElementById('cursor');
        const innerCursor = document.getElementById('inner-cursor');
      
        // Initial GSAP timelines for the cursor
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(innerCursor, { scale: 0 });
      
        // Mouse move event to update cursor position
        window.addEventListener('mousemove', function (e) {
          gsap.to(cursor, { duration: 0.2, x: e.clientX, y: e.clientY });
        });
      
        // Scale effect on hover of links and buttons
        const hoverElements = document.querySelectorAll('a, button, h4');
      
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
            gsap.to(innerCursor, { scale: 1.5, duration: 0.3 });
          });
      
          el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(innerCursor, { scale: 0, duration: 0.3 });
          });
        });
      });
      
}



gsap.from("#left span", {
  opacity: 0,
  y: -30,
  duration:1,
  delay: 0.5,
  stagger: 0.5, // Animates each span one by one with 0.5s gap
});
gsap.from("#right span", {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.5,
    stagger: 0.5, // Animates each span one by one with 0.5s gap
  });

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()
Cursormove()