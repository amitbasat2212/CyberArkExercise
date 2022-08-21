
const form  = document.getElementById('submit');
const name  = document.getElementById('name');
const salary  = document.getElementById('Salary');
const birthday  = document.getElementById('birthday');
const date  = document.getElementById('date');
const phone  = document.getElementById('phone');

var errorElement = document.createElement("p");
// form.addEventListener('submit', (event) => {
   
// });

const button =  document.getElementById('submitButton');

button.onclick=function(){
    let nameValue= name.value;
    
    if(nameValue.length<2){        
        errorElement.innerHTML = "name need to be over two letters";
        document.getElementById("submit").appendChild(errorElement)       
        return false;
    }
    if(parseInt(salary.value)>10000 && parseInt(salary.value)<16000){
        console.log(parseInt(salary.value))
        errorElement.innerHTML = "no good salary";
        document.getElementById("submit").appendChild(errorElement)
        return false;
    }

    
    if(birthday.value==undefined){
        errorElement.innerHTML = "birthdaY IS NULL";
        document.getElementById("submit").appendChild(errorElement)
        return false;
    }
    if(parseInt(phone.value).length<10 && phone.value==undefined ){
        errorElement.innerHTML = "phone incorrect";
        document.getElementById("submit").appendChild(errorElement)
        return false;
    }   
    
        errorElement.innerHTML="welcome user " + name.value
        
}
