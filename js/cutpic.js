document.onselectstart = new Function('event.returnValue=false;');
var rightDiv = document.getElementById('right');
var downDiv = document.getElementById('down');
var upDiv = document.getElementById('up');
var mainDiv = document.getElementById('main');
var leftDiv = document.getElementById('left');
var leftUpDiv = document.getElementById('left-up');
var rightUpDiv = document.getElementById('right-up');
var leftDownDiv = document.getElementById('left-down');
var rightDownDiv = document.getElementById('right-down');
var ifKeyDown = false;
var contact = "";
window.onmousemove = function(e){
	e = e || window.event;
	if(ifKeyDown){
		switch(contact){
			case 'right':
				rightMove(e);
				break;
			case 'down':
				downMove(e);
				break;
			case 'up':
				upMove(e);
				break;
			case 'left':
				leftMove(e);
				break;
			case 'left-up':
				leftMove(e);
				upMove(e);
				break;
			case 'right-up':
				rightMove(e);
				upMove(e);
				break;
			case 'left-down':
				leftMove(e);
				downMove(e);
			break;
			case 'right-down':
				rightMove(e);
				downMove(e);
				break;
		}				
	}
	setChoice('img2');
	setChoice('img3');
};
rightDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "right";
};
downDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "down";
};
upDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "up";
};
leftDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "left";
};
leftUpDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "left-up";
};
rightDownDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "right-down";
};
rightUpDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "right-up";
};
leftDownDiv.onmousedown = function(e){
	ifKeyDown = true;
	contact = "left-down";
};
window.onmouseup = function(e){
	ifKeyDown = false;
};
//offsetLeft:Html元素相对于自己的offsetParent元素的位置
function getPosition(node){
	var left = node.offsetLeft;
	var top = node.offsetTop;
	var parent = node.offsetParent;
	while(parent != null){
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	return {"left":left,"top":top};
}
function rightMove(e){
	var x = e.clientX;
	var widthBefore = mainDiv.offsetWidth - 2;
	var addWith = x - getPosition(mainDiv).left - widthBefore;				
	mainDiv.style.width = addWith + widthBefore + "px";	
}
function downMove(e){
	var y = e.clientY;
	var heightBefore = mainDiv.offsetHeight -2;
	var addHeight = y - getPosition(mainDiv).top - heightBefore;
	mainDiv.style.height = addHeight + heightBefore + "px";
}
function upMove(e) {
	var y = e.clientY;
	var mainY = getPosition(mainDiv).top;
	var addHeight = mainY - y;				
	var heightBefore = mainDiv.offsetHeight - 2;
	mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
	mainDiv.style.height = heightBefore + addHeight + "px";
}
function leftMove(e){
	var x = e.clientX;
	var mainX = getPosition(mainDiv).left;				
	var widthBefore = mainDiv.offsetWidth - 2;
	var addWith = mainX -x;
	mainDiv.style.width = widthBefore + addWith + "px";
	mainDiv.style.left = mainDiv.offsetLeft - addWith + "px";
}
function setChoice(img){
	//alert(1);
	var top = mainDiv.offsetTop;
	var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
	var left = mainDiv.offsetLeft;
	var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
	var imgT = document.getElementById(img);
	//alert({top,right,left,bottom});
	//alert("rect("+top+" px,"+right+" px,"+bottom+" px,"+left+" px"+")");
	imgT.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px"+")";
	//img2.style.clip = "rect(10px,200px,200px,0px)";
	if(img=='img3'){
		imgT.style.top = -top + "px";
		imgT.style.left = -left + "px";
	}
}