
function load(){
    
    var days = new Date();
    var hour = days.getHours();
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var salute = document.getElementById('salute')
    
    /*   hour = 6  */
    
    msg.innerText = `Now it's ${hour} hours`
    
    
    
    if(hour >= 0 && hour < 12 ){
        
        salute.innerText = 'Good Morning'
        
        
            
       }else if(hour < 18){
           salute.innerText = 'Good Afternoon'
           
           document.body.style.backgroundImage = "linear-gradient(to right, rgba(225, 177, 44,1.0), rgba(194, 54, 22,1.0))"
           
           img.src = 'img/img2.png'
       }else{
           salute.innerText = 'Good Evening'
           
           document.body.style.backgroundImage = 'linear-gradient(to left, rgba(111, 30, 81,1.0), rgba(27, 20, 100,1.0))'
           
           img.src ='img/img3.png';
       }
    
}