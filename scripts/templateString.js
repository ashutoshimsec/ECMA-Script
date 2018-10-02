window.onload = function(){

	
	var templateString = `hello 
	and see
	the NEW 
	     formatted string `;

	
	console.log("the template String is ",templateString);
	
	welcome("Ashutosh","29","Allahabad");
	
	
	function welcome(name , age , place){
		console.log(`the name is ${name} and age is ${age} and place is ${place} `);
	}
	
}