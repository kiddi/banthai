alert("I am an alert box!");

function printArray()
{
	var myObj = new Object();
	myObj.name = "Fred";
	myObj.age = 42;

	myObj.getAge = 
	    function () {
	        return this.age;
	    };

	console.log(myObj)
	
	document.getElementById("action").innerHTML = ("<br/>");
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += ("HAVE SOME FUCKING FUCKING");
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += (myObj.name);
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += (myObj.age);
};