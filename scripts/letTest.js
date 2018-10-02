window.onload = function(){
	
	let i = 5;
	
	console.log("the value of i is ",i);
	
	
	var listArray = document.getElementsByTagName("li");
	
	console.log("the array is ",listArray);
	
	//using var which has global scope
	for(var a = 0;a<listArray.length; a++){
		listArray[a].onclick = function(){
			console.log("value from var ",a);
		}
	}
	
	console.log("var a with global access will value here also ",a);
	
	//using let which has block access only means it will be only available within the block
	for(let b = 0; b<listArray.length; b++){
		listArray[b].onclick = function(){
			console.log("value from let which has block access only ",b);
		}
	}
	
	console.log("let b try to access outside the block ",b)
}