const express = require("express");
const app = express();
// console.dir(app);
// app.use((req, res) => {
//     console.log("we got another request");
//     res.send("got your request ")
// })
app.get("/cats", (req, res) => {
    console.log("we got cat request");
    res.send("got your cat request ")
})
app.listen(3000, () => {
    console.log("listening on Port no 3000");
})