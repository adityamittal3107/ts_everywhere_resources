// Add additional imports as needed.
const {
  init,
  AuthType,
  EmbedEvent,
  PinboardEmbed,
  RuntimeFilterOp,
} = tsembed;

import { PinboardContextActionData } from "./dataclasses.js";

const tsURL = "https://try.thoughtspot.cloud/";  // Set to the URL for your system.

const embed = () => {
  tsInit();
  embedPinboard();
}

const tsInit = () => {
  init({
    thoughtSpotHost: tsURL,
    authType: AuthType.None,
  });
}

let columnName = '';
let values = [''];

const filterData = (payload) => {
  const actionData = PinboardContextActionData.createFromJSON(payload);
  console.log(actionData);
  columnName = actionData.columnNames[0];
  values = [];
  values.push(actionData.data[columnName][0]);
  console.log(`Filtering on ${columnName}: ${values}`)
  embedPinboard();
}

const embedPinboard = () => {

  // Sample embed.  The pinboardId GUID needs to exist in your system.
  const embed = new PinboardEmbed("#embed", {
    frameParams: {},
     pinboardId: "b22eabd5-6fa5-4342-847e-ca2abd5d54cc",
     runtimeFilters: [{
          columnName: columnName, // eg: color
          operator: RuntimeFilterOp.EQ,
          values: values // eg: red
     }],
  });

  embed
  .on(EmbedEvent.CustomAction, (payload) => {
    if (payload.id === 'filter') {
      filterData(payload);
    }
  })
  .render();

}

window.onload = embed;