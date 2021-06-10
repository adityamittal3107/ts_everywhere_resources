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
  //embedPinboard();
  //embedPinboardViz();
}

const tsInit = () => {
}

const embedSearch = () => {
  // Add search embed here.
}

const embedPinboard = () => {
  // Add pinboard embed here.
}

const embedPinboardViz = () => {
  // Add pinboard viz embed here.
}

window.onload = embed;