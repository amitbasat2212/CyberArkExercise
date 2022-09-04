"use strict";
// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);
// const someElement = document.querySelector(".foo");
// someElement.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value); // WORKS
// });
//excrice1
function doX1() {
    const input = document.querySelector('.foo');
    console.log(input.value);
}
//excrice2
const button = document.getElementById("button1");
button.remove();
const input = document.querySelector('.foo');
input.addEventListener('input', (event) => {
    const target = event.target;
    console.log(target.value);
});
//# sourceMappingURL=casting.js.map