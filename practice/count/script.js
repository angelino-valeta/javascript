
var btn = document.querySelector('#btn')
btn.addEventListener('click', count)

function count(){
    
    var first = Number(document.getElementById('start').value)
    var finish = Number(document.getElementById('finish').value)
    var answer = document.getElementById('answer')
    
        
   if(first.empty()){
       
       alert('error')
       
       
      } 
    
    
}