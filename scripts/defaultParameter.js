window.onload = function (){


	console.log("first parameter 7 and second use default ", add(7));
}

//giving default value to arguments
function add(a=10 , b = 20 ){
	return a+b;
}