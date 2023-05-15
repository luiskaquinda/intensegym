
$(".video-play").on('click', function(e) {
  e.preventDefault(); 
  var vidWrap = $(this).parent(),
      iframe = vidWrap.find('.video iframe'),
      iframeSrc = iframe.attr('src'),
      iframePlay = iframeSrc += "?autoplay=1";
  vidWrap.children('.video-thumbnail').fadeOut();
  vidWrap.children('.video-play').fadeOut();
  vidWrap.find('.video iframe').attr('src', iframePlay);


});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
  
});

// $('.owl-carousel-video').owlCarousel({
//   items: 3,
//   loop: true,
//   video: true,
//   lazyLoad: true
// });

$('.owl-carousel-video').owlCarousel({
  items:1,
  merge:true,
  loop:true,
  margin:16,
  video:true,
  lazyLoad:true,
  center:true,
  responsive:{
      480:{
          items:2
      },
      600:{
          items:4
      }
  }
})


// $('.owl-carousel').owlCarousel({
//   items:1,
//   merge:true,
//   loop:true,
//   margin:10,
//   video:true,
//   lazyLoad:true,
//   center:true,
//   responsive:{
//       480:{
//           items:2
//       },
//       600:{
//           items:4
//       }
//   }
// })

// const swiper = new Swiper('.swiper', {

//   speed: 400,
//   spaceBetween: 100,
//   initialSlide: 0,
//   //truewrapper adoptsheight of active slide
//   autoHeight: true,
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   enabled: true,
//   // delay between transitions in ms
//   autoplay: 5000,
//   autoplayStopOnLast: false, // loop false also

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

//   effect: 'slide',
//   // Distance between slides in px.
//   spaceBetween: 60,
//   //
//   slidesPerView: 2,
//   //
//   centeredSlides: true,
//   //
//   slidesOffsetBefore: 0,
//   //
//   grabCursor: true,
// });

// var lastScrollTop = 0;
// var navbar = document.getElementById("navbar");

// window.addEventListener("scroll", function() {
// 	let scrollTop = window.document.pageYOffset || document.documentElement.scrollTop;
	
//   if(scrollTop > 0) {
// 		navbar.style.top = "-80px";
// 	} else {
// 		navbar.style.top = "0px";
// 	}

// 	lastScrollTop = scrollTop;
// })

$( document ).ready(function() {

// Parallax

setTimeout(function() {
  $('#contact-section').parallax({imageSrc: 'assets/img/cidadeparallax.png'});
  $('#apply-area').parallax({imageSrc: 'assets/img/pattern.png'});
}, 200);

});
