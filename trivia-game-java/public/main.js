$( document ).ready(function() {
	function check(){

		var question1 = document.quiz.question1.value;
		var question2 = document.quiz.question2.value;
		var question3 = document.quiz.question3.value;
		var correct = 0;


		if (question1 == "Tomorrow") {
			correct++;
	}
		if (question2 == "water") {
			correct++;
	}	
		if (question3 == "cold") {
			correct++;
		}
		
		var pictures = ["public/win.gif", "public/meh.gif", "public/lose.gif"];
		var messages = ["Great job!", "That's just okay", "You really need to do better"];
		var score;

		if (correct == 3) {
			score = 3;
		} 

		if (correct > 0 && correct < 3) {
			score = 2;
		}

		if (correct == 1) {
			score = 1;
		}
		if (correct == 0 ) {
			score =0;
		}
	}

		
		

	$('#button').click(() => {
		//console.log('yay!');
		document.getElementById("after_submit").style.visibility = "visible";

		document.getElementById("message").innerHTML = messages[score];
		document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
		document.getElementById("picture").src = pictures[score];
	});
});
