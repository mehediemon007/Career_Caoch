;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new WOW().init();
    });

    // Hero Banner

    $(".hero-banner-wpr").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
    })
    
    // Client Review

    $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        margin:16,
        nav:false,
        smartSpeed:500,
        responsive:{
            0:{
                items: 1.25
            },
            575:{
                items: 2.35
            },
        }
    })

    // Counter

    if($('.counter').length){

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    
    }

    // Nav Search

    $(".nav-search i").on("click",function(){
        $(".nav-search form").toggleClass("open")
    })

    // Mobile Menu

    $(".nav-toggle").on("click",function(){
        $(".nav-list").addClass("open")
    })

    $(".nav-close").on("click",function(){
        $(".nav-list").removeClass("open")
    })

    $(".nav-list li a").on("click",function(){
        if($(".nav-list").hasClass("open")){
            $(".nav-list").removeClass("open")
        }
    })
      

})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".header-wpr");

    if(headerContainer != null){
        window.onscroll = ()=>{
            this.scrollY > 80 ? headerContainer.classList.add("fixed") : headerContainer.classList.remove("fixed");
        }
    }

})()