const express = require("express");
const app = express();
// console.dir(app);
// app.use((req, res) => {
//     console.log("we got another request");
//     res.send("got your request ")
// })
app.get('/', (req, res) => {
    console.log('home page ');
    res.send('welcome to home page')
})
app.get("/cats", (req, res) => {
    console.log("we got cat request");
    res.send("MEOW ");
})
app.get('*', (req, res) => {
    res.send("I don't know the path");
})
app.listen(3000, () => {
    console.log("listening on Port no 3000");
})