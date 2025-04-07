"use strict";

let newHabit = false;

let habits = [];

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

function checkEmpty(str) {
  if (str == "" || str == "null") {
    return true;
  }
  return false;
}

function habitListAppend(tableContent) {
  let newLI = document.createElement("li");
  let ogUL = document.getElementById("habit-list-ul");
  ogUL.appendChild(newLI);
  newLI.textContent = tableContent;
  newLI.classList.add("habit-li");
  const removeBTN = document.createElement("button");
  removeBTN.textContent = "Remove";
  newLI.appendChild(removeBTN);
  removeBTN.addEventListener("click", () => {
    removeHabit(newLI, habits);
  });
  newLI.style.borderTop = "none";
}

function habitAdd() {
  let inEl = document.getElementById("habit-input");
  let messageEl = document.getElementById("habit-added");
  if (checkEmpty(inEl.value)) {
    messageEl.classList.remove("valid");
    messageEl.classList.add("invalid");
    messageEl.textContent = "Please Enter a Valid Habit";
  } else {
    messageEl.textContent = "✔ Habit Added";
    messageEl.classList.remove("invalid");
    messageEl.classList.add("valid");
    habits.push(inEl.value.trim());
    habitListAppend(inEl.value);
    inEl.value = "";
  }
}

function removeHabit(habitElement, habitArray) {
  const text = habitElement.firstChild.textContent.trim();

  console.log("Habit to Remove:", text);
  console.log("Habit Array:", habitArray);

  const index = habitArray.indexOf(text);

  if (index > -1) {
    habitArray.splice(index, 1);
    console.log("Updated Habit Array:", habitArray);
  } else {
    console.error("Habit not found in array:", text);
  }

  habitElement.remove();
}
