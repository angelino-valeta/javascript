var btn = window.document.getElementById('check')
btn.addEventListener('click' , verific)

function verific(){
    
    var gender = document.getElementsByName('gender')
    
    var yb = document.getElementById('yearbirth')
    var yearbirth = Number(yb.value);
    var answer = document.getElementById('answer')
    var yearC = new Date().getFullYear()
    
    var age = yearC - yearbirth 
    
    
    
    if(yearbirth == 0 || yearbirth > yearC) {
      
        alert('error: check the datas')
    }else{
        
        var gen = '';
        
        if(gender[0].checked){
            gen = "man"
                        
                    
        } else if(gender[1].checked){
            
            gen = "woman"
            
        }
        
        answer.innerText = `checked ${gen} with ${age} year old.`
    }
    
    
}