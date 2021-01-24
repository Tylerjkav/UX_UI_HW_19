$(".toggle").on("click", function(){
    $("#toggleDown").slideToggle("slow");
  });
  
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });  
