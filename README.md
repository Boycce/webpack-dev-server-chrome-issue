## Webpack-dev-server / Chrome issue

When using `webpack-dev-server` with `writeToDisk` set to true, Chrome seems to lock up for 5-10 seconds when resaving files with an error. The lock duration increases with the bundle size which can become problematic when working on applications

## Steps to reproduce:

1. add the project folder as a chrome workspace
2. `npm install`
3. `npm run dev`
4. open http://localhost:8080 and DevTools
5. re-run `npm run dev`

## Ways to avoid the lock

1. `devServer.writeToDisk = false`
2. or `devServer.inline = false`
3. or close devtools

## Specs

- Ubuntu 18.04.1 LTS
- Chrome Version 77.0.3865.75 (Official Build) (64-bit)
- Node 10/12 (have tested both)
- NPM 6.4.1 
