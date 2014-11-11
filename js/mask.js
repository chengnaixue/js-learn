window.onload = function () {
	var oMask = document.getElementById("mask");
	var oSearch = document.getElementById("searchTip");
	var aStep = oSearch.getElementsByTagName("div");
	var aA = oSearch.getElementsByTagName("a");
	var aClose = oSearch.getElementsByTagName("span");
	//读取Cookie
	var res = document.cookie.substring(5)
	//alert(document.cookie);
	if (res != "ttt") {
		oMask.style.display = "block";
		oSearch.style.display = "block";
		aStep[0].style.display = "block";
		//下一步按钮增加事件
		for (var i=0; i<aStep.length; i++) {
			aA[i].index = i;
			aA[i].onclick = function () {
				this.parentNode.style.display = "none";
				if (this.index < aStep.length -1) {
					aStep[this.index+1].style.display = "block";	
				} else {
					oMask.style.display = "none";
				}									
			};
		}
		//关闭按钮增加事件
		for (var i=0; i<aClose.length; i++) {
			aClose[i].onclick = function () {
				oMask.style.display = "none";
				oSearch.style.display = "none";
			};
		}
		//add Cookie
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+30);
		document.cookie = "name=ttt;expires=" + oDate;
	}

};

/* jQuery 方式实现
$(function(){
	var res = document.cookie.substring(5);
	if (res != "ttt"){

		$('#mask,#searchTip,#searchTip div:eq(0)').show();

		$('#searchTip div a').click(function(){
			var current = $(this).parent();
			current.hide();
			current.next().show();
		});

		$('#searchTip div span,#searchTip div a:last').click(){
			$('#mask,#searchTip').hide();
		};

		//add Cookie
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+30);
		document.cookie = "name=ttt;expires=" + oDate;

	}
});

*/

