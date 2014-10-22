/* alert("Til hammó með ammó!"); */

function printMenuItem()
{
	var menu = 
	{
		1: {
			name: "Massaman curry",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			chili: 1,
		},

		2: {
			name: "Red curry",
			description: "Red curry with coconut milk and bamboo shoots.",
			chili: 3,
		},
		3: {
			name: "Pineapple curry",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			chili: 2,
		},

		4: {
			name: "Green curry",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			chili: 3,
		},
		5: {
			name: "Pad Thai",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			chili: 0,
		},

		6: {
			name: "Oyster Sauce",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			chili: 0,
		},
		7: {
			name: "Chicken with cashew nuts",
			description: "Stir-fried chicken with cashew nuts, onion and mushroom.",
			chili: 0,
		},

		:8 {
			name: "Ginger Sauce",
			description: "Stir-fried. Fish, Pork, Chicken or Squid with ginger and onions.",
			chili: 0,
		},		
		9: {
			name: "Pad krapow",
			description: "Stir-fried. Lamb, Beef, Pork, Chicken or Squid with fresh chili, holy basil and onions.",
			chili: 3,
		},

		10: {
			name: "Deep fried",
			description: "Deep-fried vegetables, prawns or squid seved with honey sauce.",
			chili: 0,
		},
		11: {
			name: "Stir-fried mixed vegetables",
			description: "Stir-fried mixed vegetables. Probably really good.",
			chili: 0,
		},

		12: {
			name: "Sweet and sour",
			description: "Stir-fried meat with onions and pineapple.",
			chili: 0,
		},					
	};

	// CREATE A VARIABLE WITH A FOR LOOP THAT GIVES ME THE LENGTH OF THE OBJECT !!!!!!!!!!!!!! THEN REPLACE * 2 WITH THAT VARIABLE

	var randomNumber = Math.floor(Math.random() * 12) + 1;

	console.log(menu.length)
	console.log(randomNumber)

	document.getElementById("action").innerHTML = ("<div id='firstMsg'>HAVE SOME FUCKING");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourse'>Course </div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourseNumber'> # "+  (randomNumber + 44) + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemName'>" + menu[randomNumber].name + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemDescription'>" + menu[randomNumber].description + "</div>");
	document.getElementById("action").innerHTML += ("</br>");
	document.getElementById("action").innerHTML += ("<a href='#' id='anotherCourse' onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a>");
	document.getElementById("action").innerHTML += ("<img id='chili' src='images/" + menu[randomNumber].chili + "chili.png'>");
};

