/**
	1.闭包与变量
*/
function createFunctions(){
	var result = new Array();

	for(var i=0; i<10; i++){
		result[i] = function(){
			return i;
		};
	}

	return result;
}

function createFunctions2(){
	var result = new Array();

	for(var i=0; i<10; i++){
		result[i] = function(num){
			return function(){
				return num;
			};
		}(i);
	}

	return result;
}

/**
	2.
*/
(function(){
	var j = 5;
	alert(j);

})();

