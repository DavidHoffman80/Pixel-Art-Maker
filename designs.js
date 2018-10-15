let submitBTN = document.getElementById('submitButton');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');

// Mouseover function
function drawMouseClick(event) {
  // If the left mouse button is pressed then draw on the table
  if(event.which === 1){
    event.target.style.backgroundColor = color.value;
  }
}

function makeGrid(){
  // For each row(height) create a <tr></tr>
  for(var h = 0; h < height.value; h++){
    let tr = document.createElement("tr");
    table.appendChild(tr);
    // For each column(width) create a <td></td>
    for(var w = 0; w < width.value; w++){
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
}

// When the user clicks on the submit button
  // Prevent default behaviour
  // clear the table canvas
  // call makeGrid function
submitBTN.addEventListener('click', function(event){
  event.preventDefault();
  table.innerHTML = "";
  makeGrid();
});

// Add event listener to the drawing table
table.addEventListener('click', drawMouseClick);