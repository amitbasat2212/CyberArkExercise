




class HttpClientFacade {
    xmlhttp:XMLHttpRequest= new XMLHttpRequest(); 
    loadToScreenDog(){
        this.xmlhttp.onload = function() {
            const image = document.getElementById("demo") as HTMLImageElement;
           if(image!=null){  
                const response = JSON.parse(this.response)               
                image.src = response.message
           }          
        }
    }

    loadOnScreenUser(){
        this.xmlhttp.onload = function() {
            const response = JSON.parse(this.response)  
            const text = document.getElementById("text") as HTMLDivElement;       
            text.innerHTML=response.name
        }
    }

    
    getRequest(){       
        this.loadToScreenDog();
        this.xmlhttp.open("GET", 'https://dog.ceo/api/breeds/image/random', true);
        this.xmlhttp.send();
    }

    postRequest(){
         // new HttpRequest instance       
        this.loadOnScreenUser()
        this.xmlhttp.open("POST", 'https://reqres.in/api/users');
        this.xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        this.xmlhttp.send(JSON.stringify({
            "name": "morpheus",
            "job": "leader"
        }));
    }



}

const http=new HttpClientFacade()
http.postRequest()
http.getRequest()