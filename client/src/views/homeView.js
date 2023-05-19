import { SEARCH_BUTTON_ID } from "../constants.js";

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createHeaderElement = () => {
  const element = Object.assign(document.createElement("div"), {
    className: "header-info",
  });
  element.innerHTML = String.raw`
  <div class='location-info'>
    <h4>Thursday, May</h4>
    <h1>Breda</h1>
  </div>  

  <div class="search-menu">
    <div>
      <div class="icon-temp">
        <h1><span class="temperature">18</span><span class="material-symbols-outlined"></span>
        </h1>
      <div>
        <span class="material-symbols-outlined">sunny</span>
      </div>
    </div>
      <h4>Cloudy / 4mph</h4>
  </div>
             
  <div id="search-container">
    <div class="search-btn">
        <input type="text" id="city-input" placeholder="Enter city name">
          <button id="${SEARCH_BUTTON_ID}" class="search-button"><span class="material-symbols-outlined">search</span></button>
      </div>
    </div>
</div>
  `;

  return element;
};
