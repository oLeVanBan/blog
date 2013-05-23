$(document).ready(function(){
	
	/* ヘッダープロフをマウスオーバーで表示
	----------------------------------------------------------------------------- */
	$("#header-account").hover(
		function(){//console.log("over");
			$('#header-account-menu').fadeIn(200);
		},function(){//console.log("out");
			$('#header-account-menu').fadeOut(200);
		}
	);

	/* スムーススクロール
	----------------------------------------------------------------------------- */
	$("#scrollTopLink").click(function(){
		$("html,body").animate({ scrollTop: 0 },300,"swing" );
		return false;
	});

	/* ロールオーバーでボタン画像差し替え
	----------------------------------------------------------------------------- */
	/*
	$('img.btnHover').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_hover', '_off'));
	});
	*/
	
	/* IE6-9　プレースホルダ補完
	----------------------------------------------------------------------------- */
	$('input[type="text"], input[type="password"], textarea').placeholder();


});

