/* Sticky Navigation */
window.onscroll = function() {stickyNav()};

var nav = document.getElementById("navbar");

var magnet = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= magnet) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}

/* Timeline */
$(document).ready(function () {
    var tl = new TimelineMax();
    var objects = $('.one h1, .one p');
    tl.staggerFrom(objects, 1, {opacity:0, x:'-200px'}, 0.6);
});


/* Scroll To */
$(document).ready(function() {
    $("a.go-to").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});


/**
 * Add parallax effect on hover
 */
$(document).mousemove(function (e) {
    $('.mountain-front').parallax(-20, e);
    $('.mountain-back').parallax(-15, e);
});


/**
 *
 * Animation on scroll
 */
var $animated_elements = $('.animated-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animated_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


/**
 *
 * Show/hide social sidebar
 */
$('input#menu-trigger[type="checkbox"]').on('change', function () {
    if (this.checked) {
        $('.nav ul').addClass('trigger-checked');
        $('.nav label').addClass('label-active');
    }
    else {
        $('.nav ul').removeClass('trigger-checked');
        $('.nav label').removeClass('label-active')
    }
});


/* Modal box */

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

$('.function-disabled').on('click', function (e) {
    e.preventDefault();
    toggleModal();
});


$("video[autoplay]").each(function(){ this.play(); });


/**
 * Buttons for animation
 * @type {*|jQuery|HTMLElement}
 */
var button = $('.show-on-click');
button.on('click', function (e) {
    e.preventDefault();
    if ( $(this).hasClass("show-parallax") ) {
        $('.section.five').slideToggle("slow");
        $('.section.font-animation').slideUp("fast");
        $('.section.counter').slideUp("fast");
    }
    else if ( $(this).hasClass("show-font-animation") ) {
        $('.section.font-animation').slideToggle("slow");
        $('.section.five').slideUp("fast");
        $('.section.counter').slideUp("fast")
    }else {
        $('.section.counter').slideToggle('slow');
        $('.section.font-animation').slideUp("fast");
        $('.section.five').slideUp("fast");
        //Counter
        $('.counting').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text()}).animate({ countNum: countTo },
                {   duration: 3000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
        });
    }
});




