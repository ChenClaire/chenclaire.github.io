$(window).load(function() {
   $(".loading").fadeOut(500);
})




 function goTo(el) {
     var ID = "#" + el;
     $('body, html').animate({ scrollTop: $(ID).offset().top }, '700');
 }

 $('.intro .fullName').transition({ y: '15px', opacity: 1 }, 1000);
 $('.intro .keywords').transition({ y: '-10px', opacity: 1, delay: 100 }, 900);
 $('.intro .selfIntro').transition({ opacity: 1 }, 700);

 $(".navbar-nav li a").click(function(event) {
     $(".navbar-collapse").collapse('hide');
 });

 $(".homeKey").click(function() {
     window.location.href = "index.html";
 });

$('.carousel').carousel();
 //fly-in effect
 // var timer = 0;

 // function recheck() {
 //     var window_top = $(this).scrollTop();
 //     var window_height = $(this).height();
 //     var view_port_s = window_top;
 //     var view_port_e = window_top + window_height;

 //     if (timer) {
 //         clearTimeout(timer);
 //     }

 //     $('.fly').each(function() {
 //         var block = $(this);
 //         var block_top = block.offset().top;
 //         var block_height = block.height();

 //         if (block_top < view_port_e) {
 //             timer = setTimeout(function() {
 //                 block.addClass('show-block');
 //             }, 100);
 //         } else {
 //             timer = setTimeout(function() {
 //                 block.removeClass('show-block');
 //             }, 100);
 //         }
 //     });
 // }

 // $(function() {
 //     $(window).scroll(function() {
 //         recheck();
 //     });

 //     $(window).resize(function() {
 //         recheck();
 //     });

 //     recheck();
 // });