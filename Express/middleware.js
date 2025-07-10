const express= require("express")
const app=express()

 // req => middleware => res

const logger = require("./logger")
const auth= require("./authorize")
const authorize = require("./authorize")



// dont need to add logger and authorize  manually to all the routes and the order in the list matters
app.use([logger,authorize])
//this logger will be used only for the routes after api
app.use("/api",logger)

app.get("/",logger,(req,res)=>{
 
    res.send('Home')
})

app.get("/api/about",logger,(req,res)=>{
    res.send("About")
})

app.get("/api/products",(req,res)=>{
    res.send("Products")
})
app.get("/api/items",[logger,authorize],(req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})