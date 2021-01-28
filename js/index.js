$(".toggle").on("click", function(){
    $("#toggleDown").slideToggle("slow");
  });
  
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });  

  // $("a[href='#work']").click(function() {
  //   $("html, body").animate({ scrollTop: 50 }, "slow");
  // });  


  // $("#work").click(function (){
  //    $('html, body').animate({
  //       scrollTarget: $("#workStart").offset().top
  //     },  1000);
  // });

//   $("#work").click(function (){
//     $('html, body').animate({
//        scrollTop: $("#workStart").offset().top
//      },  1000);
//  });




$("#work").click(function (){
  $('html, body').animate({
    scrollTop: ($('#workStart').offset().top)
  },500);
});