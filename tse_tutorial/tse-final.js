/*
 * The completed script for the TS Everywhere tutorial.  Your solution should look similar.
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
  EmbedEvent
} = tsembed;

// TODO - set the following for your URL.
const tsURL = "https://try-internal.thoughtspotstaging.cloud";

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

  console.log(`connecting to ${tsURL}`);

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
  console.log('embedding search');
  showMainApp();

  const embed = new SearchEmbed('#embed', {
    frameParams: {
        width: "100%",
        height: "100%"
    },
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
  const PINBOARD_ID = '2ba03345-d20f-4a10-9509-6e13bbb2e32a';       // TODO - set to your pinboard ID.
  const VISUALIZATION_ID = 'e2387c53-b83a-43be-84cd-ebb6292c216b';  // TODO - set to your visualization ID.

  console.log(`embedding visualization ${VISUALIZATION_ID} from pinboard ${PINBOARD_ID}`);
  showMainApp();

  const embed = new PinboardEmbed('#embed', {
    frameParams: {
      width: "100%",
      height: "100%"
    },
    pinboardId: PINBOARD_ID,
    vizId: VISUALIZATION_ID,
    disabledActions: [Action.Download],
    disabledActionReason: 'Enterprise feature.',
    hiddenActions: [Action.SpotIQAnalyze]
  });

  embed.render();
}

const onPinboard = () => {
  const PINBOARD_ID = '2ba03345-d20f-4a10-9509-6e13bbb2e32a';  // TODO - set to your pinboard ID.

  console.log(`embedding pinboard ${PINBOARD_ID}`);
  showMainApp();

  const embed = new PinboardEmbed("#embed", {
      frameParams: {
        width: "100%",
        height: "100%"
      },
      pinboardId: PINBOARD_ID,
      disabledActions: [Action.DownloadAsPdf],
      disabledActionReason: 'Enterprise feature.',
      hiddenActions: [Action.PinboardInfo]
  });

  embed.render();
}

// Embed the full application.
const onFull = () => {
  console.log('embedding full application');
  showMainApp();

  const embed = new AppEmbed('#embed', {
    frameParams: {
      width: "100%",
      height: "100%"
    },
    showPrimaryNavbar: false,  // set to true to show the ThoughtSpot navbar
    pageId: Page.Home, // loads the Home tab, but you can start on any main tab - try Page.Search
    disabledActions: [], // list of any actions you don't want the users to use, but still see
    disabledActionReason: 'No sharing allowed.', // tool tip the user will see
    hiddenActions: [] // totally hide a feature from a user
  });

  embed.render();
}

export { onLogin, onFull, onSearch, onPinboard, onVisualization };

// Set the URL to connect to.
document.getElementById('tsURL').innerText = 'ThoughtSpot Server: ' + tsURL;

// Hook up the events to the buttons and links.
document.getElementById('login-button').addEventListener('click', onLogin);

// Events for tiles
document.getElementById('embed-search-tile').addEventListener('click', onSearch);
document.getElementById('embed-pinboard-tile').addEventListener('click', onPinboard);
document.getElementById('embed-viz-tile').addEventListener('click', onVisualization);
document.getElementById('embed-full-app-tile').addEventListener('click', onFull);

// Events for nav bar
document.getElementById('search-link').addEventListener('click', onSearch);
document.getElementById('pinboard-link').addEventListener('click', onPinboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);
