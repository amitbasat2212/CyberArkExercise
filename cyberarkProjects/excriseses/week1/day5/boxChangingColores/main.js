const box = document.getElementById("box")
const list = document.getElementById("list")
const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

box.onclick = function () {
    box.innerHTML = "clicked"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const pushButton=function () {
    box.style.backgroundColor="#8e44ad"
}

const addanotheritems=function(){
    var li = document.createElement("li");
    li.innerHTML="a new item"
    list.appendChild(li)
}


const box1 = document.createElement("div") // dynamically creating an element

box1.setAttribute("class", "box1")
box1.onclick = function(){       // adding an event to the new element
    box1.innerHTML = "I'm alive!!11!"
}

document.getElementById("some-id").appendChild(box1) // now