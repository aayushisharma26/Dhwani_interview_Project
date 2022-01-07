const express=require("express")

const router=require("./router/router.js")

const bodyParser=require("body-parser")

const app=express()

app.use(bodyParser.json())

// app.use(router)
app.use ("/user",router)

app.listen(4000,()=>console.log("listning to the portal"))

