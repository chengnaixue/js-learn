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
	2.模仿块级作用域
*/
function outputNumber(count){
	(function(){
		for(var i=0; i<count; i++){
			alert(i);
		}
	})();
	//alert(i);
}

/**
	3.私有变量
*/
function MyObject(){

	//私有变量和私有函数
	var privateVariable = 10;

	function privateFunction(){
		return false;
	}

	//特权函数：有权访问私有变量和私有函数的公有方法
	this.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	};

	this.publicMethod2 = function(){
		return privateVariable;
	};

}

(function(){
	//var j = 5;
	//alert(j);

})();

