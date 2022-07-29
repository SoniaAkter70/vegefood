

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


var countDownDate = new Date("oct 20, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

},1000);

$(document).ready(function(){
    // accordian collapse content
    $( "#accordi" ).accordion({
        collapsible: true
    });

    // scroll top



});
var btn1 = document.querySelectorAll('.product-icon a:first-child');

btn1.forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.quickView-modal1').style.display = 'block';
    });
});
function closeModal(){
    document.querySelector('.quickView-modal1').style.display = 'none';
};

// pre loader

function loading(){
    document.getElementById('preloader').style.display= 'none';
};

// menu open

function openMenu(){
    document.querySelector('.mobile-menu').style.transform = 'translateX(0px)';
    document.querySelector('.mobile-menu').style.transition = '1s';
};

// close menu

function closeMenu(){
    document.querySelector('.mobile-menu').style.transform = 'translateX(-425px)';
    document.querySelector('.mobile-menu').style.transition = '1s';
};

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scrolltop').fadeIn();
        }else{
            $('#scrolltop').fadeOut();
        }
    });
    $('#scrolltop').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000);
    });
});