var arr = [
  {
    id: 1,
    firstName: "Ivan",
    age: 15,
    grades: [3, 5, 2, 2, 5],
    gender: "male"
  },
  {
    id: 2,
    firstName: "Ira",
    age: 21,
    grades: [3, 3, 3, 3, 4],
    gender: "female"
  },
  {
    id: 3,
    firstName: "Liza",
    age: 17,
    grades: [4, 5, 1, 4, 3],
    gender: "female"
  },
  {
    id: 4,
    firstName: "Petya",
    age: 26,
    grades: [1, 2, 1, 1, 3],
    gender: "male"
  },
  {
    id: 5,
    firstName: "Ivan",
    age: 18,
    grades: [4, 2, 2, 4, 1],
    gender: "male"
  }
];

let container = document.getElementById("container");

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let trHead = document.createElement("tr");

container.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(trHead);

["Id", "First Name", "Age", "Grades", "Gender"].map(el => {
  let thHead = document.createElement("th");
  trHead.appendChild(thHead);
  thHead.innerText = el;
});

function range(arg) {
  arg.forEach(function(element) {
    let trBody = document.createElement("tr");
    tbody.appendChild(trBody);
    for (let key in element) {
      let tdBody = document.createElement("td");
      trBody.appendChild(tdBody);
      tdBody.innerText = element[key];
    }
  });
}
range(arr);
