<template>
	<div id="watch">
        <li v-for="item in res">
            <h2>{{item.title}}</h2>
            <p>{{item.container}}</p>
        </li>
		<!-- <div>{{res.container}}</div> -->
	</div>
</template>

<script>
	 import axios from 'axios'


	export default{
		data(){
			return {
				msg:'这个页面包含了使用axios去请求ajax数据和其他事件方法',
                otherData: '测试',
                res: [],
                name:''
			}
		},
		created(){
			var _self = this;
            console.log("初始化加载数据开始...");
            axios.get('static/json/watch.json', {
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
		}
	}
</script>

<style scoped>
	#watch{
		width: 100%;
		height: 100%;
	}
	#watch h2{
		text-align: center;
		font-size: 20px;
	}
	#watch p{
		text-indent: 24px;
		font-size: 14px;
	}
</style>