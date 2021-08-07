import { pies } from "./data.js";
import { buttons, pieForm, pieBuilder } from "./domMethods.js";
import { buttonEvents, pieFormEvents, handleFormSubmit, handleButtonClick, deletePie, filterPies } from "./domEvents.js";


const init = () => {
  //this starts the app
  buttons(); //put dom elements first
  buttonEvents(); //put event listeners after
  pieBuilder(pies);
  pieForm();
  pieFormEvents();
};

init();
