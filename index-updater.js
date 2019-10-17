// Increase the browser lock by ~5 seconds by importing a dependency (vue). With a full 
// scaled application with many dependencies you can see how this can affect development.

let save1Delay = 4000 // wait for initial build
let save2Delay = 6000
let importVue = false

let fs = require('fs')
let path = require('path')
let file = __dirname + '/index.js'
let vuejs = importVue? 'import v from "vue";' : ''

setTimeout(() => console.log("\n\nSaving index.js with an error..\n\n"), save1Delay - 500)
setTimeout(() => fs.writeFile(file, vuejs + '<div></div>', () => {}), save1Delay)
setTimeout(() => console.log("\n\nSaving index.js without the error..\n\n"), save2Delay - 500)
setTimeout(() => fs.writeFile(file, vuejs, () => {}), save2Delay)
setTimeout(() => console.log("\n\nThe browser should be now locked for ~5-10 seconds..\n\n"), save2Delay + 500)
