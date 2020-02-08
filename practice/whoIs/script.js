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
                img.setAttribute('src', 'img/1.jpg')
                
            }else if(age >= 11 && age <= 30){
                
                gen = "young"
                //young
                img.setAttribute('src', 'img/22.jpg')
                
                
            } else if(age >= 31  && age <= 49){
                gen = "lord"
                //lord
                img.setAttribute('src', 'img/30.jpg')
                      
            }else if (age >= 50){
                
                gen = "adult"
                //adult
                img.setAttribute('src', 'img/64.jpg')
            }
                
                        
                    
        } else if(gender[1].checked){
            
            gen = "woman"
            
            if(age >= 0 && age <= 10){
                
                gen = "child"
                //child
                img.setAttribute('src', 'img/2.jpg')
                
            }else if(age >= 11 && age <= 30){
                
                gen = "young"
                //young
                img.setAttribute('src', 'img/94.jpg')
                
            } else if(age >= 31 && age <= 49){
                gen = "lady"
                //lord
                img.setAttribute('src', 'img/18.jpg')
                      
            }else if (age >= 50){
                
                gen = "adult"
                //adult
                img.setAttribute('src', 'img/80.jpg')
            }
            
        }
        
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '10px'
        img.style.boxShadow = '0 4px 8px 0 rgba(235, 47, 6, 0.2), 0 6px 20px 0 rgba(235, 47, 6, 0.19)'
        
        answer.innerText = `checked ${gen} with ${age} year old.`
        answer.appendChild(img)
    }
    
    
}