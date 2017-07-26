<template>
  <div class="imgNav swiper-container">
    <ul class="swiper-wrapper">
        <li class="swiper-slide"><img src="../image/banner/1.png" alt=""></li>
        <li class="swiper-slide"><img src="../image/banner/2.jpg" alt=""></li>
        <li class="swiper-slide"><img src="../image/banner/3.jpg" alt=""></li>
        <li class="swiper-slide"><img src="../image/banner/4.jpg" alt=""></li>  
    </ul>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>   
  </div>
</template>
<script>
    import 'src/static/swiper/swiper-3.4.1.min.css'
    import 'src/static/swiper/swiper-3.4.1.min.js'
    export default{
        data(){
            return{
                msg: 'Hello vue'
            }
        },
        created(){
            console.log(1);
        }
    }
    //swiper生成
    window.onload = function(){
        console.log(2);
        var mySwiper = new Swiper('.swiper-container',{
            loop: true,
            pagination: '.swiper-pagination',
            autoplay:2000
        });
    }
    
</script>
<style scoped>
    .imgNav{
        width: 100%;
        margin: 0 auto;
        height: 200px;
    }
    .imgNav ul{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .imgNav ul li{
        width: 100%;
        height: 100%;
    }
    .imgNav img{
        width: 100%;
        height: 100%;
    }
</style>
