//$('#arch').on('mouseenter',function(){
//    $('body').css( "background-color", "#4A7E80");
//})
//$('#arch').on('mouseleave',function(){
//    $('body').css( "background-color", "white");
//})

//$('.logo').svgInject();

$(document).ready(function(){
    $("#arch").hover(function(){
        $(".d").css("opacity", "1");
        }, function(){
        $(".d").css("opacity", "0");
    });
});

$(document).ready(function(){
    $("#info").hover(function(){
        $(".a").css("opacity", "1");
        }, function(){
        $(".a").css("opacity", "0");
    });
});

$(document).ready(function(){
    $("#news").hover(function(){
        $(".b").css("opacity", "1");
        }, function(){
        $(".b").css("opacity", "0");
    });
});

$(document).ready(function(){
    $("#strokes").hover(function(){
        $(".c").css("opacity", "1");
        }, function(){
        $(".c").css("opacity", "0");
    });
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

//$('#wormenu').click(function() {
//    $('.worm').toggle();
//    $(this).toggleClass('.worm.active');
//    return false;
//})

//('#toggle').click(function(){
//   $(".worm").css("fill", "white");
//   }, function(){
//   $(".worm").css("fill", "black");
//);
  // $(document).ready(function(){
  //   $('.collapsible').collapsible();
  // });
      