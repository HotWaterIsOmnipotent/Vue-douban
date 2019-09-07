<template>
  <div class="banner swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2533206566.webp" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2511811355.webp" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2539661066.webp" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2514119443.webp" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2535260806.webp" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2517083000.webp" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://img3.doubanio.com/view/photo/l/public/p2523912923.webp" alt="">
          </div>
      </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    created(){
        this.$nextTick(()=>{
            new Swiper('.banner', {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                loop:true,
                autoplay:true,
                delay:300,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            })
        })
    },
    mouted(){
        /* new Swiper('.banner', {
            loop:true
        }) */
    },
    updated(){
        console.log(111111111111)
        new Swiper('.banner', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    }
}
</script>

<style lang = 'scss'>
    html, body {
      position: relative;
      height: 100%;
    }
    body {
      /* background: #eee; */
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition: 300ms;
	  transform: scale(0.8);
      img{
          width:1.3rem;
      }
    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
	}
    #banner{
        img{
            width:1rem
        }
    }
</style>