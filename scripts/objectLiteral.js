window.onload = function (){
	
	
	var name = "Ashutosh";
	var age = "29";
	var place = "Allahabad";
	
	//new feature in es5 with which it will automatically get the value from name, age, and place
	//also myCall now we can define function in this way
	
	var person = {
		name,
		age,
		place,
		myCall(x){
			console.log(`the value from myCall  is ${x}`);
		}
		
	}
	console.log("the person is ",person,person.myCall(5));
	
}