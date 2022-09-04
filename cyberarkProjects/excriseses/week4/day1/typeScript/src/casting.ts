// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);


// const someElement = document.querySelector(".foo");

// someElement.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value); // WORKS
// });


//excrice1

function doX1():void{
    const input = document.querySelector('.foo') as HTMLInputElement;
    console.log(input.value);
}


//excrice2
const button=document.getElementById("button1") as HTMLInputElement;
button.remove();

const input=document.querySelector('.foo') as HTMLInputElement;
input.addEventListener('input',(event)=>{
    const target = event.target as HTMLInputElement;
    console.log(target.value)
})