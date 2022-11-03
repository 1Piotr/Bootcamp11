
let userInp = [];
let elements = document.getElementsByClassName("oper")
let inp = document.getElementById("user"); 
// updating value of the placeholder
// and storing user's input
function myFunction() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) =>
        {
        let element = e.target.innerText;
        userInp.push(element);
      
    
    inp.setAttribute("placeholder", userInp.join("")); 
        
    })
    }   
}
myFunction()
//adding function appenplaholder to aal oper class elemtens
function addAppen(){
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("onclick", "appenPlaceholder()")
}
}
//utilising C button
function clearPlaceholder() {
    userInp.length=0;
    inp.setAttribute("placeholder", userInp.join(""));
    inp.setAttribute("value", "");
}
//getting result of the math operations
function calc() {
    let result =eval(userInp.join(""));
    inp.setAttribute("value",result);
}


