
$( document ).ready( function() {

    $(".view_bt").mousedown(function() {

            $(".con_1").slideToggle(700)
            $(".con_sel").slideToggle(700)

          });
    $(".view_bt2").mousedown(function() {
          $(".con_2").slideToggle(700);
          $(".con_sel").slideToggle(700)
          $(".background").slideToggle(300)
        });

      $(".view_bt3").mousedown(function() {
            $(".con_3").slideToggle(700);
            $(".con_sel").slideToggle(700)
            // $(".background").slideToggle(300)
          });
      $(".view_bt4").mousedown(function() {
            $(".con_4").slideToggle(700);
            $(".con_sel").slideToggle(700)
            // $(".background").slideToggle(300)
          });

});

// $(".view_bt2").mousedown( function() {
// $("body").css("background-color","yellow");
// });
