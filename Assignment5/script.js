const table = document.getElementById("table");
const addRowButton = document.getElementById("addRow");
let numRows = document.querySelectorAll("tr").length;
let numCols = 2;
let newCols = 0;

function addRow() {
    const newRow = document.createElement("tr");
    // const newData = document.createElement("td");
    // const newDataTwo = document.createElement("td");
    const allCells = document.querySelectorAll("td");
    const headers = document.querySelectorAll("th");
    let total = headers.length;
    total = total + allCells.length;
    total++;
    for(let c = 0; c < numCols; c++){
        const newData = document.createElement("td");
        newData.id = ("cell-" + total);
        newData.onclick = "addColorToCurrentCell(this.id)";
        newData.addEventListener("click", function(){
            addColorToCurrentCell(this.id) 
        });
        newRow.appendChild(newData);
        total++;
    }
    // newData.id = ("cell-" + total);
    // total++;
    // newDataTwo.id = ("cell-" + total);
    // newRow.appendChild(newData);
    // newRow.appendChild(newDataTwo);
    table.appendChild(newRow);
    numRows++;
}

function addColumn(){
    const allRows = document.querySelectorAll("tr");
    for(let r = 0; r < allRows.length; r++){
        if(r === 0){
            const newRow = document.createElement("th");
            newCols++;
            newRow.id = ("new-column-cell-" + newCols);
            newRow.addEventListener("click", function(){
                addColorToCurrentCell(this.id) 
            });
            allRows[r].appendChild(newRow);
        } else {
            const newRow = document.createElement("td");
            newCols++;
            newRow.id = ("new-column-cell-" + newCols);
            newRow.addEventListener("click", function(){
                addColorToCurrentCell(this.id) 
            });
            allRows[r].appendChild(newRow);
        }
    }
    numCols++;
}

const removeRowButt = document.getElementById("removeRow");

function removeRow() {
    if(numRows === 1){
        alert("Only 1 Row Left. Can't Remove Row.")
    } 
    else {
        const allRows = document.querySelectorAll("tr");
        const lastRow = allRows[allRows.length-1];
        lastRow.remove();
        numRows--;
    }
}

function removeColumn() { 
    if(numCols === 1){
        console.log("REMOVE");
        alert("Only 1 Column Left. Can't Remove Column.");
    }
    else {
        const allRows = document.querySelectorAll("tr");
        for(let i = 0; i < allRows.length; i++){
            allRows[i].removeChild(allRows[i].lastChild);
            numCols--;
        }
    }
}

function addColor(value) {
    //console.log(value);
    const allCells = document.querySelectorAll("td");
    // allCells[0].style.backgroundColor = value;
}

function colorAll(value) {
    //console.log(value);
    const headerCells = document.querySelectorAll("th");
    for(let j = 0; j < headerCells.length; j++){
        headerCells[j].style.backgroundColor = value;
    }
    const allCells = document.querySelectorAll("td");
    for(let i = 0; i < allCells.length; i++){
        allCells[i].style.backgroundColor = value;
    }
}

function addColorToCurrentCell(currentCell) { 
    const current = document.getElementById(currentCell);
    current.style.backgroundColor = document.getElementById("color").value;
}

// function clear() { 
//     const headerCells = document.querySelectorAll("th");
//     for(let j = 0; j < headerCells.length; j++){
//         headerCells[j].style.backgroundColor = "white";
//     }
//     const allCells = document.querySelectorAll("td");
//     for(let i = 0; i < allCells.length; i++){
//         allCells[i].style.backgroundColor = "white";
//     }
// }