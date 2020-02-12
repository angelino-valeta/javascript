var btn = document.getElementById('btn')
btn.addEventListener('click', multiTable)

function multiTable(){
    
    var num = Number(document.getElementById('number').value)
    var answer = document.getElementById('answer')
    
    if(num == 0){
        alert('field number is empty')
    }else{
        
        for(var i = 1 ; i <= 10; i++){
            
            var table = document.createElement('option')
            
            table.text = `${num} x ${i} = ${num * i}`;
            answer.appendChild(table)
            
        }
    }
    
    
}