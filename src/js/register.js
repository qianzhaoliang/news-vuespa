$(function(){
	
	$('.goSubmit').click(function(){
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
			type: 'get',
			data: {
				status:'register',
				userID:$('#userID').val(),
				password:$('#pwd2').val()
			},
		})
		.done(function(data) {
			console.log(data);
			
		})
		.fail(function() {
			console.log("error");
		});
	});
	var re = /^[a-zA-z]\w{3,15}$/;
	var re2 = /^[a-zA-Z0-9]{6,10}$/;
	$('#userID,#pwd,#pwd2').focus(function(){
		$('.tips').html(' ')
	});
	$('#userID').blur(function(){
		var str = $('#userID').val()
		//console.log(str);
		if(re.test(str)){
			$('.tips').html('帐号验证通过').css({
				color: 'green'
			});
		}else{
			$('.tips').html('帐号由4-16位的字母数字下划线组成').css({
				color: 'red'
			});
		}
	});
	var UserPassword,checkPass;
	$('#pwd').blur(function(){
		UserPassword = $('#pwd').val()
		if(re2.test(UserPassword)){
			$('.tips').html(' ').css({
				color: 'green'
			});
		}else{
			$('.tips').html('密码由4-16位的字母数字组成').css({
				color: 'red'
			});
		}
	});
	$('#pwd2').blur(function(){
		checkPass = $('#pwd2').val()
		if(UserPassword == checkPass){
			$('.tips').html('密码一致').css({
				color: 'green'
			});
		}else{
			$('.tips').html('密码不一致').css({
				color: 'red'
			});
		}
	});
})