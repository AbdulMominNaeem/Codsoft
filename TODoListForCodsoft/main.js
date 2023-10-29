const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listcontainer");

function addTask() {
  if (inputBox.value === "") {
    alert("plz write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (erase) {
    if (erase.target.tagName === "LI") {
      erase.target.classList.toggle("check");
      saveData();
    } else if (erase.target.tagName === "SPAN") {
      erase.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  console.log(saveData);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
