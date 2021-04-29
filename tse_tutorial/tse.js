/*
 * This is the script to update for the ThoughtSpot Everywhere tutorial.
 */

const {
  init,
  AppEmbed,
  SearchEmbed,
  PinboardEmbed,
  AuthType,
  Action,
  Page,
} = tsembed;

// TODO - set the following for your URL.
const tsURL = "https://try.thoughtspot.cloud";

// functions to show and hide div sections.
const showDiv = divId => {
  const div = document.getElementById(divId);
  div.style.display = 'flex';
}

const hideDiv = divId => {
  const div = document.getElementById(divId);
  div.style.display = 'none';
}

const clearEmbed = () => {
  const div = document.getElementById("embed");
  div.innerHTML = "";
}

// Create and manage the login screen.

const onLogin = () => {
  // The following can be used if you want to use AuthType.Basic
  //const username = document.getElementById('username').value;
  //const password = document.getElementById('password').value;

  // TODO - add code to initialize the connection to ThoughtSpot

  hideDiv('login');
  showDiv('landing-page');
}

const showMainApp = () => {
  // Clears out the page and shows the main app.
  // This can be called from any page to make sure the state is correct.
  clearEmbed(); // just to be sure.
  hideDiv('landing-page');
  showDiv('main-app');
}

// Functions to embed the content based on user selection.

const onSearch = () => {
  showMainApp();

  // TODO replace the alert and return with the proper code to embed search.
  alert("Search not embedded");
}

const onVisualization = () => {
  showMainApp();

  // TODO replace the alert with the proper code to embed a visualization.
  alert("Visualization not embedded");
}

const onPinboard = () => {

  showMainApp();

  // TODO replace the alert with the proper embed a pinboard.
  alert("Pinboard not embedded");
}

// Embed the full application.
const onFull = () => {
  showMainApp();

  // TODO replace the alert with the proper code the full application.
  alert("Full application not embedded");
}

export { onLogin, onFull, onSearch, onPinboard, onVisualization };

// Show the URL to connect to.
document.getElementById('tsURL').innerText = 'ThoughtSpot Server: ' + tsURL;

// Hook up the events to the buttons and links.
document.getElementById('login-button').addEventListener('click', onLogin);

// Events for buttons
document.getElementById('search-button').addEventListener('click', onSearch);
document.getElementById('pinboard-button').addEventListener('click', onPinboard);
document.getElementById('viz-button').addEventListener('click', onVisualization);
document.getElementById('full-app-button').addEventListener('click', onFull);

// Events for nav bar
document.getElementById('search-link').addEventListener('click', onSearch);
document.getElementById('pinboard-link').addEventListener('click', onPinboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);
