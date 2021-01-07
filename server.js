const express = require("express");
const app = require("./frontend/src/App.js");
app.use(express.static("build"));

// const path = require(‘path’);
// app.get('*', (req, res)=> {
//     res.sendFile(path.resolve(`${__dirname}/build/index.html`));
// });
