
function load(){
    
    var days = new Date();
    var day = days.getHours();
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('photo')
    
    msg.innerText = `Now it's ${day} hours`
    
}