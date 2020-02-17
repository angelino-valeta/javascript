var btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', numberAnalyzer)

function numberAnalyzer(){
    var num = Number(document.getElementById('number').value)
    var btnFinish = document.getElementById('btnFinish')
    var answer = document.getElementById('answer')
    
    if(num == 0){
        
        alert('Number invalid. please type a number')
        
    }else{
        
        var opt = document.createElement('option')
        
        opt.text = num
        answer.appedChild(opt)
    }
       
}
