var demo =  document.getElementById('demo')

function getLocation(){
	if(navigator.geolocation){
		 navigator.geolocation.getCurrentPosition(showPosition, showError);
     		// navigator.geolocation.watchPosition(showPosition);   
	}else{
		demo.innerHTML = 'Geolocation is not supported by your browser.'
	}
}

function showPosition(position){
    	demo.innerHTML = "Latitude: " + position.coords.latitude + "<b>Longitude:" + position.coords.longitude;
    }

function showError(error){
	switch(error){
		case error.PERMISSION_DENIED:
			demo.innerHTML = "User denied the request for Geolocation."
			break;
		case error.POSITION_UNAVALIABLE:
			demo.innerHTML = "Location information is unavaliable."
			break;
		case error.TIMEOUT:
			demo.innerHTML = "The request to get user location time out."
			break;
		case error.UNKNOWN_ERROR:
			demo.innerHTML = "An unknown error occurred."
			break;
	
	}
}
