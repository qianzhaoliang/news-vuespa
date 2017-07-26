<template>
	<div class="register">
		<mt-header title="注册">
              <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
              </router-link>
              <mt-button icon="more" slot="right"></mt-button>
        </mt-header> 
		<!-- <div class="header">
			<div class="logo"></div>
		</div> -->

		<form  id="register" method="post" class="input-wrap">
			<input class="input phonenum" value="" id="mobile" placeholder="请输入手机号" name="username" ref="username">
			<input type="password" id="password" class="input" placeholder="请输入密码" ref="password" name="password">
		    <input class="input imgrenzheng" id="imgcode" placeholder="请输入验证码" ref="imgcode">
		    <div class="code" @click="getCode"><span>{{code}}</span></div>
		    <input type="hidden" name="access_token" value="">
		    <input type="hidden" name="openid" value="">
		    <!-- <input class="input yanzhen" name="code" value="" placeholder="请输入验证码"></input>
		    <div class="send"><input type="button" id="send" value="获取验证码"></div>
		    <div id="tip-box" class="info">我们已发送短信验证码到<b id="tip-tel">15757129624</b></div> -->
		    <div class="item item-login-option">
				<span class="hint" v-show = "isShow">验证码错误</span>
				<span class="hint-null" v-show = "isShow2">用户重名</span>
				<!-- <span class="retrieve-password"> <a class="" href="#"> 找回密码</a> </span> -->
          		<div class="clr"></div>
			</div>
		   	<div class="ui-btn-wrap"  @click="register">
				<router-link to="" class="ui-btn-lg ui-btn-primary">注册</router-link>
			</div>
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
				code:'点击刷新',
				isShow:false,
				isShow2:false
			}
		},
		created(){

		},
		methods:{
			register(){
				this.isShow = false;
				this.isShow2 = false;

				var usn = this.$refs.username.value;
				var pwd = this.$refs.password.value;
				var iCode = this.$refs.imgcode.value
				//this.username = this.$refs.username.value;
				//this.password = this.$refs.password.value;
				console.log(usn,pwd);
				var self_ = this;
				if(iCode.toLocaleLowerCase() != this.code.toLocaleLowerCase()){
					this.isShow = true;
				}else{
					axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
						params: {
	                		status:'register',
	                		userID:usn,
	                		password:pwd
	              		}
					})
					.then(function(res){
						console.log(res);
						if(res.data == 0 ){
							self_.isShow2 = true;
						}else if (res.data == 1){
							console.log('go',res);
							window.location.href='/login';
						}
					})
					.catch(function(err){
						console.log(err);
					})
				}
				
			},
			getCode(){
				var cont=[];//存放0-9 A-Z a-z数据	
				var big=65;
				var small=97;
				for(var i=0;i<10;i++){	
					cont[i]=i;
				}
				for(var i=10;i<36;i++){
					cont[i]=String.fromCharCode(big);
					big++;
				}
				for(var i=36;i<62;i++){
					cont[i]=String.fromCharCode(small);
					small++;
				}
				var test=[];		//随机生成5位验证码
				for(var i=0;i<5;i++){
					test[i]=cont[Math.floor(Math.random()*62)];
				}
				this.code = test.join("");
			}
		}
	}
</script>

<style>
input{font-size:100%;-webkit-appearance:none;border: none;}
iframe,img{border: none;}
b{font-weight: normal;}
a{color:#333;text-decoration:none;}
div,input,span,a,li,ul,form,i,b{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;}
::-webkit-input-placeholder{color: #ddd;}
.register{background: url(../image/bg.png) no-repeat center;background-size: cover;font-size:14px;color:#333;width:100%;height:100%;width: 100%;height: 100%}
#register{padding: 15px 10px 80px 10px;}
.head{height: 200px;width: 100%;}
.logo{width: 155px;height: 50px;background: url() no-repeat center;background-size: cover;margin:0 auto;position: relative;top: 76px;}
.input-wrap{width: 100%;}
.input{height: 44px;line-height: 44px;margin-bottom: 10px;padding-left: 30px;font-size: 14px}
.phonenum{width: 100%;background: url(../image/phone.png) no-repeat 10px center;background-size: 12px;background-color: #FFF;}
#password{width: 100%;background: url(../image/password.png) no-repeat 10px center;background-size: 12px;background-color: #FFF;}
.yanzhen{width: 70%;background: url(../image/password.png) no-repeat 10px center;background-size: 14px;background-color: #FFF;}
.imgrenzheng{width: 70%;background: url(../image/rz.png) no-repeat 10px center;background-size: 14px;background-color: #FFF;}
.code{float: right;width: 30%;height: 44px;line-height: 44px;background-color: #FFF;margin-bottom: 5px;}
.code span{display: block;width: 100%;height: 100%;line-height: 44px;text-align: center;font-size: 14px;background-color: #ddcdd0;}
.code input{background-color: #FFF;height: 30px;border-left: 1px solid #eee;width: 100%;color: #ff6633;font-size: 14px;}
.code img{display:block;width: 80px;height: 30px;margin: 0 auto;margin-top: 7px;border: none;}
.info{padding-left: 10px;color: #999999;display: none}
.info b{color: #ff6633;}
.submit{display:inline-block;width: 80%;height: 44px;line-height: 44px;background-color: #26a2ff;color: #FFF;margin-left:10%;margin-top: 15px;font-size: 16px;letter-spacing: 4px;}
.foot{width: 100%;margin-top: 30px;}
.foot-info{text-align: center;color: #999;margin-bottom: 5px;}
.agree{color: #ff6633;text-align: center;}
.img{border:none;}
.danchuan{width: 100%;background: #FFF;position: absolute;top: 0;left: 0;overflow: auto;-webkit-overflow-scrolling: touch;padding: 10px;display: none;padding:0;}
.xieyi{width: 100%;color: #333;margin-top: 55px;}
.xieyi p{padding: 8px 0;font-size: 14px;margin:0 10px 10px 10px;}
.alert-tip{width: 100%;height: 40px;background-color: #fe7549;text-align: center;color: #fff;font-size: 16px;line-height: 40px;position: relative;}
div.nav{position:fixed;top:0;right:0;}
a.back{display: inline-block;height: 40px;font-size: 20px;color: #fff;margin-left: 5px;position: absolute;top: 0;left: 0;width: 40px;background: url(../image/back.png) no-repeat center;background-size: 12px;}
.ui-btn-wrap{
		padding-top: 5px;
		padding-bottom: 10px;
}
.ui-btn-lg {cursor:pointer;border-radius:5px;display: block;font-size: 14px;height: 40px;line-height: 40px;width: 100%; text-align:center;}
.ui-btn-primary {background-clip: padding-box;background-color: #26a2ff;color: #fff;}
.item-login-option{height:14px;}
.item .hint{color:red;float: right;}
.item .hint-null{color:red;float: right;}
</style>





