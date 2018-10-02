window.onload = function(){
	
	//doest allow duplicates
	var names = new Set();
	
	names.add("Amit").add("Ashutosh").add("Alok").add("Ashutosh").add("Prajakta").add("Dipender").add("Sunish").add("Manish");

	
	console.log(`the names in the sets are ${names}`); // doesnt shows the value of objects or set
	console.log("the names in the sets are ",names);	
}
