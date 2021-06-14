/**
 * Basic template to start for embedding examples and tests.
 * The easiest way to get started with the various components is to log into ThoughtSpot and go to the Develop tab.
 * You can then use the Playground to generate embed code that can be copied (with some modification).
 */

// Add additional imports as needed.
const {
  init,
  Action,
  AuthType,
  SearchEmbed,
  PinboardEmbed,
} = tsembed;

const tsURL = "https://try.thoughtspot.cloud/";  // Set to the URL for your system.

/**
 * Runs the embed steps.  This function is called automatically when the window is loaded.
 * To use, simply uncomment the function you want to include.  Note that only one can be called at a time since they
 * all are displayed in the #embed DOM object.
 */
const embed = () => {
  tsInit();
  //embedSearch();
  //embedPinboard();
  //embedPinboardViz();
}

/**
 * Initializes the connection to ThoughtSpot.  Default is to use no authentication.
 */
const tsInit = () => {
  // Update to reflect a different auth type (with parameters) if necessary.
  init({
    thoughtSpotHost: tsURL,
    authType: AuthType.None,
  });
}

/**
 * Add a SearchEmbed component and render.
 */
const embedSearch = () => {
  // Add search embed here.
}

/**
 * Add a PinboardEmbed component and render.
 */
const embedPinboard = () => {
  // Add pinboard embed here.
}

/**
 * Add a PinboardEmbed component with a vizId and render.
 */
const embedPinboardViz = () => {
  // Add pinboard viz embed here.
}

window.onload = embed;