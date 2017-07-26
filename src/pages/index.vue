<template>
    <div id="wrapper" class="container">
        <!-- <headItem></headItem> -->
         <mt-header title="热点推送">
              <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
              </router-link>
              <mt-button icon="more" slot="right"></mt-button>
        </mt-header> 
        <!-- <nav-compontent></nav-compontent>  -->

        <mt-swipe :auto="4000" class="swiper">
            <mt-swipe-item class="slide" v-for="item in banner">
                <img :src="item.imgsrc" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <div id="news-wrapper">
            <ul>
                <div v-for="item in res" tag='div' class="new-wrapper">
                    <a :href="item.url" class="new-box">
                        <div class="new-img">
                            <img :src="item.thumbnail_pic_s" alt="">
                        </div>
                        <div class="new-des">
                             <h2>{{item.title}}</h2>
                            <span>{{item.date}}</span>
                        </div>
                       
                    </a>
                </div>
                <!-- <aside :show.sync="showRight" placement="right" header="title" width="350">{{item.title}}</aside> -->
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { Header,Lazyload, Swipe, SwipeItem,Indicator } from 'mint-ui'

    import navCompontent from 'src/components/nav.vue'
    import headItem from 'src/components/item.vue'

    export default{
        data(){
            return{
                res: [],
                newslist:[],
                banner:[],
                name:'',
                newSrc:[]
            }
        },
        created () {
            var _self = this;
            console.log("初始化加载数据开始...");
            axios.get('/api?type=top&key=263481cd77a8164caa2cc30f883fc751', {
              params: {
                
              }
            })
            .then(function (response) {
                console.log(response);
                 _self.res = response.data.result.data;
                //console.log(_self.res[0].url);
               // console.log(_self.res.length)
               /* for (var i=0;i< _self.res.length;i++){
                    var str = _self.res[i].url;
                    var index = str .lastIndexOf("\/"); 
                    _self.newSrc[i]  = str.substring(index + 1, str.length);
                }
                console.log(_self.newSrc)*/
                //var a = _self.getContent(_self.res[0].url);
               // console.log(a);
            })
            .catch(function (error) {
              console.log(error);
            });

            //获取banner图
            axios.get('/banner',{
                params: {
                
                }
            })
            .then(function (response) {
                console.log('87',response);
                 _self.banner = response.data.T1348647853363;

            })
            .catch(function (error) {
              console.log(error);
            });
        },
        methods: {
            // fn1: function(){
            //     console.log("这是点击事件!");
            // },
            // fn2: function(){
            //     console.log("点击事件2");
            // }
         },
        components:{
            navCompontent,
            headItem,
            mtSwipe:Swipe,
            mtSwipeItem:SwipeItem,
        }
    }

        
</script>

<style scoped>
    #wrapper{
        padding-bottom: 40px;
    }
    #news-wrapper{
        padding:10px 10px 0px 10px !important;
        background-color:#fff; 
        padding: 0;
        margin:0;
        color: #333;
        box-sizing: border-box;
        font-family: "Microsoft Yahei",sans-serif;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
    }
    #news-wrapper ul{
        display: flex;
        flex-direction: column;
        line-height: 27px;
    }
    #news-wrapper ul .new-wrapper{
        margin:5px auto;
        padding:5px;
        width: 100%;
        flex: 1;
        float: left;
        position: relative;
        border-bottom: 1px solid #e6e6e6;
        box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 1);
    }
    #news-wrapper ul div a{
        line-height: 27px;
    }
    #news-wrapper ul div span{
        display: block;
        width: 100%;
        text-align: right;
    }

    .container .swiper{
        height:240px;
        background-color: #fff;
    }
    .slide{
        position: relative;
    }
    .slide img{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    #news-wrapper .new-box{
        width: 100%;
        
    }
    #news-wrapper .new-img{
        float: left;
        width: 30%;
        height: 100%;
    }
    #news-wrapper .new-img img{
        width: 100px;
        height: 100px;
    }
    #news-wrapper .new-des{
        float: left;
        width: 70%;
        padding: 5px 0 0 5px;
    }
</style>
