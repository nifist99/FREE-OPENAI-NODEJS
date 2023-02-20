'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')

const router = require("./routes/index.js");

const app = express()
app.use(cors())
app.use(express.json());

app.use(router);

const host = process.env.HOST || undefined
const port = parseInt(process.env.PORT ?? 3000)

const server = http.createServer(app);

const listenerCallback = () => {
    console.log(`Server is listening on ${port}`)
}


server.listen(port, listenerCallback)