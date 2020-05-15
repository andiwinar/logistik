$(document).ready(function(){

  // Navbar
  $(".navbar").addClass("fixed-top");
  $(".navbar-nav").attr("id", "navbar-nav");
  var navbar = document.getElementById("navbar-nav");
  navbar.setAttribute('style', 'line-height:58px');

  $(window).scroll(function(){
      if ($(".navbar").offset().top > 100) {
          $(".fixed-top").addClass("top-nav-collapse");
          navbar.setAttribute('style', 'line-height:34px');
      } else {
          $(".fixed-top").removeClass("top-nav-collapse");
          navbar.setAttribute('style', 'line-height:58px');
      }
  });

});