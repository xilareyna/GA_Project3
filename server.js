const express = require("express");
const app = require("./backend/server.js");
app.use(express.static("build"));

// const path = require(‘path’);
// app.get('*', (req, res)=> {
//     res.sendFile(path.resolve(`${__dirname}/build/index.html`));
// });
