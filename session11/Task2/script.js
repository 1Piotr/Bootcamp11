
//Creating empty shopping list//
let myList = [];
let list =document.getElementById("myList");

// function addToList1() {
  //  let item = document.getElementById("item").value;
 //   myList.push(item);
 //
function addToList() {
    let item = document.getElementById("item").value;
    
    if (myList.includes(item)) {

        window.alert(item + "  already on the list");
    } else {
        
        myList.push(item);
        let newElement = document.createElement("li");
        newElement.innerHTML = item;
        list.appendChild(newElement);
        window.alert(item + "  added to the list");
        
    }
    document.getElementById('item').value="";
 }




console.log(myList)