var btnAdd = document.getElementById('btnAdd')
var btnFinish = document.getElementById('btnFinish')
var num = document.getElementById('number')
var otherAnswer = document.getElementById('otherAnswer')
var numbers = []


btnAdd.addEventListener('click', numberAnalyzer)
btnFinish.addEventListener('click', finish)

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
    
    if(isNumber(num.value) && !isList(num.value, numbers) ){
        
        numbers.push(num.value)
        
        var opt = document.createElement('option')
        opt.text += `you add number ${num.value}`
        answer.appendChild(opt)
        
        
    }else{
        
        
        alert('Number invalid. please type a number')
       
    }
    
    num.value = '';
       
}

function finish(){
    
    if(numbers.length == 0){
        
        alert('add values before finish')
    }else{
        otherAnswer.style.fontSize = '12px'
        
        var tot = numbers.length
        
        otherAnswer.innerHTML = ''
        otherAnswer.innerHTML = `We have ${tot} numbers`
        
        
        
        
    }
}