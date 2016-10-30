$(document).foundation();

$(document).ready(function () {
  if ($(window).width() >= 1024) {
    $(".nav").addClass("show-on-desktops");
  }
});

$(window).on("resize", function() {
  if ($(window).width() >= 1024) {
    $(".nav").addClass("show-on-desktops");
  }
  else {
    $(".nav").removeClass("show-on-desktops");
  }
});

var introWaypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function(direction) {
    console.log("intro waypoint");
    $(".intro-menu-link").addClass("current");
    $(".bullet-link").not(".intro-menu-link").removeClass("current");
  },
   offset: '90%'
});

var aboutMeWaypoint = new Waypoint({
  element: document.getElementById('about-me'),
  handler: function(direction) {
    $(".about-me-menu-link").addClass("current");
    $(".bullet-link").not(".about-me-menu-link").removeClass("current");
  }
});

var workWaypoint = new Waypoint({
  element: document.getElementById('work'),
  handler: function(direction) {
    $(".work-menu-link").addClass("current");
    $(".bullet-link").not(".work-menu-link").removeClass("current");
  }
});

var schoolWaypoint = new Waypoint({
  element: document.getElementById('school'),
  handler: function(direction) {
    $(".school-menu-link").addClass("current");
    $(".bullet-link").not(".school-menu-link").removeClass("current");
  }
});

var contactWaypoint = new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
    $(".contact-menu-link").addClass("current");
    $(".bullet-link").not(".contact-menu-link").removeClass("current");
  }
});
