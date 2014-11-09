window.onload = function () {
	var objDemo = document.getElementById('demo');
	var objSmallBox = document.getElementById('small-box');
	var objFloatBox = document.getElementById('float-box');
	var objBigBox = document.getElementById('big-box');
	var objBigBoxImg = objBigBox.getElementsByTagName('img')[0]
	objSmallBox.onmouseover = function () {
		objFloatBox.style.display = 'block';
		objBigBox.style.display = 'block';
	}
	objSmallBox.onmouseout = function () {
		objFloatBox.style.display = 'none';
		objBigBox.style.display = 'none';
	}
	objSmallBox.onmousemove = function (event) {
		event = event || window.event;
		var left = event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth/2;
		var top = event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight/2;
		if (left < 0) {
			left = 0;
		} else if (left > (objSmallBox.offsetWidth - objFloatBox.offsetWidth)) {
			left = objSmallBox.offsetWidth - objFloatBox.offsetWidth;
		}
		
		if (top < 0) {
			top = 0;
		} else if (top > (objSmallBox.offsetHeight - objFloatBox.offsetHeight)) {
			top = objSmallBox.offsetHeight - objFloatBox.offsetHeight;
		}
		
		objFloatBox.style.left = left + 'px';
		objFloatBox.style.top = top + 'px'
		var percentX = left / (objSmallBox.offsetWidth - objFloatBox.offsetWidth);
		var percentY = top / (objSmallBox.offsetHeight - objFloatBox.offsetHeight)
		objBigBoxImg.style.left = -percentX * (objBigBoxImg.offsetWidth - objBigBox.offsetWidth) + 'px';
		objBigBoxImg.style.top = -percentY * (objBigBoxImg.offsetHeight - objBigBox.offsetHeight) + 'px'
	}
}