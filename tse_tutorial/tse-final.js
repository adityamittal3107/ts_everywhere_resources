/*
 * The completed script for the ThoughtSpot Everywhere tutorial.  Your solution should look similar.
 * It's recommended to refer to the documentation and Developer Playground to try to get it working before
 * using this file.
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
const tsURL = "https://try-internal.thoughtspotstaging.cloud/"

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

// Functions to embed the content based on user selection.

const onSearch = () => {
  showMainApp();

  const embed = new SearchEmbed('#embed', {
    frameParams: {},
    collapseDataSources: false,
    hideResults: false,
    disabledActions: [Action.SpotIQAnalyze],
    disabledActionReason: 'Enterprise feature.',
    hiddenActions: [Action.Download, Action.Share, Action.DownloadAsCsv],
    hideDataSources: false,
  });

  embed.render();
}

const onVisualization = () => {
  showMainApp();

  const embed = new PinboardEmbed('#embed', {
    frameParams: {},
    pinboardId: '2ba03345-d20f-4a10-9509-6e13bbb2e32a',  // TODO - set to your pinboard ID.
    vizId: 'e2387c53-b83a-43be-84cd-ebb6292c216b',       // TODO - set to your visualization ID.
    disabledActions: [Action.Download],
    disabledActionReason: 'Enterprise feature.',
    hiddenActions: [Action.SpotIQAnalyze]
  });

  embed.render();
}

const onPinboard = () => {
  showMainApp();

  const embed = new PinboardEmbed("#embed", {
      frameParams: {},
      pinboardId: '2ba03345-d20f-4a10-9509-6e13bbb2e32a',  // TODO - set to your pinboard ID.
      disabledActions: [Action.DownloadAsPdf],
      disabledActionReason: 'Enterprise feature.',
      hiddenActions: [Action.PinboardInfo]
  });

  embed.render();
}

// Embed the full application.
const onFull = () => {
  showMainApp();

  const embed = new AppEmbed('#embed', {
    frameParams: {},
    showPrimaryNavbar: false,  // set to true to show the ThoughtSpot navbar
    pageId: Page.Home, // loads the Home tab, but you can start on any main tab - try Page.Search
    disabledActions: [], // list of any actions you don't want the users to use, but still see
    disabledActionReason: 'No sharing allowed.', // tool tip the user will see
    hiddenActions: [] // totally hide a feature from a user
  });

  embed.render();
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
