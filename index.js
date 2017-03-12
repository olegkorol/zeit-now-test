'use strict';

const app  = require("express")();
const port = process.env.PORT || 4201;

let salutation = process.env.SALUTATION;

 app.get("/", function(req, res) {
    res.send(`
    <h1>Hello, ${salutation}!</h1>
    <h2>Express server is up and running on port ${port}</h2>
    `);
    console.info(`Route '/' was called`)
 });

 app.listen(port, function() {
   console.log("Express app listening on port:", port);
 });