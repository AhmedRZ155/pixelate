// Your code here
let table = document.getElementsByTagName("table")[0];
function makeRow() {
  let row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

let rowAdd = document.getElementById("add-row");
let select = document.getElementsByTagName("select")[0];
let chosenColor = "red";

rowAdd.addEventListener("click", makeRow);
table.addEventListener("click", colorize);

select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});
function colorize(event) {
  let target = event.target;
  if (target.className === chosenColor) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}
