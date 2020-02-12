var btn = document.getElementById('btn')
btn.addEventListener('click', multiTable)

function multiTable(){
    
    var num = Number(document.getElementById('number').value)
    var answer = document.getElementById('answer')
    
    answer.innerHTML = num;
    
}