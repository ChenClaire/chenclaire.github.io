function goTo(el) {
    var ID = "#" + el;
    $('body, html').animate({ scrollTop: $(ID).offset().top }, '700');
}

$(window).load(function() {
    $(".loading").fadeOut(500);
});


$("[data-fancybox]").fancybox({
});

$('.intro .keywords').transition({ y: '10px', opacity: 1, delay: 100 }, 900);
$('.intro .introduction').transition({ y: '-10px', opacity: 1, delay: 100 }, 700);

$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
});

$(".homeKey").click(function() {
    window.location.href = "index.html";
});

$(".topKey").click(function() {
    $('body, html').animate({ scrollTop: 0 }, '700');
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
        $(".topKey").fadeIn();
    } else {
        $(".topKey").fadeOut();
    }
});

$('.carousel').carousel();
