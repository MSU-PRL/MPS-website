$(function() {
  var btn = $('.back-to-top-btn');
  btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 2000);
});
  var btndirectionsfopd = $('.fopd-directions-btn');
  btndirectionsfopd.on('click', function() {
    $('html,body').animate({
      scrollTop: $(".directions").offset().top}, 2000);
});
});