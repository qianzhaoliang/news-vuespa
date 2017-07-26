<template>
	<div id="animate">
		<div id="showFirst" class="first">
			<div class="index2Logo"><img src="../image/index/logo.jpg" alt=""></div>
			<p class="slogan">想看新闻App 把新闻放到口袋里</p>
			<div class="index2Foot"><img src="../image/index/footer.jpg"></div>
		</div>
		
	</div>
</template>

<style>
	
</style>

<script>
	import '../css/css/swiper-3.3.1.min.css'
	import '../css/css/animate.css'
	import '../css/css/style.css'

	import '../js/jquery-2.2.3.min.js'
	import '../js/swiper-3.3.1.min.js'
	import '../js/swiper.animate1.0.2.min.js'
	import '../js/common.js'
	// import '../js/index.js'

	export default{
		data(){
			return {}
		},
		created(){

			// window.onload = function(){
				var showFirst = document.getElementById('showFirst');
				var oMySwiper = document.getElementsByClassName('swiper-container')[0];
				var startFtop = document.getElementsByClassName('startFtop')[0];
				var startFbot = document.getElementsByClassName('startFbot')[0];
				var startLastBot = document.getElementsByClassName('startLastBot')[0];
				//var oCanvas = document.getElementById('oCanvas');
				//var myClock = oCanvas.getContext('2d');
				var hours,minutes;
				//首页加载完成之后显示swiper
				// setTimeout(function(){
				// 	showFirst.style.zIndex = 4;
				// 	oMySwiper.style.zIndex = 5;
				// 	oMySwiper.style.opacity = 1;
				// },1000)
				// showFirst.addEventListener('animationend',function(){
				// 	//console.log(1);
				// 	this.style.zIndex = 4;
				// 	oMySwiper.style.zIndex = 5;
				// 	oMySwiper.style.opacity = 1;
				// },false);

				//开始页的swiper
				var mySwiper = new Swiper('.swiper-container', {
					pagination : '.swiper-pagination',
					onSlideChangeEnd:function(){
						console.log(mySwiper.activeIndex);
						if(mySwiper.activeIndex==1){
							$('.startSbot').addClass('startSAnimation');
						}else if(mySwiper.activeIndex==2){
							$('.startTbot').addClass('startSAnimation');
							$('.startTtop').addClass('startTAnimation');
						}
					}
				})

				//开始页第一页动画
				// startFtop.addEventListener('animationend',function(){
				// 	startFbot.style.cssText = '-webkit-animation: showStartFbot 2s  ease-in-out forwards;-o-animation: showStartFbot 2s  ease-in-out forwards;animation: showStartFbot 2s ease-in-out forwards;'
				// },false)
				//开始页第二页
				//时钟
				function drawCircle(ctx,x,y,r,color){
					ctx.beginPath();
					ctx.fillStyle = color;
					ctx.arc(x,y,r,0,2*Math.PI,false);
					ctx.fill();
					ctx.closePath();
				}

				function drawClockwize(ctx,x,y,r,ang,color){
					var oX = x + r*Math.cos(ang);
					var oY = y +r*Math.sin(ang);
					var disX = x + 20*Math.cos(ang);
					var disY = x + 20*Math.sin(ang);
					ctx.beginPath();
					ctx.strokeStyle = color;
					ctx.lineCap = 'round';
					ctx.lineWidth = '6';
					ctx.moveTo(oX,oY)
					ctx.lineTo(disX,disY);
					ctx.stroke();
					ctx.closePath();
				}
				//var timer = setInterval(getTime,500);
				function getTime(){
					var oDate = new Date();
					var hour = oDate.getHours();
					var minute = oDate.getMinutes();
					var second = oDate.getSeconds();
					var hourAng = (hour+minute/60)*Math.PI/6 - Math.PI/2;
					var minuteAng = (minute+second/60)*Math.PI/30 - Math.PI/2;
					myClock.clearRect(0,0,500,500);
					drawCircle(myClock,56,56,56,"#e43669");
					drawCircle(myClock,56,56,51,"white");
					drawCircle(myClock,56,56,12,"#e43669");

					drawClockwize(myClock,56,56,35,hourAng,"#e43669");
					drawClockwize(myClock,56,56,45,minuteAng,"#e43669");
				}
				// startLastBot.onclick = function(){
				// 	window.location.href = 'classify.html';
				// }
			// }
		}
	}



</script>