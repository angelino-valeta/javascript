var btnAdd = document.getElementById('btnAdd')
var btnFinish = document.getElementById('btnFinish')
 var num = Number(document.getElementById('number').value)
btnAdd.addEventListener('click', numberAnalyzer)


function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function isList(n, l){
    
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
    
}


function numberAnalyzer(){
   
    var answer = document.getElementById('answer')
    
    if(num == 0 ){
        
        alert('Number invalid. please type a number')
        
    }else{
        
        var opt = document.createElement('option')
        opt.text += `you add number ${num}`
        answer.appendChild(opt)
       
    }
       
}
