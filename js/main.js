function main(){
    (function(){
        'use strict';
        $(window).scroll(function(){
            if($(".navbar").offset().top>50){
                $(".navbar-fixed-top").addClass("top-nav-collapse")
            }else{
                $(".navbar-fixed-top").removeClass("top-nav-collapse")
            }
        });
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 40
                }, 900);
                return false;
              }
            }
          });
        $(window).bind("scroll",function(){
            var navHeight=$(window).height()-100
            if($(window).scrollTop()>navHeight){
                $(".navbar-default").addClass("on")
            }else{
                $(".navbar-default").removeClass('on')
            }
        });
        $('body').scrollspy({
            target:'.navbar-default',
            offset:80
        });
        $(document).ready(function(){
            $("#testimonial").owlCarousel({
                navigation:false,
                slideSpeed:300,
                singleItem:true,
                paginationSpeed:400,
                autoPlay:3000
            })
        });
        $(window).load(function() {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
    
        });
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });	
}())
}
main()