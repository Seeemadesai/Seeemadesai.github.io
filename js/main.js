function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	if (firstName.toLowerCase() == "general" && lastName.toLowerCase !== "assembly") {
		console.log ('welcome!');
		
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == "red" ||
		faveColour == "blue" ||
		faveColour == "grey" ||
		faveColour == "yellow") {

		$('h1').css('color',faveColour);
	}	
		

	var age = prompt ('How old are you?');
	age = parseInt(age);

	if (age>=18) {
		console.log ('user is a grown-up adult.');
	} 	else if (age>= 13) {
		console.log ('user is a teenager.');
	}	else {
		console.log('user is a wee nipper!');
	}

}

/* when the page has loaded */
$(function() {

	$('img').on('click',askQuestions);
	// hide all the sections


	$('h3').next().hide();

	// when human clicks an h3
	$('h3').on('click', function() {

		// toggle the next element
		$(this).next().slideToggle(1500, 'swing');


	});
	});
