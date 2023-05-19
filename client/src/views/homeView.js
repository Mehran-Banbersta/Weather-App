import { SEARCH_BUTTON_ID } from '../constants.js'

export const createHeaderElement = () => {
  const element = Object.assign(document.createElement("div"), {
    className: "header-info",
  });
  element.innerHTML = String.raw`
  `
};
