window.addEventListener('scroll', function () {
    let header = document.querySelector('header');   /*Scroll Menu */
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});

/*TABS */
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for(let i=0;i<tabHeaderNodes.length;i++){
  tabHeaderNodes[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNodes[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyNodes[i].classList.add("active");
  });
}


$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


//Lightbox

lightbox.option({
  'resizeDuration': 300,
  'wrapAround': true
})