const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  mouseMultiplier: 1.5,
  // mouseMultiplier: 4,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// window.addEventListener("scroll", function () {
//   var header = document.querySelector("nav");
//   header.classList.toggle("sticky", window.scrollY > 50);
// });

function openSide() {
  document.getElementById("mySidebar").style.transform = "translateX(0%)";
  document.body.style.overflow = "hidden";
}
function closeSide() {
  document.getElementById("mySidebar").style.transform = "translateX(100%)";
  document.body.style.overflow = "overlay";
}

emailjs.init("vxSzcrmEQGIbJMkeu");
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_gaonob8", "template_i7p6luh", this).then(
        function () {
          $("form")[ 0 ].reset();
          alert("Email Sent Sucessfully !");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

$(document).ready(function () {
  $("#contact-form").attr("action", "/yourMailScript.cgi");
});
