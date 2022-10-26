
//Creating empty shopping list//
let myList = [];

let list =document.getElementById("myList");


function addToList() {
    let item = document.getElementById("item").value;
    if (myList.includes(item)) {

        window.alert(item + "  already on the list");
    } else {
        
        myList.push(item);
        let newElement = document.createElement("li");
        newElement.innerHTML = item;
        list.appendChild(newElement);
        window.alert(item + " to be added to the list");
        
    }
    document.getElementById('item').value="";
 }
function removeFromList() {
    let item = document.getElementById("item").value;
    if (myList.includes(item)) {
        // remove item from the array
        let index = myList.indexOf(item);
        myList.splice(index, 1)

        //remove item from the html list
        let listHtml = list.children
        for (let i = 0; i < listHtml.length; i++) {
            if (listHtml[i].innerHTML == item ) {
                window.alert(item + " to be removed to the list");
                list.removeChild(list.children[i]);        
        }
    }
        
    } else {
        window.alert(item + "  not on the list");
        
        
        
    }
    document.getElementById('item').value="";
 }
 




console.log(myList)