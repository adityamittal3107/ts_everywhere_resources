# Embed content linking example

This example shows how to implement content linking in pinboards.  It's very 
beta, but demonstrates the capability.

To use:
* Update tse.js to have the ID of your pinboard.
* Add a callback custom action that applies to context menus in a pinboard.  The
name can be anything, but the code expects "filter", so if you use a different name, update the code.

* index.html - controls the layout and control for the app.
* tse.css - basic style sheet
* tse.js - application code for embedding
