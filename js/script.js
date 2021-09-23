$(document).ready(function(){

    $('.slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    $('.slider_two').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            1000:{
                items:4
            },
            992:{
                items:3
            },
            576:{
                items:3
            },
            575:{
                items:1
            },
            414:{
                items:1
            },
            413:{
                items:1
            },
            0:{
                items:1
            },
        }
    });
});

