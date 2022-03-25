/*
 * The completed script for the ThoughtSpot Everywhere tutorial.  Your solution should look similar.
 * It's recommended to refer to the documentation and Developer Playground to try to get it working before
 * using this file.
 */
import {showPayload, closeModal} from "./custom-actions.js";

import {
  init,
  Action,
  AppEmbed,
  AuthType,
  EmbedEvent,
  Page,
  LiveboardEmbed,
  SearchEmbed,
} from 'https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';

// TODO - set the following for your URL.
const tsURL = "https://training.thoughtspot.cloud";

//------------------------------ Set up TS and authenticate and show app. ----------------------------

// Create and manage the login screen.
const onLogin = () => {
  // The following can be used if you want to use AuthType.Basic
  //const username = document.getElementById('username').value;
  //const password = document.getElementById('password').value;

  // TODO add the init() to set up the SDK interface.

  hideDiv('login');
  showDiv('landing-page');
}

// Clears out the page and shows the main app.
// This can be called from any page to make sure the state is correct.
const showMainApp = () => {
  clearEmbed(); // just to be sure.
  hideDiv('landing-page');
  showDiv('main-app');
}

//----------------------------------- Functions to embed content . -----------------------------------

const onSearch = () => {
  showMainApp();

  // TODO replace the following with a SearchEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Search not yet embedded.</p>";
}

const onLiveboard = () => {
  showMainApp();

  // TODO replace the following with a LiveboardEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Liveboard not yet embedded.</p>";
}

const onVisualization = () => {
  showMainApp();

  // TODO replace the following with a LiveboardEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Visualization not yet embedded.</p>";
}

// Embed the full application.
const onFull = () => {
  showMainApp();

  // TODO replace the following with an AppEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Full app not yet embedded.</p>";
}

//----------------------------------- Functions to manage the UI. -----------------------------------

// functions to show and hide parts of the UI.
const showDiv = divId => {
  const div = document.getElementById(divId);
  div.style.display = 'flex';
}

const hideDiv = divId => {
  const div = document.getElementById(divId);
  div.style.display = 'none';
}

// Clears the embedded section.
const clearEmbed = () => {
  const div = document.getElementById("embed");
  div.innerHTML = "";
}

//---------------------------- connect UI to code and start the app. ----------------------------

// Show the URL to connect to.
document.getElementById('ts-url').innerText = 'ThoughtSpot Server: ' + tsURL;

// Hook up the events to the buttons and links.
document.getElementById('login-button').addEventListener('click', onLogin);
document.getElementById('close-modal').addEventListener('click', closeModal);

// Events for buttons
document.getElementById('search-button').addEventListener('click', onSearch);
document.getElementById('liveboard-button').addEventListener('click', onLiveboard);
document.getElementById('viz-button').addEventListener('click', onVisualization);
document.getElementById('full-app-button').addEventListener('click', onFull);

// Events for nav bar
document.getElementById('search-link').addEventListener('click', onSearch);
document.getElementById('liveboard-link').addEventListener('click', onLiveboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);