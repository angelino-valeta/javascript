var btnAdd = document.getElementById('btnAdd')
var btnFinish = document.getElementById('btnFinish')
var num = document.getElementById('number')
var otherAnswer = document.getElementById('otherAnswer')



btnAdd.addEventListener('click', numberAnalyzer)
btnFinish.addEventListener('click', finish)

var numbers = []

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
        
        numbers.push(Number(num.value))
        
        var opt = document.createElement('option')
        opt.text += `you add number ${num.value}`
        answer.appendChild(opt)
        
        
    }else{
        
        alert('Number invalid. please type a number')
       
    }
    
    num.value = '';
    num.focus();
       
}


function finish(){
    
    if(numbers.length == 0){
        
        alert('add values before finish')
    }else{
        otherAnswer.style.fontSize = '12px'
        otherAnswer.style.textAlign = 'left'
        
        var tot = numbers.length
        var bigger = numbers[0]
        var less = numbers[0]
        var sum = 0
        var average = 0
        for(var i in numbers){
            sum = sum + numbers[i]
            if(numbers[i] > bigger){
                bigger = numbers[i]
            }
            
            if(numbers[i] < less){
                less = numbers[i]
            }
            
        }
        
        average = sum / tot

        otherAnswer.innerHTML += `We have ${tot} numbers ${'<br>'}`
        otherAnswer.innerHTML += `The less number is ${less} ${'<br>'}`
        otherAnswer.innerHTML += `The bigger number is ${bigger} ${'<br>'}`
        otherAnswer.innerHTML += `The sum of numbers is ${sum} ${'<br>'}`
        otherAnswer.innerHTML += `The avarage of numbers is ${average.toFixed(2)} ${'<br>'}`
        
        
    }
}