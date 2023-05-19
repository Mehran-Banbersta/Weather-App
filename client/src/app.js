import { initHomePage } from "./pages/homePages.js";
// import { initApi } from './api.js';

const loadApp = () => {
  // initApi()
  initHomePage();
};

window.addEventListener("load", loadApp);
