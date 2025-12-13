const express = require("express");
const app = express();
const htmlCodePath = __dirname + "/public/html/";
app.use(express.static("public"));

app.get("/", (require, response)=>{
    console.log(htmlCodePath + "index.html");
    response.sendFile(htmlCodePath + "index.html");
});

app.listen(3000);