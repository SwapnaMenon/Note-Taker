const express= require ("express")
const path = require ("path")
const data = require ("./db/db.json")
const fs = require ("fs")
const { pathToFileURL } = require("url")
const { application } = require("express")
const app = express() 
const shortid = require ("shortid")

const PORT = process.env.PORT || 3001 //creating express-mandatory//

app.use(express.json()) //allowed express to work in this application//
app.use (express.static("public"))
app.use (express.urlencoded({extended:true})) //allow front end and backend communication//


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname,"./public/notes.html"))//re- response to the user//
})
app.get("/api/notes", function(req,res){
    res.sendFile(path.join(__dirname,"./db/db.json")) //get the data//
})
app.post("/api/notes",function(req,res){
    const note= req.body 
    note.id=shortid.generate()
    data.push(note)
    fs.writeFileSync("./db/db.json", JSON.stringify(data)) //convert the data into json////get whatever the old file has and new file entered- overwrite the old file with the new file //
    res.json(data) //send the data back to user for display//


}) //post the data//

app.listen(PORT,function(){
    console.log ("app is listening")
})
