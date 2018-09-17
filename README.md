# play-with-rollup
Example setup for various Rollup module(es/umd/cjs) type with babel(server-side) and webpack(client-side)

### How to develop

```
# build
npm run build:lib

# load rollup bundle at server(with babel)
## Will output static HTML of App(React component)
npm run serve:server

# load rollup bundle at client(browser with webpack)
## Will start webpack-dev-server and open http://localhost:8080
## Then render App(React component) into browser.
npm run serve:client

# [Production] Transpile(build) server scripts(with babel)
## Will output transpiled sources to `/dist`
npm run build:server

# [Production] load rollup bundle at server(without babel)
## Will output static HTML of App(React component)
npm run servep:server
```