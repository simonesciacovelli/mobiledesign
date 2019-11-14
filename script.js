

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


$(document).ready(function(){
  $('.main-carousel').slick({
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

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