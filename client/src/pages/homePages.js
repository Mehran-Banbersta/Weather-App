import { USER_HEADER_INTERFACE_ID, SEARCH_BUTTON_ID } from "../constants.js";
import { createHeaderElement } from "../views/homeView.js";
// import { initQuestionPage } from './questionPage.js';

export const initHomePage = () => {
  const userHeaderInterface = document.getElementById(USER_HEADER_INTERFACE_ID);
  userHeaderInterface.innerHTML = "";
  console.log(userHeaderInterface)

  const headerElement = createHeaderElement();
  userHeaderInterface.appendChild(headerElement);

  document
    .getElementById(SEARCH_BUTTON_ID)
    .addEventListener("click", startSearch);
};

const startSearch = () => {
  console.log("click");
};
