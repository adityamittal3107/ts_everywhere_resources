// Add additional imports as needed.
const {
  init,
  Action,
  AuthType,
  SearchEmbed,
} = tsembed;

const tsURL = "https://try.thoughtspot.cloud/";  // Set to the URL for your system.

const embed = () => {
  tsInit();
  // only use one of the following since they all embed to the same viz.
  embedSearch();
  //embedPinboard();
  //embedPinboardViz();
}

const tsInit = () => {
  init({
    thoughtSpotHost: tsURL,
    authType: AuthType.None,
  });
}

const embedSearch = () => {

  // Sample embed.  The datasource GUID needs to exist in your system.
  const embed = new SearchEmbed('#embed', {
    frameParams: {},
    hideDataSources: true,
    dataSources: ["cd252e5c-b552-49a8-821d-3eadaa049cca"],
    disabledActions: [Action.SpotIQAnalyze],
    disabledActionReason: "Enterprise feature",
    hiddenActions: [Action.Share],
  });
  embed.render();
}

const embedPinboard = () => {

  // Sample embed.  The pinboardId GUID needs to exist in your system.
  const embed = new PinboardEmbed("#embed", {
    frameParams: {},
     pinboardId: "b22eabd5-6fa5-4342-847e-ca2abd5d54cc",
  });
  embed.render();
}

const embedPinboardViz = () => {

  // Sample embed.  The pinboardId and vizId GUIDs needs to exist in your system.
  const embed = new PinboardEmbed("#embed", {
    frameParams: {},
    pinboardId: "b22eabd5-6fa5-4342-847e-ca2abd5d54cc",
    vizId: "5a2c4bce-6ef5-4e41-9ce5-a28202bc17da"
  });
  embed.render();
}

window.onload = embed;