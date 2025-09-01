
new Promise((resolve, reject) => {
	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
	
	delay(3000) // Delay for 3000 milliseconds (3 seconds) before resolving
		.then(() => {
			resolve();
			
		});
}).then(() => {
	ChangePage();

});

function ChangePage() {


	var e = document.getElementById("page-select");
	e.value = e.value
	var selectedOption = e.value;
	var text = e.options[e.selectedIndex].text;


	if (selectedOption === "page-paymentTypes") {
		
		//$("#courseNames-all").show();
		$("#lessonTypes-all").load("/PaymentCategory/Index");
		return;
	}
	else if (selectedOption === "page-courseNames") {
		
		//$("#courseNames-all").show();
		$("#lessonTypes-all").load("/Course/Index");
		return;
	}
	else if (selectedOption === "page-lessonTypes") {
		
		//$("#courseNames-all").show();
		$("#lessonTypes-all").load("/LessonType/Index");
		return;
	}

	else if (selectedOption === "page-locations") {
		$("#lessonTypes-all").load("/Location/Index");
		return;
	}
	else if (selectedOption === "page-groupTypes") {
		
		//$("#courseNames-all").show();
		$("#lessonTypes-all").load("/GroupType/Index");
		return;
	}
	else if (selectedOption === "page-ageTypes") {
		
		//$("#courseNames-all").show();
		$("#lessonTypes-all").load("/AgeType/Index");
		return;
	}
}