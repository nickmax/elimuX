// click-scroll.js - universal smooth scroll for on-page anchors

$(document).ready(function () {
  $(".click-scroll").on("click", function (e) {
    var href = $(this).attr("href");
    // Only intercept if it's an on-page anchor (starts with #)
    if (href && href.startsWith("#")) {
      var target = $(href);
      if (target.length) {
        e.preventDefault();
        // Adjust scroll offset for fixed navbar if needed (e.g., 90px)
        var offset = target.offset().top - 90;
        $("html, body").animate({ scrollTop: offset }, 400);
      }
    }
    // If href is to another page (e.g., index.html#about), let the browser handle it
  });
});
