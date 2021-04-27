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
  EmbedEvent
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

  console.log(`Connecting to ${tsURL}`);

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
  console.log('embedding search');
  showMainApp();

  // TODO replace the alert and return with the proper embed code.
  alert("Search not embedded");
}

const onVisualization = () => {
  const PINBOARD_ID = '2ba03345-d20f-4a10-9509-6e13bbb2e32a';       // TODO - set to your pinboard ID.
  const VISUALIZATION_ID = 'e2387c53-b83a-43be-84cd-ebb6292c216b';  // TODO - set to your visualization ID.

  console.log(`embedding visualization ${VISUALIZATION_ID} from pinboard ${PINBOARD_ID}`);
  showMainApp();

  // TODO replace the alert with the proper embed code.
  alert("Visualization not embedded");
}

const onPinboard = () => {
  const PINBOARD_ID = '2ba03345-d20f-4a10-9509-6e13bbb2e32a';  // TODO - set to your pinboard ID.

  console.log(`embedding pinboard ${PINBOARD_ID}`);
  showMainApp();

  // TODO replace the alert with the proper embed code.
  alert("Pinboard not embedded");
}

// Embed the full application.
const onFull = () => {
  console.log('embedding full application');
  showMainApp();

  // TODO replace the alert with the proper embed code.
  alert("Full application not embedded");
}

export { onLogin, onFull, onSearch, onPinboard, onVisualization };

// Set the URL to connect to.
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
