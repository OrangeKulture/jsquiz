function submitAnswers (){
	var totalQs = 5;
	var score = 0;
	var correctAs = ["b","a","d","b","d"];

	//get user input
	var q1 = document.forms['quiz']['q1'].value
	var q2 = document.forms['quiz']['q2'].value
	var q3 = document.forms['quiz']['q3'].value
	var q4 = document.forms['quiz']['q4'].value
	var q5 = document.forms['quiz']['q5'].value

	
	//validation
	for(i=1;i<=totalQs;i++){
		if(eval('q'+i)==null||eval('q'+i)==""){
			alert('You missed question '+i);
			return false;
		}
	}
	
	
	//compare and give results
	for(i=1;i<=totalQs;i++){
		if(eval('q'+i)==correctAs[i-1]){
		score++;
		}

	}	

	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+totalQs+'</span></h3>';



return false;
}