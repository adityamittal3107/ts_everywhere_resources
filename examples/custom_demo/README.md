custom_embed_demo.html is a simple single page application for demoing ThoughtSpot Everywhere.

The first <script> block defines *tsHost* variable for the ThoughtSpot instance domain, *defaultLiveboardGuid* for the initial Liveboard to load and a *menuItems* object to define the sidebar menu.

Within menuItems, each element of the array is an object with the following properties: 
- 'name' property is the visible menu item text
- 'type' can be one of: ['liveboard', 'visualization', 'answer', 'search']
- 'guid' is a Liveboard GUID for Liveboards and Visualizations, an Answer GUID for 'answer, and a data source (worksheet) GUID for 'search'
- 'vizGuid' is only used for 'visualization' type, leave null othewise
- 'description' will not display if set to null, otherwise appears above the embed component
