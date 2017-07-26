<!-- 首页内容渲染 -->
<template>
  <div id="app">
    
    <!-- 渲染出口 -->
    <vanimate v-show="isShow"></vanimate>
    <router-view></router-view>

    <toolbar></toolbar>
    
  </div>
</template>
<script>
   // import './css/common.css'
    import './css/reset.css'
    //import navCompontent from './components/nav.vue'
    import vanimate from './components/vanimate.vue'
    import toolbar from './components/toolbar.vue'
    
    export default{ 
        data(){
            return{
                msg:'Hello vue',
                isShow:true
            }
        },
        components:{
            toolbar,
            vanimate
        },
        created(){
            var that = this;
            setTimeout(function(){
                that.isShow = false;
            },2000)
        }
    }
</script>

<style>
    html,body{
        width: 100%;
        height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
        background: url(image/bg.jpg) no-repeat;
    }
</style>
