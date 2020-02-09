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
        var arr = Array.from(themeOptions);

        themeOptions.forEach(e => {
          e.addEventListener("change", () => {

            data[arr.indexOf(e)].house = selected()
            console.log(data[arr.indexOf(e)]);
            studentCard(document.querySelectorAll(".student")[arr.indexOf(e)], data[arr.indexOf(e)])

            // student.house = selected();
            // modal.dataset.crest = selected()
            // a.textContent = selected();
            // b.textContent = selected();
            // console.log(e.parentElement);
            // console.log(data[arr.indexOf(e)].house);
            // console.log(document.querySelectorAll(".student"));

            // console.log(e.parentElement);
            // console.log(document.querySelectorAll(".student")[data.indexOf(student)]);
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

function createStudentCards(student, data) {
  const clnStudent = studentTemplate.cloneNode(true);
  // console.log(student.fullname);

  studentCard(clnStudent, student)

  students.appendChild(clnStudent);
}

function showHideElement(element, classToAdd, classtoRemove) {
  element.classList.toggle(`${classToAdd}`);
  element.classList.toggle(`${classtoRemove}`);
}


function studentCard(clnStudent, student) {
  clnStudent.querySelector(".nameOftheStudent").textContent = student.fullname;
  clnStudent.querySelector(".house").textContent = student.house;
  // clnStudent.querySelector(".number").textContent = data.indexOf(student) + 1;
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