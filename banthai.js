/* alert("Til hammó með ammó!"); */

function printMenuItem()
{
	var menu = 
	{
		1: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		2: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 4,
		},

		3: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		4: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		5: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 3,
		},

		6: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 1,
		},

		7: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		8: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		9: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		10: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 4,
		},

		11: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		12: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		13: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		14: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		15: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		16: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		17: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 1,
		},

		18: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		19: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 3,
		},

		20: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		21: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 1,
		},

		22: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		23: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		24: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		25: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 4,
		},

		26: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 1,
		},

		27: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 5,
		},
		
		28: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 1,
		},
		
		29: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 2,
		},
		
		30: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		31: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		32: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 2,
		},
		
		33: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		34: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		35: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},

		36: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		37: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		38: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		39: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		40: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		41: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		42: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 5,
		},
		
		43: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		44: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		45: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		46: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		47: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		48: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		49: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		50: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		51: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 5,
		},
		
		52: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		53: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		54: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		55: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		56: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		57: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		58: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		59: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		60: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		61: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		62: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		63: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 3,
		},
		
		64: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		65: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		66: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		67: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		68: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},
		
		69: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		70: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		71: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 2,
		},
		
		72: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 1,
		},
		
		73: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood",
			chili: 0,
		},

		74: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 5,
		},

		75: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 0,
		},
		
		76: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 3,
		},
		
		77: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 0,
		},
		
		78: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 0,
		},
		
		79: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 1,
		},
		
		80: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 5,
		},
		
		81: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 0,
		},
		
		82: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 3,
		},
		
		83: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 1,
		},
		
		84: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 3,
		},
		
		85: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 2,
		},
		
		86: {
			name: "Some vegetables",
			description: "Tredition thai green curry with coconut milk, basil and bamboo shoots.",
			category: "Vegetable dish",
			chili: 1,
		},

		87: {
			name: "Some rice",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			category: "Rice",
			chili: 0,
		},

		88: {
			name: "Some rice",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			category: "Rice",
			chili: 0,
		},
		
		89: {
			name: "Some rice",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			category: "Rice",
			chili: 3,
		},
		
		90: {
			name: "Some rice",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			category: "Rice",
			chili: 1,
		},
		
		91: {
			name: "Some rice",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			category: "Rice",
			chili: 0,
		},
		
		92: {
			name: "Some rice",
			description: "Fried rice noodles with Chicken or Pork egg and peanuts.",
			category: "Rice",
			chili: 2,
		},

		93: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 0,
		},

		94: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 1,
		},
		
		95: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 1,
		},
		
		96: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 2,
		},
		
		97: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 3,
		},
		
		98: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 0,
		},
		
		99: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 2,
		},
		
		100: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 2,
		},
		
		101: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 1,
		},
		
		102: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 0,
		},
		
		103: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 2,
		},
		
		104: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 1,
		},
		
		105: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 3,
		},
		
		106: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 0,
		},
		
		107: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 0,
		},
		
		108: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 3,
		},
		
		109: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 3,
		},
		
		110: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 3,
		},
		
		111: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 2,
		},
		
		112: {
			name: "Many noodles",
			description: "Stir-fried  meat with oyster sauce and vegetables.",
			category: "Noodles",
			chili: 0,
		},				
	};

	// CREATE A VARIABLE WITH A FOR LOOP THAT GIVES ME THE LENGTH OF THE OBJECT !!!!!!!!!!!!!! THEN REPLACE * 2 WITH THAT VARIABLE

	var randomNumber = Math.floor(Math.random() * 112) + 1;

	console.log(menu.length)
	console.log(randomNumber)

	document.getElementById("action").innerHTML = ("<div id='firstMsg'>HAVE SOME FUCKING");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourse'>Course </div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourseNumber'> # "+  (randomNumber + 44) + "</div>");
	// document.getElementById("action").innerHTML += ("<div id='menuItemName'>" + menu[randomNumber].name + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCategory'>" + menu[randomNumber].category + "</div>");
	document.getElementById("action").innerHTML += ("</br>");
	document.getElementById("action").innerHTML += ("<a href='#' id='anotherCourse' onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a>");
	document.getElementById("action").innerHTML += ("<img id='chili' src='images/" + menu[randomNumber].chili + "chili.png'>");
};

