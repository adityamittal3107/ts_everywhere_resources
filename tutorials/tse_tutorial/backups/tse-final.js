/*
 * The completed script for the ThoughtSpot Everywhere tutorial.  Your solution should look similar.
 * It's recommended to refer to the documentation and Developer Playground to try to get it working before
 * using this file.
 */
import {
  init,
  Action,
  AppEmbed,
  AuthType,
  EmbedEvent,
  HostEvent,
  LiveboardEmbed,
  Page,
  RuntimeFilterOp,
  SearchEmbed,
} from 'https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';

import {getSearchData} from "./rest-api.js";
import {LiveboardContextActionData} from "./dataclasses.js";

// TODO - set the following for your URL.
const tsURL = "https://training.thoughtspot.cloud";

//------------------------------ Set up TS and authenticate and show app. ----------------------------

// Create and manage the login screen.
const onLogin = () => {
  // The following can be used if you want to use AuthType.Basic
  //const username = document.getElementById('username').value;
  //const password = document.getElementById('password').value;

  init({
    thoughtSpotHost: tsURL,
    authType: AuthType.None,
  });

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

//----------------------------------- Functions to embed content . -----------------------------------

const onSearch = () => {
  showMainApp();

  const embed = new SearchEmbed("#embed", {
    frameParams: {},
    collapseDataSources: true,
    disabledActions: [Action.Download, Action.DownloadAsCsv],
    disabledActionReason: "Enterprise feature",
    hiddenActions: [Action.Share],
    dataSources: ["1b1c237d-9de8-4542-bf1f-0c3157ddb8d2"],
    searchOptions: {
      searchTokenString: '[sales] [product type]',
      executeSearch: true,
    },
  });

  embed
    .on(EmbedEvent.CustomAction, payload => {  // shows the payload for any custom action.
        showPayload(payload);
    })
    .render();
}

const onLiveboard = () => {
  showMainApp();

  const embed = new LiveboardEmbed("#embed", {
      frameParams: {},
      liveboardV2: false,
      pinboardId: "9c3d26af-cf1b-4e89-aa42-f60d34983827",  // TODO - set to your liveboard ID.
      disabledActions: [Action.DownloadAsPdf],
      disabledActionReason: 'Enterprise feature.',
      hiddenActions: [Action.LiveboardInfo]
  });

  embed.render();
}

const onVisualization = () => {
  showMainApp();

  const embed = new LiveboardEmbed("#embed", {
    frameParams: {},
    liveboardV2: false,
    liveboardId: "9c3d26af-cf1b-4e89-aa42-f60d34983827",
    vizId: "9564b208-39b9-4349-9f06-3c989a9e1863",
  });

  embed.render();
}

// Embed the full application.
const onFull = () => {
  showMainApp();

  const embed = new AppEmbed('#embed', {
    frameParams: {},
    liveboardV2: false,
    showPrimaryNavbar: false,  // set to true to show the ThoughtSpot navbar
    pageId: Page.Home, // loads the Home tab, but you can start on any main tab - try Page.Search
    disabledActions: [], // list of any actions you don't want the users to use, but still see
    disabledActionReason: 'No sharing allowed.', // tool tip the user will see
    hiddenActions: [] // totally hide a feature from a user
  });

  embed.render();
}

// Embed a custom action.
const onCustomAction = () => {
  showMainApp();

  const embed = new LiveboardEmbed("#embed", {
    frameParams: {},
    liveboardV2: false,
    pinboardId: "b504e160-3025-4508-a76a-1beb1f4b5eed",
  });

  embed
  .on(EmbedEvent.CustomAction, (payload) => {
    // The id is defined when creating the Custom Action in ThoughtSpot. Checking id attribute allows correct routing of multiple Custom Actions
    if (payload.id === 'filter-content') {
      filterData(embed, payload);
    }
  })
  .render();
}

// Updates the global filterValues array, then re-runs the embedLiveboard to reload the original Liveboard with the updated values in the runtimeFilters
const filterData = (embed, payload) => {
  const actionData = LiveboardContextActionData.createFromJSON(payload);
  const columnNameToFilter = actionData.columnNames[0];
  const filterValues = [];
  filterValues.push(actionData.data[columnNameToFilter][0]);

  embed.trigger(HostEvent.UpdateRuntimeFilters, [{
    columnName: columnNameToFilter,
    operator: RuntimeFilterOp.EQ,
    values: filterValues,
  }]);
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

// closes the modal element when the close is selected.
//const closeModal = () => {
//  const showDataElement = document.getElementById('show-data')
//  showDataElement.style.display = 'none';  // hide the box.
//}

//---------------------------- connect UI to code and start the app. ----------------------------

// Show the URL to connect to.
document.getElementById('ts-url').innerText = 'ThoughtSpot Server: ' + tsURL;

// Hook up the events to the buttons and links.
document.getElementById('login-button').addEventListener('click', onLogin);
//document.getElementById('close-modal').addEventListener('click', closeModal);

// Events for buttons
document.getElementById('search-button').addEventListener('click', onSearch);
document.getElementById('liveboard-button').addEventListener('click', onLiveboard);
document.getElementById('viz-button').addEventListener('click', onVisualization);
document.getElementById('full-app-button').addEventListener('click', onFull);
document.getElementById('custom-action-button').addEventListener('click', onCustomAction);

// Events for nav bar
document.getElementById('search-link').addEventListener('click', onSearch);
document.getElementById('liveboard-link').addEventListener('click', onLiveboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);
document.getElementById('custom-action-link').addEventListener('click', onCustomAction);
