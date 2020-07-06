$("#begin").click(function() {
  $('html, body').animate({
    scrollTop: $("#you").offset().top
  }, 1000);
});

$("#to-company").click(function() {
  $('html, body').animate({
    scrollTop: $("#company").offset().top
  }, 1000);
});

$("#to-project").click(function() {
  $('html, body').animate({
    scrollTop: $("#project").offset().top
  }, 1000);
});

