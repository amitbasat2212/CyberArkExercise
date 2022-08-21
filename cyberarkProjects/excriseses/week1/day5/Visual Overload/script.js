const containerBoxes = document.getElementById("container")

 const AddBOxes = function () {
     for(let i=0;i<3;i++){
        const box =document.createElement("div")
        box.setAttribute("class","box")
        box.setAttribute("id","box"+i)
        console.log(box)
        box.onmouseenter = function () {
            box.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);        
            
        }
        document.body.appendChild(box)
     }

    

     
 }   


 AddBOxes();


 