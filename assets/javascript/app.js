$(document).ready(function() {
  $(document).on("click", "#projects-link", function() {
    $("html,body").animate(
      {
        scrollTop: $(".projects-main").offset().top
      },
      "slow"
    );
  });
  $(document).on("click", "#about-link", function() {
    $("html,body").animate(
      {
        scrollTop: $(".about").offset().top
      },
      "slow"
    );
  });
  $(document).on("click", "#reachMe-link", function() {
    $("html,body").animate(
      {
        scrollTop: $(".reach-me").offset().top
      },
      "slow"
    );
  });
});
