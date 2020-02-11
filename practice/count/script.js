
var btn = document.querySelector('#btn')
btn.addEventListener('click', count)

function count(){
    
    var first = Number(document.getElementById('start').value)
    var finish = Number(document.getElementById('finish').value)
    var step = Number(document.getElementById('step').value)
    var answer = document.getElementById('answer')
    
    var counting = document.createElement('p')
    answer.appendChild(counting)
    
    answer.innerHTML = 'counting <br>'
    if(first == 0 || finish == 0 || step == 0){
        
        answer.innerText = 'cannot count, types data correctly'
    }else{
        
        if(first < finish){
            
            for(i = first; i <= finish; i++){
                
                answer.innerText += `${i}` 
                
               
            }
        }
        
    }
    
       
   
}
    