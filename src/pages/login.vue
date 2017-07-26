<template>
	<div class="login-page">
		<mt-header title="登录">
              <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
              </router-link>
              <mt-button icon="more" slot="right"></mt-button>
        </mt-header> 
		<form action="post" id="login">
			<div class="item item-username">
				<input id="username" class="input txt-username" type="text" placeholder="请输入手机号" value="" name="username" ref="username">
			</div>
			<div class="item item-password">
				<input id="password" class="input txt-password ciphertext" type="password" placeholder="请输入密码" name="password" style="display: inline-block;" ref="password">
				<!-- <input id="ptext" class="txt-input txt-password plaintext" type="text" placeholder="请输入密码" style="display: none;" name="ptext"> -->
				<b class="tp-btn btn-off"></b>
			</div>
			<div class="item item-login-option">
				<span class="hint" v-show = "isShow">账号或密码错误</span>
				<span class="hint-null" v-show = "isShow2">请输入账号密码</span>
				<!-- <span class="retrieve-password"> <a class="" href="#"> 找回密码</a> </span> -->
          		<div class="clr"></div>
			</div>
			<div class="ui-btn-wrap"  @click="login">
				<router-link to="" class="ui-btn-lg ui-btn-primary">用户登录</router-link>
			</div>
			<div class="ui-btn-wrap">
				<router-link to="/register">没有账号？立即注册</router-link>
			</div>
			<div class="item item-login-other"></div>
		</form>
	</div>
</template>

<script>
    import axios from 'axios'
	import { Header,Lazyload, Swipe, SwipeItem,Indicator } from 'mint-ui'
	export default{
		data(){
			return {
				username:null,
				password:null,
				isShow:false,
				isShow2:false,
			}
		},
		created(){

		},
		methods:{
			login(){
				this.isShow = false;
				this.isShow2 = false;
				var usn = this.$refs.username.value;
				var pwd = this.$refs.password.value;
				this.username = this.$refs.username.value;
				this.password = this.$refs.password.value;
				console.log(usn,pwd);
				var self_ = this;
				if(usn == '' || pwd == ''){
					this.isShow2 = true;
				}else{
					axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
						params: {
	                		status:'login',
	                		userID:usn,
	                		password:pwd
	              		}
					})
					.then(function(res){
						console.log(res);
						if(res.data == 0 || res.data == 2){
							//登录失败
							self_.isShow = true;
						}else if(res.statusText == "OK"){
							var config = res.data;
							var storage = window.localStorage;
							storage.setItem('login',true);
							storage.setItem("userID",config.userID);
							window.location.href = "/person";
							// return window.location.href="http://localhost:8000/pseron"
						}
					})
					.catch(function(err){
						console.log(err);
					})
				}

				
			}
		}
	}
</script>

<style scoped>
	.login-page{
		background: url(../image/bg.png) no-repeat center;
		background-size: cover;
		font-size:14px;
		color:#333;
		width:100%;
		height:100%;
	}
	#login{
		padding: 15px 10px 80px 10px;
	}
	#login .item{
		margin-bottom: 10px;
	}
	#login .item-login-option{
		font-size: 14px;
		margin-bottom: 5px;
		text-align: right;
	}
	#login .ui-btn-wrap{
		padding-top: 5px;
		padding-bottom: 10px;
	}
	#username{width: 100%;background: url(../image/phone.png) no-repeat 10px center;background-size: 12px;background-color: #FFF;}
	.input{height: 44px;line-height: 44px;margin-bottom: 10px;padding-left: 30px;font-size: 14px;width: 100%}
	.ui-btn-lg {cursor:pointer;border-radius:5px;display: block;font-size: 14px;height: 40px;line-height: 40px;width: 100%; text-align:center;}
	.ui-btn-primary {background-clip: padding-box;background-color: #26a2ff;color: #fff;}
	.ui-btn-danger{background-clip: padding-box;background-color: #de3b8a;border-color: #de3b8a;color: #fff;}
	.login-page .item-login-option{height:14px;}
	.login-page .item .hint{color:red;}
	.login-page .item .hint-null{color:red;}
</style>

