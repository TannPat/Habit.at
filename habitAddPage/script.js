"use strict";

let newHabit = false;

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.addEventListener("click", (event) => {
    if (event.target === section) {
      if (section.classList.contains("clicked")) {
        section.classList.remove("clicked");
        section.classList.add("main-sections");
      } else {
        sections.forEach((sec) => sec.classList.remove("clicked"));
        section.classList.remove("main-sections");
        section.classList.add("clicked");
      }
    }
  });
});

function checkEmpty(str)
 {
  if(str == "" || str == "null")
  {
    return true;
  }
    return false;
}

function habitListAppend(tableContent)
{
  let newTD = document.createElement("li");
  let ogTable = document.getElementById("habit-list-ul");
  ogTable.appendChild(newTD);
  newTD.textContent = tableContent;
  newTD.classList.add("habit-li");
}

function habitAdd() {
  let inEl = document.getElementById("habit-input");
  let messageEl = document.getElementById("habit-added");
  if (checkEmpty(inEl.value)) {
    messageEl.classList.remove("valid");
    messageEl.classList.add("invalid");
    messageEl.textContent = "Please Enter a Valid Habit";
  }
  else
  {
    messageEl.textContent = "✔ Habit Added";
    messageEl.classList.remove("invalid");
    messageEl.classList.add("valid");
    habitListAppend(inEl.value);
    inEl.value = "";
  }
}

