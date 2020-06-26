$(document).ready(function(){
    let mainVisualSwiper = new Swiper('.main-visual', {
        loop : true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.mv-btn-next',
            prevEl: '.mv-btn-prev',
        }
    });
    // mainVisualSwiper js  
    function autoplayPlay(){
        mainVisualSwiper.autoplay.start();
    }
    function autoplayStop(){
        mainVisualSwiper.autoplay.stop();
    }
    // mainVisualSwiper-autoplay play/stop js end;
    
    let saleRankingSwiper = new Swiper('.sale-ranking', {
        slidesPerView: 4,
        spaceBetween: 60,
        loop : true,
        speed: 1000,
        // autoplay: {
        //     delay: 3000,
        // },
        navigation: {
            nextEl: '.sr-btn-next',
            prevEl: '.sr-btn-prev',
        }
    });
    // saleRankingSwiper js

    function autoplayPlay(){
        saleRankingSwiper.autoplay.start();
    }
    function autoplayStop(){
        saleRankingSwiper.autoplay.stop();
    }
    // autoplay play/stop js
    // saleRankingSwiper-autoplay play/stop js end;
});

