window.onload = function() {
	var footer = document.getElementsByTagName('footer')[0];
	var aRow = footer.getElementsByClassName('row');
	var page = 1;
	$('section').hide()
	$('section').eq(page).show();
	sessionStorage.removeItem('goodsID');//清除商品id，方便下次设置session；

/*--------------首页-------------*/
	aRow[0].addEventListener('click',function(){
		$('header h2').html('首页');
	},false);
/*-------------分类----------*/
	aRow[1].addEventListener('click',function(){
		$('header h2').html('新品上市');
		$('header span i').html('&#xe61b;').css({
			fontSize: '0.38rem'
		});
		loadGoods();
		$('.topNav li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			console.log($(this).index())
			loadGoods($(this).index()+1)
		});
	},false);

	function loadGoods(cla){
		$('#scrollerS li').remove();
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			type: 'get',
			data:{
				classID:cla,
			}
		})
		.done(function(data) {
			eval(data);
			var goodsRow = new IScroll('#wrapperS',{
				 bounceEasing: 'elastic', 
				 bounceTime: 1200,
				 click:true
			});
			//console.log(eval(data))
		})
		.fail(function() {
			console.log("error");
		});
		var goodsData;
		function callback(info){
			console.log(info);
			//console.log(info.length);
			var dataL = info.length;
			for(var i=0;i<dataL;i+=2){
				$('#scrollerS').append('<li class="goodsRow"><figure></figure><figure></figure></li>');
			}
			var goodsList = $('#scrollerS figure').length;
			//console.log(goodsList);
			for(var i=0;i<goodsList;i++){
				if(info[i].discount!=0){
					var pri = (info[i].price*info[i].discount*0.1).toFixed(2);
				}else{
					var pri = info[i].price;
				}
				$('#scrollerS figure').eq(i).append('<img src="'+info[i].goodsListImg+'" alt=""><figcaption><h3>'+info[i].goodsName+'</h3><div class="priceBox"><span class="nowPrice">￥'+pri+'</span><del class="oldPrice">￥'+info[i].price+'</del></div></figcaption>')
			}
			$('#wrapperS figure').each(function(index, el) {
				$(this).click(function(){
					localStorage.setItem('goodsID',info[index].goodsID);
					window.location.href = 'detail.html';
				});
			});
		}
	}
/*------------购物车------------*/
	aRow[2].addEventListener('click',function(){
		$('header h2').html('购物车');
		$('header span i').html('结算').css({
			fontSize: '0.22rem'
		});
		//获取购物车
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getCar.php',
			type: 'get',
			data: {
				userID: localStorage.getItem('userID'),
			},
		})
		.done(function(data) {
			//console.log(data);
			eval(data);
			//console.log(localStorage.getItem('userID'))
		})
		.fail(function() {
			console.log("error");
		});
		//计算总数
		function countNum(info,num){
			var count = 0;
			for(var i=0;i<info.length;i++){
				count += parseInt(info[i].number);
			}
			$('.goodsNum').html(count);
		}
		//计算总价
		function countPrice(info,num){
			var price = 0;
			for(var i=0;i<info.length;i++){
				price += parseInt(info[i].number)*parseInt(info[i].price)
			}
			$('.totalPrice i').html(price)
		}
		function callback(info){
			$('#shopCart figure').remove();
			console.log(info);
			for(var i=0;i<info.length;i++){
				var goodsItem = '<figure><img src="'+info[i].goodsListImg+'" alt=""><figcaption><h3>'+info[i].goodsName+'</h3><p class="unitPrice">单价：<span>￥<i>'+parseInt(info[i].price)+'</i></span></p><div class="count">数量：<div class="counter"><span class="sub">-</span><div class="countBox"><input type="text" name="" class="thisNum" value="'+parseInt(info[i].number)+'"></div><span class="add">+</span></div></div><div class="delete"></div></figcaption></figure>';
				$('#wrapperBuy .scroller').append(goodsItem);
			}
			var goodsScroll = new IScroll('#wrapperBuy',{
				click: true
			});
			countNum(info);//计算总数
			countPrice(info);//计算总价
			//计数框功能
			var oShopCart = document.getElementById('shopCart');
			var aSub = oShopCart.getElementsByClassName('sub');
			var aAdd = oShopCart.getElementsByClassName('add');
			var aThisNum = oShopCart.getElementsByClassName('thisNum');
			var aDelete = oShopCart.getElementsByClassName('delete');
			//console.log(aThisNum[0].value)
			//console.log(aSub);
			for(var i=0;i<aSub.length;i++){
				aSub[i].index=i;
				aAdd[i].index=i;
				aSub[i].goodsID=info[i].goodsID;
				aAdd[i].goodsID=info[i].goodsID;
				aDelete[i].goodsID=info[i].goodsID;
				console.log(aAdd[i].goodsID);
				aSub[i].onclick = function(){
					var t = this.index;
					var haha = this.goodsID;
					var num= parseInt($('.goodsNum').html());
					var totPrice = parseInt($('.totalPrice i').html());
					var singlePri =parseInt($('.unitPrice i').eq(t).html());
					var changeNum = parseInt($('.thisNum').eq(t).attr('value'))-1;
					if(changeNum<1){
						changeNum = 1;
					}else{
						$('.thisNum').eq(t).attr('value',changeNum);
						addCart(changeNum,haha);
						$('.goodsNum').html(num-1);
						$('.totalPrice i').html(totPrice-singlePri);
					}		
				}
				aAdd[i].onclick = function(){
					var t = this.index;
					var haha = this.goodsID;
					var num= parseInt($('.goodsNum').html());
					var changeNum = parseInt($('.thisNum').eq(t).attr('value'))+1;

					var totPrice = parseInt($('.totalPrice i').html());
					var singlePri =parseInt($('.unitPrice span i').eq(t).html());
					if(changeNum >99){
						changeNum = 99;
					}else{
						$('.thisNum').eq(t).attr('value',changeNum);
						addCart(changeNum,haha);
						$('.goodsNum').html(num+1);
						$('.totalPrice i').html(totPrice+singlePri);
					}
				}
				aDelete[i].onclick = function(){
					var haha = this.goodsID;
					addCart(0,haha);
					$(this).parents('figure').remove();	
				}
			}
			//设置、清除购物车内容
			function addCart(changeNum,goodsID){
				$.ajax({
					url: 'http://datainfo.duapp.com/shopdata/updatecar.php',
					type: 'get',
					data: {
						userID: localStorage.getItem('userID'),
						goodsID:goodsID,
						number:changeNum
					},
				})
				.done(function(data) {
					console.log(data);
				})
				.fail(function() {
					console.log("error");
				});	
			}
		}
	},false);
/*-------------我的秀--------------*/
	aRow[3].addEventListener('click',function(){
		$('header h2').html('我的秀');
		$('header span i').html('充值').css({
			fontSize: '0.22rem'
		});
		/*-------------登录标志+添加用户名------------*/
	if(window.localStorage){
		if(localStorage.getItem('loginFlag')){
			$.ajax({
				url: 'http://datainfo.duapp.com/shopdata/getuser.php',
				type: 'get',
				data: {
					userID: localStorage.getItem('userID'),
				},
			})
			.done(function(data) {
				//console.log(data);
				eval(data);
			})
			.fail(function() {
				console.log("error");
			});
			function callback(info){
				console.log(info);
				$('#person figcaption i').html(info[0].userID);
			}
			//;
		}else{
			window.location.href = 'login.html';
		}
	}
	},false);
/*---------------更多----------------*/
	aRow[4].addEventListener('click',function(){
		$('header h2').html('更多');
	},false);


	/*--------------控制页面存在的样式------------*/

	$('footer .row').click(function(){
		page = $(this).index();
		//console.log(page)
		$('section').hide().eq(page).show();
		
		$(this).addClass('active').siblings().removeClass('active');
		$('footer .row').each(function(index, el) {
			// console.log($(this).index());
			//if($(this).hasClass('active')){
				if(page==1){
					$('#wrapper,#wrapperS').css({
						display: 'block',
					});
					var myScroll = new IScroll('#wrapper', { 
						eventPassthrough: true, 
						scrollX: true, 
						scrollY: false, 
						preventDefault: false 
					});
					$('.topNav li').click(function(){
						$(this).addClass('active').siblings().removeClass('active');
					});
				}else{
					$('#wrapper,#wrapperS').css({
						display: 'none',
					});
					$('#scrollerS li').remove();
				}
			//}
		});
	});
}
document.addEventListener('touchmove', function (e) {
	e.preventDefault();
}, false);