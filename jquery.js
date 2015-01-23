$(document).ready(function() {
  // execute our javascript when the DOM has been loaded

// our body links
  //$post1= $('body').eq(0);


// our event bindings for each click of the header navs
  // $post1.click(function (event) {
  //   event.preventDefault();
  //   var $myLi = $(this).closest("li");
  //   var $mySiblings = $myLi.siblings();
  //
  //   $mySiblings.removeClass("activeNav");
  //   $myLi.addClass("activeNav");
  //
  //   $('.post1').siblings().removeClass("active");
  //   $('.post1').addClass('active');
  //
  // });
  //
  // $post2.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("li").siblings().removeClass("activeNav");
  //   $(this).closest("li").addClass("activeNav");
  //   $('.post2').siblings().removeClass("active");
  //   $('.post2').addClass('active');
  //
  // });
  //
  // $post3.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("li").siblings().removeClass("activeNav");
  //   $(this).closest("li").addClass("activeNav");
  //   $('.post3').siblings().removeClass("active");
  //   $('.post3').addClass('active');
  //
  // });


   $("nav a").click(function (event) {
     event.preventDefault();

     var relatedClass = "." + $(this).attr('rel');  // .post1 or .post2 or .post3

       $(this).closest("li").siblings().removeClass("activeNav");
       $(this).closest("li").addClass("activeNav");
       $(relatedClass).siblings().removeClass("active");
       $(relatedClass).addClass('active');

     console.log(relatedClass);


   });
