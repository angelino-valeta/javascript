var result = document.getElementById('result');
var count =  document.getElementById('count');

//check browser support
if(typeof(Storage) !== "undefined"){
	// Storage
	localStorage.setItem("lastname", "Valeta");
	//localStorage.removeItem("lastname");
	result.innerHTML = localStorage.getItem("lastname");
}else{
	result.innerHTML = "Sorry, your browser does not support web storage";
}

function clickCounter(){
	if(typeof(Storage) !== "undefined"){
		if(localStorage.clickcount){
			localStorage.clickcount = Number(localStorage.clickcount)+1;
		}else{
			localStorage.clickcount = 1;
		}
		count.innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
	}else{
		count.innerHTML = "Sorry yout browser does not support web storage...";
	}
}


