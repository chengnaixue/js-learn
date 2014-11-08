document.onselectstart = new Function('event.returnValue=false;');
var minDiv = document.getElementById('minDiv');
var lineDiv = document.getElementById('lineDiv');
var keyDown = false;
var xTemp = 0; //鼠标点击时相对于minDiv的左边距
window.onmousemove = function(e){
	e.stopPropagation();
	if(keyDown){
		var x = e.clientX;//鼠标横坐标var x
		var lineDiv_left = getPosition(lineDiv).left;//长线条的横坐标
		var minDiv_left = (x - lineDiv_left) - xTemp;//小方块相对于父元素（长线条）的left值vaminDiv_left
		if(minDiv_left > (lineDiv.offsetWidth - minDiv.offsetWidth)){
			minDiv_left = lineDiv.offsetWidth - minDiv.offsetWidth;
		}
		if(minDiv_left < 0){
			minDiv_left = 0;
		}
		//设置拖动后小方块的left值
		minDiv.style.left = minDiv_left + "px";
	}
};
minDiv.onmousedown = function(e){
	e.stopPropagation();
	keyDown = true;
	xTemp = e.clientX - getPosition(minDiv).left;
};
//minDiv.onmouseleave = function(){
//	keyDown = false;
//};
window.onmouseup = function(){
	keyDown = false;
};
//获取元素的绝对位置
function getPosition(node){
	var left = node.offsetLeft;//获取元素相对于其父元素的left值var left
	var top = node.offsetTop;
	current = node.offsetParent; // 取得元素的offsetParent
	　// 一直循环直到根元素
　　while (current != null) {
	　　left += current.offsetLeft;
	　　top += current.offsetTop;
	　　current = current.offsetParent;
　　}
	return {"left":left,"top":top};
}

