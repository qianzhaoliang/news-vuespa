<template>
	<div id="toolbar" class="fixed-bottom">
		<li>
			<router-link to="/index">首页</router-link>
		</li>
		<li>社区</li>
		<li>
			<router-link to="/search">搜索</router-link>搜索</li>
		<li>
			<router-link to="/person">个人</router-link>
		</li>
		

	</div>
</template>

<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>

<style>
	.fixed-bottom{
		z-index: 1000;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		height:40px;
		display: flex;
	}
	.fixed-bottom li{
		flex:1;
		display:  inline-block;
		line-height: 40px;
		float: left;
		text-align: center;
	}
	.fixed-bottom a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 40px;
    }
</style>