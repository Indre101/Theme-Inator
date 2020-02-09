const studentTemplate = document.querySelector(".studentTemplate").content;
const students = document.querySelector(".students");

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("students1991.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(student => {
        createStudentCards(student, data);
        const themeOptions = document.querySelectorAll(".theme")
        const themeOptionsArr = Array.from(themeOptions);
        themeOptions.forEach(option => {
          option.addEventListener("change", () => {
            data[themeOptionsArr.indexOf(option)].house = selected()
            const selectedStudent = document.querySelectorAll(".student")[themeOptionsArr.indexOf(option)]

            studentCard(selectedStudent, data[themeOptionsArr.indexOf(option)])
          });
        })
      });
    })
}

function selected() {
  const selectedTheme = event.target;
  return selectedTheme.value;
}

function changeStudentHouse() {
  const students = document.querySelectorAll(".student")
}


let i = 0;

function createStudentCards(student, data) {
  const clnStudent = studentTemplate.cloneNode(true);
  studentCard(clnStudent, student)
  clnStudent.querySelector(".number").textContent = i;

  students.appendChild(clnStudent);
}

function showHideElement(element, classToAdd, classtoRemove) {
  element.classList.toggle(`${classToAdd}`);
  element.classList.toggle(`${classtoRemove}`);
}



function studentCard(clnStudent, student) {
  i++
  clnStudent.querySelector(".nameOftheStudent").textContent = student.fullname;
  clnStudent.querySelector(".house").textContent = student.house;
  const modal = clnStudent.querySelector(".modal");
  modal.dataset.crest = student.house.toLowerCase();
  clnStudent.querySelector(".textStudentName").textContent = student.fullname
  clnStudent.querySelector(".textStudentHouse").textContent = student.house;

  clnStudent.querySelector(".mainStudentInfo").onclick = function () {
    showHideElement(modal, "d-flex", "d-none");
  };

  clnStudent.querySelector(".close").onclick = function () {
    showHideElement(modal, "d-flex", "d-none");
  };
}