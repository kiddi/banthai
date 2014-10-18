/* alert("Til hammó með ammó!"); */

function printMenuItem()
{
	var menu = 
	{
		1: {
			name: "Massaman curry",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
		},

		2: {
			name: "Red curry",
			description: "Red curry with coconut milk and bamboo shoots.",
		},
		3: {
			name: "Pineapple curry",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
		},

		4: {
			name: "Green curry",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
		},
		5: {
			name: "Pad Thai",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
		},

		6: {
			name: "Oyster Sauce",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
		},
		7: {
			name: "Chicken with cashew nuts",
			description: "Stir-fried chicken with cashew nuts, onion and mushroom.",
		},

		8: {
			name: "Ginger Sauce",
			description: "Stir-fried. Fish, Pork, Chicken or Squid with ginger and onions.",
		},		
		9: {
			name: "Pad krapow",
			description: "Stir-fried. Lamb, Beef, Pork, Chicken or Squid with fresh chili, holy basil and onions.",
		},

		10: {
			name: "Deep fried",
			description: "Deep-fried vegetables, prawns or squid seved with honey sauce.",
		},
		11: {
			name: "Stir-fried mixed vegetables",
			description: "Stir-fried mixed vegetables. Probably really good.",
		},

		12: {
			name: "Sweet and sour",
			description: "Stir-fried meat with onions and pineapple.",
		},					
	};

	// CREATE A VARIABLE WITH A FOR LOOP THAT GIVES ME THE LENGTH OF THE OBJECT !!!!!!!!!!!!!! THEN REPLACE * 2 WITH THAT VARIABLE

	var randomNumber = Math.floor(Math.random() * 12) + 1;

	console.log(menu.length)
	console.log(randomNumber)

	document.getElementById("action").innerHTML = ("<div id='firstMsg'>HAVE SOME FUCKING");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourse'>Course #" + randomNumber + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemName'>" + menu[randomNumber].name + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemDescription'>" + menu[randomNumber].description + "</div>");
	document.getElementById("action").innerHTML += ("</br>");
	document.getElementById("action").innerHTML += ("<a href='#' id='anotherCourse' onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a>");
};

