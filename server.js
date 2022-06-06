const express= require ("express")
const path = require ("path")
const data = require ("./db/db.json")
const fs = require ("fs")
const app = express() 

const PORT = process.env.PORT || 3001 //creating express-mandatory//

app.use(express.json()) //allowed express to work in this application//
app.use (express.static("public"))
app.use (express.urlencoded({extended:true})) //allow front end and backend communication//





app.listen(PORT,function(){
    console.log ("app is listening")
})
