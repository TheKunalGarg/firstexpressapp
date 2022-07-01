const express = require("express");
const app = express();
// console.dir(app);
app.use((req, res) => {
    console.log("we got another request");
    res.send("got your request ")
})
app.listen(3000, () => {
    console.log("listening on Port no 3000");
})