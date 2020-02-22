var demo =  document.getElementById('demo')

function getLocation(){
	if(navigator.geolocation){
		 navigator.geolocation.getCurrentPosition(showPosition);
        
	}else{
		demo.innerHTML = 'Geolocation is not supported by your browser.'
	}
}

function showPosition(position){
    	demo.innerHTML = "Latitude: " + position.coords.latitude + "<b>Longitude:" + position.coords.longitude;
    }