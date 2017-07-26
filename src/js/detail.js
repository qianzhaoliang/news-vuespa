$(function(){
	//图片滑动
	var myScroll = new IScroll('#wrapper', { 
		eventPassthrough: true, 
		scrollX: true, 
		scrollY: false,   
		preventDefault: false,
		click:true 
	});
	var secScroll = new IScroll('#dWrapper', { 
		eventPassthrough: true, 
		scrollX: false, 
		scrollY: true, 
		preventDefault: false,
		click:true 
	});
/*-------------商品资料内容--------------*/
	var timer = setTimeout(function(){
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			type: 'get',
			data: {
				goodsID: sessionStorage.getItem('goodsID')||localStorage.getItem('goodsID'),
			},
		})
		.done(function(res) {
			//console.log(res);
			eval(res);
		})
		.fail(function() {
			console.log("error");
		});
		function callback(info){
			console.log(info);
			var imgurl = [];
			for(var i=0;i<$('.picBox img').size();i++){
				imgurl[i] = info[0].goodsBenUrl.replace(/\"|\[|\]/g, "").split(',')[i];
				$('.picBox img').eq(i).attr({
					src: imgurl[i]
				});
			}
			$('.dMid h2').html(info[0].goodsName);
			$('.nowPrice').html('￥'+(info[0].price*info[0].discount*0.1).toFixed(2));
			$('.priceBox del').html(info[0].price);
			$('.buyHot span').html(info[0].buynumber);
			if(localStorage.getItem('goodsID')){
				sessionStorage.setItem('goodsID',localStorage.getItem('goodsID'));
			}
			localStorage.removeItem('goodsID');
		}
	},50);
/*--------------页码显示-----------------*/
	myScroll.on('scrollEnd',function(){
		var disX = $('#scroller').offset().left;
		$('.activeBox span').removeClass('active');
		console.log(disX);
		if(disX >= -76){
			$('.activeBox span').eq(0).addClass('active');
		}else if(disX < -76 && disX>=-100){
			$('.activeBox span').eq(1).addClass('active');
		}else{
			$('.activeBox span').eq(2).addClass('active');
		}
	});
/*--------------------加入购物车---------------------------*/
	$('.addShopCart').click(function(){
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/updatecar.php',
			type: 'get',
			data: {
				userID: localStorage.getItem('userID'),
				goodsID:sessionStorage.getItem('goodsID')||localStorage.getItem('goodsID'),
				number:'1'
			},
		})
		.done(function(data) {
			console.log(data);
		})
		.fail(function() {
			console.log("error");
		});
	});
})