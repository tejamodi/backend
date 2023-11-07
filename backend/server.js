const bodyParser = require("body-parser")
const express = require("express")
const dbConnect = require("./config/dbConfig")
const cors = require("cors")
const router = require("./routes/mealRoute")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8888

dbConnect()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api", router)

app.listen(port, () => {
    console.log(`server is running on ${port} value`)
})