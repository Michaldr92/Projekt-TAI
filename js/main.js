 $(document).ready(function() {

    $(".button-menu").click(function(e) {
      e.preventDefault();

      $(".sidebar-navigation").toggle("600");
    });

    $(".sidebar-navigation li").on("click", function() {
      $(".sidebar-navigation li").removeClass("active");
      $(this).addClass("active");
    });

});