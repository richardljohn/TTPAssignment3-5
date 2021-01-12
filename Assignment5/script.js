const table = document.getElementById("table");
const addRowButton = document.getElementById("addRow");

function addRow() {
    const newRow = document.createElement("tr");
    const newData = document.createElement("td");
    const newDataTwo = document.createElement("td");
    const allCells = document.querySelectorAll("td");
    const headers = document.querySelectorAll("th");
    let total = headers.length;
    total = total + allCells.length;
    newData.id = ("cell-" + total+1);
    newData.onclick = addColorToCurrentCell(this.id);
    newDataTwo.id = ("cell-" + total+2);
    newDataTwo.onclick = addColorToCurrentCell(this.id);
    newRow.appendChild(newData);
    newRow.appendChild(newDataTwo);
    table.appendChild(newRow);
}

const removeRowButt = document.getElementById("removeRow");

function removeRow() {
    const allRows = document.querySelectorAll("tr");
    const lastRow = allRows[allRows.length-1];
    lastRow.remove();
}

function addColor(value) {
    //console.log(value);
    const allCells = document.querySelectorAll("td");
    allCells[0].style.backgroundColor = value;
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

function clear() { 
    allCells = document.querySelectorAll("td");
    allCells.style.backgroundColor = "white";
}