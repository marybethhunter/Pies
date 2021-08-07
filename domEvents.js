
import { pies } from "./data.js";
import { buttons, pieForm, pieBuilder } from "./domMethods.js";

const filterPies = (array, instructor) => {
  return array.filter((pieObject) => pieObject.instructor === instructor);
};

//function created to pass into the pie form event listener
const handleFormSubmit = (event) => {
  event.preventDefault();
  const newPie = {
    name: document.querySelector("#name").value,
    ingredients: document.querySelector("#ingredients").value,
    bakeTemp: document.querySelector("#bakeTemp").value,
    drinkPairing: document.querySelector("#drinkPairing").value,
    imageUrl: document.querySelector("#imageUrl").value,
    instructor: document.querySelector("#instructor").value,
    iceCream: document.querySelector("#iceCream").value,
  };
  pies.push(newPie);
  pieBuilder(pies);

};

//deletes pies
const deletePie = (event) => {
  const targetType = event.target.type
  const targetId = event.target.id

  if (targetType ===  "button") {
    pies.splice(targetId, 1);
    pieBuilder(pies);
  }
};

//add event listener to pie form
const pieFormEvents = () => {
  const pieFormElement = document.querySelector("#pieFormForm");
  pieFormElement.addEventListener("submit", handleFormSubmit);
};

//initially just the button clicks of if statements - then adding filter function
const handleButtonClick = (event) => {
  if (event.target.id === "all") {
    const allPies = filterPies(pies);
    pieBuilder(pies);
  }
  if (event.target.id === "trinity") {
    const trinPies = filterPies(pies, "Trinity");
    pieBuilder(trinPies);
  }
  if (event.target.id === "aja") {
    const ajaPies = filterPies(pies, "Aja");
    pieBuilder(ajaPies);
  }
  if (event.target.id === "doc") {
    const docPies = filterPies(pies, "Doc");
    pieBuilder(docPies);
  }
};

//handles the button events
const buttonEvents = () => {
  document
    .querySelector("#buttonContainer")
    .addEventListener("click", handleButtonClick);

    document
    .querySelector("#piesContainer")
    .addEventListener("click", deletePie);
};

export { filterPies, buttonEvents, pieFormEvents, handleFormSubmit, handleButtonClick, deletePie };
