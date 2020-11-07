// Jquery-start
$(document).ready(function () {
    //===== close navbar-collapse when a  clicked
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    $(".one-page .navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });   
    //===== close navbar-collapse when a  clicked 
    $("#feature").waypoint(function(direction) {
        if (direction == "down") {
            $("#nav").addClass("sticky");
            $("sticky").fadeIn();
        } else {
            $("#nav").removeClass("sticky");
        }
        offset: '100%';
    });
    // project-filter
    $('.filter-container').filterizr();
    // filter-active
    $('.filter-btn li').on('click', function () {
        $('.filter-btn li').removeClass('filter-active');
        $(this).addClass('filter-active');
    })
    // project-filter-end
    // Venobox
    $('.viweimg').venobox(); 
    // Venobox-end
    // owl-carosule
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        nav:true,
        margin: 20,
        slidesToShow: 4,
        slidesToScroll: 1,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        resonsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0 : {
                items: 1,
            },
            500 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1000 : {
                items: 2
            },
            1200 : {
                items: 3,
            },
            1920 : {
                items: 4
            }
        }
      });  
      $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    // owl-carosule-end
});
// Jquery-end
// Jvascript-start

// navbar hover effect
var marker =document.querySelector('#marker');
var item =document.querySelectorAll('nav ul a');
function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}
item.forEach(link =>{
link.addEventListener('mouseover', (e)=>{
    indicator(e.target)
});
});
// wow-js init
new WOW().init();
// project-counter
$('.counter').counterUp({
    delay: 10,
    time: 5000
});
// project-counter-end
