$( document ).ready(function() {
	var correct = 0;

	var pictures = ["/fail.gif", "/meh.gif", "/success.gif"];
	var messages = ["You really need to do better", "That's just okay", "Great Job!"];
	var score = 0;

	function check(){

		var question1 = document.quiz.question1.value;
		var question2 = document.quiz.question2.value;
		var question3 = document.quiz.question3.value;


		if (question1 == "Tomorrow") {
			correct++;
	}
		if (question2 == "water") {
			correct++;
	}	
		if (question3 == "cold") {
			correct++;
	}
		

		
	}

		
		

	$('#button').click(() => {
		//console.log('yay!');
		document.getElementById("after_submit").style.visibility = "visible";

		document.getElementById("message").innerHTML = messages[correct];
		document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
		document.getElementById("picture").src = pictures[correct];
		console.log(score);

	});
});
