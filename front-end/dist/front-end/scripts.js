
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

// ;(function ($) {
//   var options = {};
//   window.sr = ScrollReveal(options);
//   sr.reveal('.sr-item', { viewFactor: 0.6, duration: 500 });
//   sr.reveal('.sr-item--seq', { viewFactor: 0.6, duration: 500 }, 50);
// })(jQuery);

// window.onscroll = function() {myFunction()};
// var header = document.getElementById("nav-wrapper");
// var sticky = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// }

$(() => {
  $('select').formSelect();
  $("#stars").html( drawStars() );
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
  $('.datepicker').datepicker();
  $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 1500,'easeInOutExpo');
    e.preventDefault();
  });
});

// Testing
// app = angular.module('stars_app', []);
// app.controller(stars_ctrl, ($scope) => {
//   $scope.stars = "";
//   for (var k=1; k<=5; k++) {
//     if (k <= stars) { $scope.stars += `<i class="material-icons star-button" ng-class="star-on" style="position:relative; left:.5rem;">star</i>`; }
//     else            { $scope.stars += `<i class="material-icons star-button" ng-class="star-off" style="position:relative; left:.5rem;">star</i>`; }
//   }
// });
// drawStars(range) => {
//   var htmlStar = "";
//   for (var k=1; k<=5; k++) {
//     if (k <= range) { htmlStar += `<i class="material-icons star-button" ng-class="star-on" style="position:relative; left:.5rem;">star</i>`; }
//     else            { htmlStar += `<i class="material-icons star-button" ng-class="star-off" style="position:relative; left:.5rem;">star</i>`; }
//   }
//   console.log("================> ", htmlStar);
//   return htmlStar;
// }
// $('#star').on('click', function(){
//   $('#star').addClass('selected');
//   var count = $(this).attr('name');
//   for (var i=0; i<count-1; i++) {
//       $('.star').eq(i).removeClass('selected');
//   }
// });

;
//# sourceMappingURL=scripts.js.map