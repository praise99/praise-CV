// assignmeent 2  simple program that prints my name using javascript.
function displayMyName() {
    const myName="ADEOTI PRAISE OLUWABUKUNMI"
    return myName
}
console.log(displayMyName())



// printing my name in my HTML file
let name=document.querySelector(".heading-title")
name.innerHTML=displayMyName()