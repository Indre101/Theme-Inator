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
      return data;
    })
    .then(data => {
      const themeOptions = document.querySelectorAll(".theme");
      const themeOptionsArr = Array.from(themeOptions);
      themeOptions.forEach(option => {
        option.addEventListener("change", () => {
          data[themeOptionsArr.indexOf(option)].house = selectedHouse();
          const selectedStudentCard = document.querySelectorAll(".student")[
            themeOptionsArr.indexOf(option)
          ];
          const selectedStudentObject = data[themeOptionsArr.indexOf(option)];
          showStudentHouseAndModal(selectedStudentCard, selectedStudentObject);
        });
      });
    });
}

function selectedHouse() {
  const selectedTheme = event.target;
  return selectedTheme.value;
}

function createStudentCards(student, data) {
  const clnStudent = studentTemplate.cloneNode(true);
  clnStudent.querySelector(".nameOftheStudent").textContent = student.fullname;
  clnStudent.querySelector(".textStudentName").textContent = student.fullname;
  clnStudent.querySelector(".number").textContent = data.indexOf(student) + 1;

  showStudentHouseAndModal(clnStudent, student);
  clnStudent.querySelectorAll(".theme option").forEach(option => {
    if (option.value == student.house.toLowerCase()) {
      option.selected = true;
    }
  });

  students.appendChild(clnStudent);
}

function showHideElement(element, classToAdd, classtoRemove) {
  element.classList.toggle(`${classToAdd}`);
  element.classList.toggle(`${classtoRemove}`);
}

function showStudentHouseAndModal(clnStudent, student) {
  clnStudent.querySelector(".house").textContent = student.house;
  const modal = clnStudent.querySelector(".modal");
  modal.dataset.crest = student.house.toLowerCase();
  clnStudent.querySelector(".textStudentHouse").textContent = student.house;

  clnStudent.querySelector(".mainStudentInfo").onclick = function() {
    showHideElement(modal, "d-flex", "d-none");
  };

  clnStudent.querySelector(".close").onclick = function() {
    showHideElement(modal, "d-flex", "d-none");
  };
}
