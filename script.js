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
let select = document.getElementsByTagName("select");
rowAdd.addEventListener("click", makeRow);
table.addEventListener("click", colorize);

function colorize(event) {
  let target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = "blue";
  }
}

select.addEventListener("change", function () {
  console.log(event.target.value);
});
