/* alert("Til hammó með ammó!"); */

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

	document.getElementById("action").innerHTML = ("<div class='actionH3'>HAVE SOME FUCKING");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourse'>Course #" + randomNumber + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemName" + menu[randomNumber].name + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemDescription'>" + menu[randomNumber].description + "</div>");
	document.getElementById("action").innerHTML += ("</br>");
	document.getElementById("action").innerHTML += ("<a href='#' class='actionH3' onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a>");
};

