const express = require("express");
const app = express();

app.use(express.static("html"));

app.get("/", (require, response)=>{
    response.sendFile("index.html");
})

app.listen(3000);