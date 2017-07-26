<template>
	<div id="person">
		<div class="userinfo">
		    <div class="clean">
		        <img class="userimg" src="../image/3_img6.png">
		        <div class="username">昵称：{{name}}</div>
		        <a href="">
		            
		            <div class="sysmsg">
		            </div>
		        </a>
		    </div>
		</div>
		

		<div class="list">
		    <ul>
		        <li>
		            <a class="newlive" href="#">我的消息<span></span></a>
		        </li>
		        <li>
		            <a class="mylive" href="#">我的收藏<span></span></a>
		        </li>
		        <li>
		            <a class="renzheng" href="#">反馈<span></span></a>
		        </li>
		    </ul>
		</div>

	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				name:"还未登录",
			}
		},
		created(){
			var storage = window.localStorage;
			var isLogin = !!storage.getItem("login");
			console.log(storage);
			console.log(isLogin);
			if(isLogin){
				this.name = storage.userID;
			}else{
				window.location.href = "/login"
			}
		},
		methods:{

		}

	}
</script>

<style scoped>
#app{background-image: none!important;}
.clean:before,.clean:after{content:"";display:table;}
.clean:after{clear:both;}
.clean{zoom:1;}

.userinfo{width: 100%;height: 120px;background: url(../image/bg.png) no-repeat center;background-size: cover;}
.userimg{width: 80px;float: left;margin-left: 10px;margin-top: 20px;border-radius: 50%;}
.username{color: #fff;float: left;margin-top: 40px;margin-bottom:10px;margin-left: 10px;width: 50%;}
.useraccount{color: #fff;float: left;width: 50%;margin-left: 10px;}
.useraccount b{color: #00ffff;}
.sysmsg{float: right;width: 20px;height: 14px;position: relative;background: url(../image/news.png) no-repeat center;background-size: cover;margin-top: 40px;margin-right: 20px;}
.msgnum{display: inline-block;background-color: red;position: absolute;top: -6px;right: -4px;width: 14px;height: 14px;line-height: 14px;border-radius: 50%;text-align: center;color: #fff;}

.account-money{width: 100%;height: 40px;line-height: 40px;background-color: #fff;border-bottom: 1px solid #eee;}
.balance{width: 75%;background: url(../image/3_img1.png) no-repeat 20px center;background-size: 22px;padding-left: 50px;font-size: 14px;color: #666;float: left;}
.balance b{color: #ff6633;font-weight: bold;font-size: 18px;}
.topay{display: inline-block; width: 25%;height: 39px;line-height: 39px;text-align: center;float: right;background-color: #ff6633;color: #fff;font-size: 14px;}

.list{background-color: #fff;width: 100%;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;}
.list ul{width: 100%;padding-left: 15px;}
.list li{width: 100%;height: 60px;border-bottom: 1px solid #ddd;}
.list li a{display: inline-block;color: #999;height: 60px;line-height: 60px;padding-left: 36px;font-size: 16px;width: 100%;}
.list li span{width: 40px;float: right;display: inline-block;height: 100%;background: url(../image/goto.png) no-repeat center;background-size: 12px;}
.newlive{background: url(../image/3_img2.png) no-repeat 0 center;background-size: 20px;}
.mylive{background: url(../image/3_img3.png) no-repeat 0 center;background-size: 20px;}
.renzheng{background: url(../image/3_img4.png) no-repeat 0 center;background-size: 20px;}
.operationinfo{background: url(../image/3_img5.png) no-repeat 0 center;background-size: 20px;}
/*.signout{width: 100%;height: 40px;text-align: center;font-size: 14px;background:#ddd;color:#999;line-height: 40px;position: absolute;bottom: 55px;}*/
.foot{width: 100%;height: 40px;position: absolute;bottom: 0;border-top: 1px solid #ddd;}
.foot span{display: inline-block;width: 50%;height: 38px;line-height: 38px;float: left;text-align: center;font-size: 14px;color: #666;}
.foot span b{color: #ff6633;}
</style>
