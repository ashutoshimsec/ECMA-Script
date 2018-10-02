window.onload = function(){
	
	var a = ["a","b","c","d","e"];
	
	console.log(a,"with spread operator ",...a);
	
	var b = [9,10];
	
	var c = [...a,...b];
	console.log("c will contains all the elements of a and b ", c);

	//using spread operator to add the elements of array
	add(...b);
	
	
	function add(i,j){
		console.log("the sum is ",i+j);
	}
	
}