/*global $, document, window*/
$(document).ready(function () {

  "use strict";
  
  // Header height
  
  $(".header").height($(window).height() - $(".header .navbar").innerHeight());
  
  if ($(window).width() < 992) {
    $(".lnews-oteam .main-news").css("height", "300px");
  } else {
    // Other news height
    $(".lnews-oteam .main-news").height($(".lnews-oteam .other-news").height());
  }

  $(window).on("resize", function () {
    
    $(".header").height($(window).height() - $(".header .navbar").innerHeight());
    
  
    $(".lnews-oteam .main-news").height($(".lnews-oteam .other-news").height());
    
    if ($(window).width() < 992) {
      $(".lnews-oteam .main-news").css("height", "300px");
    } else {
      // Other news height
      $(".lnews-oteam .main-news").height($(".lnews-oteam .other-news").height());
    }
    
  });
  
});
