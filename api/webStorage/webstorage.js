var result = document.getElementById('result');

//check browser support
if(typeof(Storage) !== "undefined"){
	// Storage
	localStorage.setItem("lastname", "Valeta");
	result.innerHTML = localStorage.getItem("lastname");
}else{
	result.innerHTML = "Sorry, your browser does not support web storage";
}
