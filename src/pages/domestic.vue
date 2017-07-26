<template>
    <div id="wrapper" class="container">
        <headItem></headItem>
        <nav-compontent></nav-compontent> 

        <div id="news-wrapper">
            <ul>
                <router-link :to="{path:'/watch'}" v-for="item in res" tag='li'>
                    <h2><a href="#" v-link="{path:'/' + item.url}" v-text="item.title"></a></h2>
                    <span>{{item.date}}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    // ajax 使用官方推荐的 axios
    import axios from 'axios'
   // import '../static/iscroll/iscroll-probe.js'
   // import '../static/iscroll/iscroll.css'
    import navCompontent from 'src/components/nav.vue'
    import headItem from 'src/components/item.vue'

    export default{
        data(){
            return{
                msg:'这个页面包含了使用axios去请求ajax数据和其他事件方法',
                otherData: '测试',
                res: []
            }
        },
        created () {
            var _self = this;
            console.log("初始化加载数据开始...");
            axios.get('static/json/guonei.json', {
              params: {
                
              }
            })
            .then(function (response) {
                console.log(response);
                 _self.res = response.data.result.data;
            })
            .catch(function (error) {
              console.log(error);
            });
            /*axios.get('funny/index?type=top&key=263481cd77a8164caa2cc30f883fc751',{
                
            })
            .then(function(res){
                console.log(res);
            })
            .catch(function(err){
                console.log(err);
            })*/
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
            headItem
        }
    }

        
</script>

<style>
    #wrapper{
        padding-bottom: 40px
    }
    #news-wrapper{
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
        flex-direction: column
    }
    #news-wrapper ul li{
        margin:5px auto;
        width: 100%;
        flex: 1;
        float: left;
    }
    #news-wrapper ul li a{
        line-height: 27px;
    }
    #news-wrapper ul li span{
        position: absolute;
        right: 0;
    }
</style>
