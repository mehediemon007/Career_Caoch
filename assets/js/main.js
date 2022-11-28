;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new wow().init()
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

    const owl = $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        margin:24,
        nav:false,
        dotsEach: 2,
        smartSpeed:500,
        stagePadding: 16,
        responsive:{
            0:{
                items: 1
            },
            575:{
                items: 3
            },
        }
    });

    $('.owl-dots button').attr('aria-label', 'owl-btn');

    // Slider Center Div

    var activeElement = $('.client-reviews .owl-item.active');
    $(activeElement[1]).addClass("middle")
    // activeElement.eq(0).addClass('selezionato');

    owl.on('changed.owl.carousel', function(event) {

        $(".client-reviews .owl-item").each(function( index, value ) {
            if($(value).hasClass("middle")){
                $(value).removeClass("middle")
            }
        });

        activeElement = $('.client-reviews .owl-item.active');
        $(activeElement[2]).addClass("middle")

    });



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
    
    // Magnifig Popup
     if($(".videolink").length){
        
        $('.videolink').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                   youtube: {
                      index: 'youtube.com/', 
                      id: 'v=', 
                      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
                  }
                }
            }
        });

    }

    // Single Product Slider

    jQuery(document).ready(function() {
        var productPreview = jQuery(".banner-preview");
        var productThumb = jQuery(".banner-thumb");
        var slidesPerPage = 5; //globaly define number of elements per page
        var syncedSecondary = true;
    
        productPreview.owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: false,
            animateIn: "fadeIn",
            autoplayHoverPause: true,
            autoplaySpeed: 1400,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,

        }).on("changed.owl.carousel", syncPosition);
    
        productThumb.on("initialized.owl.carousel", function() {

            productThumb .find(".owl-item").eq(0).addClass("current");

        }).owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            margin:16,
            smartSpeed: 1000,
            slideSpeed: 1000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,

        }).on("changed.owl.carousel", syncPosition2);
    
        function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;
    
          //if you disable loop you have to comment this block
          var count = el.item.count - 1;
          var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    
          if (current < 0) {
            current = count;
          }
          if (current > count) {
            current = 0;
          }
    
          //end block
    
          productThumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = productThumb.find(".owl-item.active").length - 1;
          var start = productThumb
          .find(".owl-item.active")
          .first()
          .index();
          var end = productThumb
          .find(".owl-item.active")
          .last()
          .index();
    
          if (current > end) {
            productThumb.data("owl.carousel").to(current, 100, true);
          }
          if (current < start) {
            productThumb.data("owl.carousel").to(current - onscreen, 100, true);
          }
        }
    
        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            productPreview.data("owl.carousel").to(number, 100, true);
          }
        }
    
        productThumb.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = jQuery(this).index();
          productPreview.data("owl.carousel").to(number, 300, true);
        });

    });

    // Dropdown

    $(".topic-label").on("click", function () {
        var $this = $(this);
        // $this.find("i").toggleClass("fa-chevron-down fa-chevron-up");
        $($this).next().toggleClass("hide");
    });
      

})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".header-wpr");

    if(headerContainer != null){
        window.onscroll = ()=>{
            this.scrollY > 80 ? headerContainer.classList.add("fixed") : headerContainer.classList.remove("fixed");
        }
    }

    var navToggle = document.querySelector(".nav-toggle");

    navToggle.addEventListener("click",()=>{

       $(".cc-nav-menu").slideToggle("200");

    })

    $("li.menu-item-has-children").on("click",function(){

        $(".sub-menu").slideToggle("200");
        
    })

})()