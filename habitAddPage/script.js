"use strict";

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

function Alert() {
  alert("Works");
}

function checkEmpty(str)
 {
  if(str == "" || str == "null")
  {
    return true;
  }
    return false;
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
    console.log("Habit Added");
    messageEl.textContent = "✔ Habit Added";
    messageEl.classList.remove("invalid");
    messageEl.classList.add("valid");
    habits.push(inEl.value);
  }
  console.log(habits); 
}
