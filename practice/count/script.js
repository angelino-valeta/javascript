
var btn = document.querySelector('#btn')
btn.addEventListener('click', count)

function count(){
    
    var first = Number(document.getElementById('start').value)
    var finish = Number(document.getElementById('finish').value)
    var step = Number(document.getElementById('step').value)
    var answer = document.getElementById('answer')
    
    var counting = document.createElement('p')
    
    if(first == 0){
        answer.innerText = 'do not count'
    }else{
        
        for(first = 0; first <= finish; first = first + step){
        
        counting.innerText = first
        answer.appendChild(counting)
    }
        
    }
    
       
   
}
    