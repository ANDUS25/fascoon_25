const express = require('express')
const app = express()

// home page
app.get("/",(req,res) => {
    res.send('<h1>Welcome to Express Server</h1>')
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
// Controller-1
// controller path
const controller = require("./Controller/controller")
// exact path
app.get("/products", controller.products)

// Controller-2
const controller2 = require("./Controller/profile")
app.get("/profile", controller2.profile)



// server fix port
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})

// for page not found /404 page not found
app.use(function(req, res, next) {
    // both'll work
    res.send('<h1> Sorry Your enterd routes is not found !!!</h1>')
    res.status(404).send('page not found')
})