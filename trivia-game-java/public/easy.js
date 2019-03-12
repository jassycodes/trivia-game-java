$( document ).ready(function() {
	var correct = 0;
	var pictures = ["/mad.gif", "/fail.gif", "/meh.gif", "/success.gif"];
	var messages = ["I thought you were better than that", "You really need do better", "That's just okay", "Great Job!", ""];
	var score = 0 ;


	function check(){
		var q1 = document.getElementById("question1").value;
		var q2 = document.getElementById("question2").value;
		var q3 = document.getElementById("question3").value;
		var q4 = document.getElementById("question4").value;
		var q5 = document.getElementById("question5").value;
		var q6 = document.getElementById("question6").value;
		var q7 = document.getElementById("question7").value;
		var q8 = document.getElementById("question8").value;
		var q9 = document.getElementById("question9").value;
		var q10 = document.getElementById("question10").value;




		

		//console.log("question1 value is ",question1);
		if (q1 === "post office") {
			correct++; 
	}
		if (q2 === "fire") {
			correct++; 
	}
		if (q3 === "cold") {
			correct++; 
	}
		if (q4 === "two") {
			correct++; 
	}
		if (q5 === "none") {
			correct++; 
	}
		if (q6 === "day breaks and night falls") {
			correct++; 
	}
		if (q7 === "four") {
			correct++; 
	}
		if (q8 === "the match") {
			correct++; 
	}
		if (q9 === "stairs") {
			correct++; 
	}
		if (q10 === "noise") {
			correct++; 
	}
	
	if (correct == 0 || correct ==1) {
		score = 0;
	}

	else if (correct == 2 || correct == 3) {
		score = 1;
	}

	else if (correct > 3 && correct < 7) {
		score = 2;
	}

	else if (correct > 7) {
		score = 3;
	}

	if (correct == 10) {
		score = 4;
	}
}
		

	$('#button').click(() => {
		//console.log('yay!');
		check();
		document.getElementById("after_submit").style.visibility = "visible";
		console.log("question1 value is "+question1+" haha ");

		console.log("score is "+ score)
		document.getElementById("message").innerHTML = messages[score];
		document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
		document.getElementById("picture").src = pictures[score];
		console.log(score);

	});
});
