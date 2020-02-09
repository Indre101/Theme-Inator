const studentTemplate = document.querySelector(".studentTemplate").content;
const students = document.querySelector(".students");

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("students1991.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(student => {
        createStudentCards(student, data);
      });
    });
}

document.querySelector(".theme").addEventListener("change", selected);

function selected() {
  const selectedTheme = this.value; //... more code}

}

function createStudentCards(student, data) {
  const clnStudent = studentTemplate.cloneNode(true);
  // console.log(student.fullname);
  clnStudent.querySelector(".nameOftheStudent").textContent = student.fullname;
  clnStudent.querySelector(".house").textContent = student.house;
  clnStudent.querySelector(".number").textContent = data.indexOf(student) + 1;
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

  students.appendChild(clnStudent);
}

function showHideElement(element, classToAdd, classtoRemove) {
  element.classList.toggle(`${classToAdd}`);
  element.classList.toggle(`${classtoRemove}`);
}