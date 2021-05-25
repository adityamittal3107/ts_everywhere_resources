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
  embedSearch();
}

const tsInit = () => {
  init({
    thoughtSpotHost: tsURL,
    authType: AuthType.None,
  });
}

const embedSearch = () => {

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

window.onload = embed;