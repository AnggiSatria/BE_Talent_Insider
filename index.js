const express = require("express");
const cors = require("cors")
require('dotenv').config()
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


const router = require("./src/routes/index")

app.use("/api/", router)

app.listen(port, console.log(`Server Running At PORT : ${port}`))
