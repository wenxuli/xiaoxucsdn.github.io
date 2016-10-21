$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        effect : 'fade',
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        loop: true, 
        autoplay: 5000,//可选选项，自动滑动   
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

      })
})