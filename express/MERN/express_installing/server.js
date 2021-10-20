const express = require('express')
const app = express()

// home page
app.get("/",(req,res) => {
    res.send('welcome to express')
})

// static routs
app.get("/about", (_req, res) => {
    res.send(`Welocome to about page`);
})

// dynamic rout's
// On browser type http://localhost:5000/user/5
// 5 is a user id
app.get("/user/:id", (_req, res)=>{
    const userId = _req.params.id

    res.send(`Your id is = ${userId}`)
})

// using controller
const controller = require("./profile")
app.get("/products", controller.products)

// server fix port
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server started at $(PORT)`);
})

// for page not found /404 page not found
app.use(function(req, res, next) {
    // both'll work
    res.send('page not found')
    res.status(404).send('page not found')
})