const formInit = document.querySelector(".popup__init");
const form = document.querySelector(".popup");
const cancelBtn = document.querySelector(".form__btn2");
const formBtn = document.querySelector(".form__btn");
const runType = document.getElementById("type__input");
const runDate = document.getElementById("date__input");
const runDistance = document.getElementById("distance__input");
const runPace = document.getElementById("pace__input");
const runTime = document.getElementById("time__input");
const runNotes = document.getElementById("notes__input");

formInit.addEventListener("click", function() {
  form.style.display = "flex";
  console.log("done");
});

formBtn.addEventListener("click", function() {
  closeForm();
});

cancelBtn.addEventListener("click", function() {
  closeForm();
});

const closeForm = function() {
  form.style.display = "none";
  runType.value = "";
  runDate.value = "";
  runDistance.value = "";
  runPace.value = "";
  runTime.value = "";
  runNotes.value = "";
};
