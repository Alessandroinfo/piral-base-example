# Piral base example

- Using only piral-base library you can choice whatever framework for app-shell and remove the react dependence from it.
- Also without any dependencies from the piral-instance.


Done with commands:
- `npm init piral-instance ./app-shell --name app-shell --framework piral-base`
- `npm init pilet`

Remember to publish your pilet into the feed service otherwise you will use the pilets served automatically from debug into `/$pilet-api` folder.

Debug the pilet with a specific app shell with:
- `npx pilet debug --app app-shell`

In order to work you need to put the app-shell in package.json as a dev dependence.
