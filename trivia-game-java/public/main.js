$( document ).ready(function() {
	var correct = 0;
	var pictures = ["/fail.gif", "/meh.gif", "/success.gif"];
	var messages = ["You really need do better", "That's just okay", "Great Job!"];
	var score;


	function check(){
		var q1 = document.getElementById("question1").value;
		var q2 = document.getElementById("question2").value;
		var q3 = document.getElementById("question3").value;
		// var q4 = document.getElementById("question1").value;
		// var q5 = document.getElementById("question1").value;
		// var q6 = document.getElementById("question1").value;
		// var q7 = document.getElementById("question1").value;
		// var q8 = document.getElementById("question1").value;
		// var q9 = document.getElementById("question1").value;
		// var q10 = document.getElementById("question1").value;




		

		//console.log("question1 value is ",question1);
		if (q1 === "tomorrow") {
			correct++; 
	}
		if (q2 === "fire") {
			correct++; 
	}
		if (q3 === "cold") {
			correct++; 
	}
	


	if (correct == 0) {
		score = 0;
	}

	if (correct == 1 || correct == 2) {
		score = 1;
	}

	if (correct == 3) {
		score = 2;
	}
}
		

	$('#button').click(() => {
		//console.log('yay!');
		check();
		document.getElementById("after_submit").style.visibility = "visible";
		console.log("question1 value is "+question1+" haha ");
		document.getElementById("message").innerHTML = messages[score];
		document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
		document.getElementById("picture").src = pictures[score];
		console.log(score);

	});
});
