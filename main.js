$(document).ready(function(){

      $(".panel-button").eq(0).on('click', function(){
        $(".panel1").slideToggle(200);

          console.log('event1');
   });

      $(".box").eq(0).hover(function (event) {
        event.preventDefault();
        $(this).css("background-color", "green");

          console.log('event1')
   });
      $(".box").eq(1).dblclick(function (){
          event.preventDefault();
        $(this).css("background-color", "green")
      });

      $(".box").eq(2).bind('click', function(){
          alert("The box was clicked.");

        console.log('event1')
      });

      $(".box").eq(3).mouseover(function (){
          event.preventDefault();
          $(this).css("background-color", "green")

            console.log('event1')
      });

      $(".box").eq(3).mouseout(function (){
        event.preventDefault();
        $(this).css("background-color", "green")

        console.log('event1')
  });

 });
