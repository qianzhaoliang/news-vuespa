<template>
    <div class="fixed-top">
        <li>
             <router-link to="/index">头条</router-link>
        </li>
        <li>
            <router-link to="/sociology">社会</router-link>
        </li>
        <li>
            <router-link to="/domestic">国内</router-link>
        </li>
        <li>
            <router-link to="/entertainment">娱乐</router-link>
        </li>
        <li>
            <router-link to="/sports">体育</router-link>
        </li>
        <li class="Military">军事</li>
        <li class="science">科技</li>
        <li class="Finance">财经</li>
        <li class="fashion">时尚</li>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg: ''
            }
        }
    }
</script>
<style>
    .fixed-top {
        background: #fff;
        width: 100%;
        height: 40px;
        z-index: 99;
        display: flex;
    }
    .fixed-top li {
        flex: 1;
        display: inline-block;
        float: left;
        text-align: center;
        line-height: 40px;
    }
    .fixed-top a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 40px;
    }
</style>
