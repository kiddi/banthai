/* alert("I am an alert box!"); */


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




function printMenuItem()
{
	var menu = 
	{
		1: {
			name: "Curry",
			description: "MMMM curry",
		},

		2: {
			name: "Pasta",
			description: "mmm pasta",
		},
	};

	// CREATE A VARIABLE WITH A FOR LOOP THAT GIVES ME THE LENGTH OF THE OBJECT !!!!!!!!!!!!!! THEN REPLACE * 2 WITH THAT VARIABLE

	var randomNumber = Math.floor(Math.random() * 2) + 1;

	console.log(menu.length)
	console.log(randomNumber)

	document.getElementById("action").innerHTML = ("<br/>");
	document.getElementById("action").innerHTML += ("<br/>");	
	//document.getElementById("action").innerHTML += (randomNumber);
	document.getElementById("action").innerHTML += ("Course #" + randomNumber);
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += (menu[randomNumber].name);
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += (menu[randomNumber].description);
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += ("<br/>");
	document.getElementById("action").innerHTML += ("<a onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a>");
};

