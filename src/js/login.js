$(function(){
	//自动登录
	autoLogin();
	function autoLogin(){
		if($('.showBox').eq(1).hasClass('active')){
			localStorage.setItem('autoLoginFlag','true')
		}else{
			localStorage.removeItem('autoLoginFlag')
		}
		//if(localStorage.getItem('autoLoginFlag')){}
	}
	//选择切换
	$('.showBox').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active')
		}
		//显示隐藏密码
		if($('.showBox').eq(0).hasClass('active')){
			$('#pwd').attr({
				type: 'text'
			});
		}else{
			$('#pwd').attr({
				type: 'password'
			});
		}
		autoLogin();
	});
	$('.goRegister').click(function(){
		//console.log(1);
		window.location.href = 'register.html';
	});
	$('.goLogin').click(function(){
		//帐号密码不为空
		if($('#userID').val()!=null && $('#pwd').val()!=null){
			$.ajax({
				url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
				type: 'get',
				data: {
					status:'login',
					userID:$('#userID').val(),
					password:$('#pwd').val()
				},
			})
			.done(function(data) {
				//console.log(data);
				if((typeof data)=='string'&&data!=0 && data!=2){
					localStorage.setItem('loginFlag','true');
					localStorage.setItem('userID',$('#userID').val());
					window.location.href = 'classify.html';
				}else if(data==0){
					localStorage.setItem('loginFlag','flase');
					$('.tips').html('用户名不存在');
				}else if(data==2){
					localStorage.setItem('loginFlag','flase');
					$('.tips').html('用户名密码不符')
				}
				console.log($.parseJSON(data));
			})
			.fail(function() {
				console.log("error");
			});
		}else{
			$('.tips').html('请输入用户名密码!');
		}	
	});
});