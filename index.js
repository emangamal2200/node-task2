const express = require("express")
const router = require("/routes")
//const todosRouter = require("./routes")
const app = express()
app.use(express.json())
//app.use('/',router)
app.listen(3000, ()=>{
  console.log(`Server is up and running on: //localhost${3000}`)
})