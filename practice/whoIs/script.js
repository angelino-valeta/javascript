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
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        
        if(gender[0].checked){
            
            gen = "man"
            
            if(age >= 0 && age <= 10){
                
                gen = "child"
                //child
                
            }else if(age >= 11 && age < 35){
                
                gen = "young"
                //young
                
            } else if(age >= 35 && age <= 49){
                gen = "lord"
                //lord
                      
            }else if (age >= 50){
                
                gen = "adult"
                //adult
            }
                
                        
                    
        } else if(gender[1].checked){
            
            gen = "woman"
            
            if(age >= 0 && age <= 10){
                
                gen = "child"
                //child
                
            }else if(age >= 11 && age < 35){
                
                gen = "young"
                //young
                
            } else if(age >= 35 && age <= 49){
                gen = "lord"
                //lord
                      
            }else if (age >= 50){
                
                gen = "adult"
                //adult
            }
            
        }
        
        answer.innerText = `checked ${gen} with ${age} year old.`
    }
    
    
}