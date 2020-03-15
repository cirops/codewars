//https://www.codewars.com/kata/577ff15ad648a14b780000e7

function greet(language) {
	greetings = {
	  'english': 'Welcome',
	  'czech': 'Vitejte',
	  'danish': 'Velkomst',
	  'dutch': 'Welkom',
	  'estonian': 'Tere tulemast',
	  'finnish': 'Tervetuloa',
	  'flemish': 'Welgekomen',
	  'french': 'Bienvenue',
	  'german': 'Willkommen',
	  'irish': 'Failte',
	  'italian': 'Benvenuto',
	  'latvian': 'Gaidits',
	  'lithuanian': 'Laukiamas',
	  'polish': 'Witamy',
	  'spanish': 'Bienvenido',
	  'swedish': 'Valkommen',
	  'welsh': 'Croeso'
	};
	return (greetings.hasOwnProperty(language) ? greetings[language] : "Welcome");
 }