const table = document.querySelector('table#shopping-list-table tbody');
function createTable(myArray){
       
    for (let i = 0; i < myArray.length; i++) {
            let myItem =(myArray[i]);
            const newRow = `
                <tr class="remove">
                    <td class="p-4">${myItem.item}</td>
                    <td class="p-4">${myItem.price}</td>
                    <td class="p-4">${myItem.category}</td>
                </tr>
            `;
            table.insertAdjacentHTML('beforeend', newRow); 
    }}
createTable(shoppingItems)

//list of unique values for category
let uniqueCat = [];
for (let j=0;j<shoppingItems.length;j++) {
    if (uniqueCat.includes(shoppingItems[j].category)==false) {
        uniqueCat.push(shoppingItems[j].category)
    }
}
// updating list of unique categories in html table
//
let Cat = document.getElementById("sel1")
for (let x of uniqueCat) {
    
    let option =document.createElement("option")
    option.innerHTML = x
    option.setAttribute("value", x)
    Cat.appendChild(option)   
  }


//storing selected value
selected =[]
function myFoo() {
    selected.length=0;
    selected.push(Cat.value);
   
    const element = document.getElementById("shopping-list-table");
    const removes = document.querySelectorAll('.remove');

    removes.forEach(remove => {
        remove.remove();
});   
    if (selected[0]=="category") {
        createTable(shoppingItems)

    }
    else {   
        let filteredArray = shoppingItems.filter(checkCat);
        createTable(filteredArray)
    }

}

function checkCat(checkItem) {
  return checkItem.category==selected[0]
}

